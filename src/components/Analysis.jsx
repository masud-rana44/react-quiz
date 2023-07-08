import classes from "../styles/Analysis.module.css";
import Question from "./Question";

const Analysis = ({ answers, correct, noq }) => {
  return (
    <div className={classes.analysis}>
      <h1>Question Analysis</h1>
      <h4>
        You answered {correct} out of {noq} questions correctly
      </h4>
      {answers.map((question) => (
        <Question
          key={question.title}
          title={question.title}
          options={question.options}
        />
      ))}
    </div>
  );
};

export default Analysis;
