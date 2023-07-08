import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";

const ProgressBar = ({ handleNext, handlePrev, handleSubmit, progress }) => {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={handlePrev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>{progress}% Complete!</div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <Button
        className={classes.next}
        onClick={progress === 100 ? handleSubmit : handleNext}
      >
        <span>{progress === 100 ? "Submit Quiz" : "Next Question"}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
};

export default ProgressBar;
