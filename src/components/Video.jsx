import { Link } from "react-router-dom";
import classes from "../styles/video.module.css";

const Video = ({ title, youtubeID, noq }) => {
  return noq > 0 ? (
    <Link to={`/quiz/${youtubeID}`} state={{ videoTitle: title }}>
      <div className={classes.video}>
        <img
          src={`http://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`}
          alt={title}
        />
        <p>{title}</p>
        <div className={classes.qmeta}>
          <p>{noq} Questions</p>
          <p>Total points : {5 * noq}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className={classes.video}>
      <img
        src={`http://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Total points : {5 * noq}</p>
      </div>
    </div>
  );
};

export default Video;
