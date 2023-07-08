import { useState } from "react";
import classes from "../styles/MiniPlayer.module.css";

const MiniPlayer = ({ videoId }) => {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen((preOpen) => !preOpen);
  };

  return (
    <div
      className={`${classes.miniPlayer} ${!open ? classes.floatingBtn : null}`}
    >
      <span
        className={`material-icons-outlined ${classes.open}`}
        onClick={handleToggle}
      >
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={handleToggle}
      >
        {" "}
        close{" "}
      </span>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};

export default MiniPlayer;
