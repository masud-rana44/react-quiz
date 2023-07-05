import image from "../assets/images/3.jpg";
import classes from "../styles/video.module.css";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <Link to="/quiz">
      <div className={classes.video}>
        <img src={image} alt="Cover photo" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </Link>
  );
};

export default Video;
