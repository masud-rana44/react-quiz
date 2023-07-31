import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

const Result = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { qna } = state;
  const { loading, error, answers } = useAnswers(id);

  const calculate = () => {
    let score = 0;

    answers.forEach((question, qIdx) => {
      const correctIndexes = [],
        checkedIndexes = [];

      question.options.forEach((option, optIdx) => {
        if (option.correct) correctIndexes.push(optIdx);
        if (qna[qIdx].options[optIdx].checked) {
          checkedIndexes.push(optIdx);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexes, checkedIndexes)) score = score + 5;
    });

    return score;
  };

  const userScore = calculate();

  return (
    <>
      {error ? (
        <div className="msg">{error}</div>
      ) : (
        loading && <div className="msg">Loading...</div>
      )}
      {!loading && !error && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analysis
            answers={answers}
            correct={userScore / 5}
            noq={answers.length}
          />
        </>
      )}
    </>
  );
};

export default Result;
