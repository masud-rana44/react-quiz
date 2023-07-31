import { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import classes from "../styles/MiniPlayer.module.css";

const MiniPlayer = ({ videoId, title }) => {
  const buttonRef = useRef();
  const [status, setStatus] = useState(true);
  const videoUrl = `http://www.youtube.com/watch?v=${videoId}`;

  const toggleMiniPlayer = () => {
    if (status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(false);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(true);
    }
  };

  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      onClick={status ? toggleMiniPlayer : null}
      ref={buttonRef}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggleMiniPlayer}
      >
        {" "}
        close{" "}
      </span>
      <ReactPlayer
        className={classes.player}
        width="300px"
        height="169px"
        playing={!status}
        url={videoUrl}
        controls
      />
      <p>{title}</p>
    </div>
  );
};

export default MiniPlayer;
