import classes from "../styles/Question.module.css";
import Answers from "./Answers";

const Question = ({ title, options }) => {
  return (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {title}
      </div>
      <Answers options={options} input={false} />
    </div>
  );
};

export default Question;
