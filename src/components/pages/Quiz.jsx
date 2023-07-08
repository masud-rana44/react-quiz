import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import useQuestions from "../../hooks/useQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    case "answer":
      // eslint-disable-next-line no-case-declarations
      const questions = _.cloneDeep(state);
      questions[action.questionId].options[action.optionIndex].checked =
        action.value;

      return questions;

    default:
      return state;
  }
};

const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { questions, loading, error } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  const handleAnswerChange = (e, index) => {
    dispatch({
      type: "answer",
      questionId: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  // handle next question button
  const handleNextQuestion = () => {
    if (currentQuestion + 1 < qna.length) {
      setCurrentQuestion((prevCurr) => prevCurr + 1);
    }
  };

  // handle previous question button
  const handlePrevQuestion = () => {
    if (currentQuestion >= 1 && currentQuestion < qna.length) {
      setCurrentQuestion((prevCurr) => prevCurr - 1);
    }
  };

  // submit quiz
  const handleSubmit = async () => {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    navigate(`/result/${id}`, {
      state: {
        qna,
      },
    });
  };

  // calculate the percentage of progress
  const percentage = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <>
      {error ? (
        <div className="msg">{error}</div>
      ) : (
        loading && <div className="msg">Loading...</div>
      )}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
            input={true}
          />
          <ProgressBar
            handlePrev={handlePrevQuestion}
            handleNext={handleNextQuestion}
            handleSubmit={handleSubmit}
            progress={percentage}
          />
          <MiniPlayer videoId={id} />
        </>
      )}
    </>
  );
};

export default Quiz;
