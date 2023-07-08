import successImg from "../assets/images/success.png";
import useFetch from "../hooks/useFetch";
import classes from "../styles/Summary.module.css";

const Summary = ({ score, noq }) => {
  const { result, loading, error } = useFetch(
    "https://api.pexels.com/v1/search?query=nature&per_page=1",
    {
      Authorization: "G5lutisdtcodIfI92X4TRJN5EjPwbC0vVCobhqiAXH3yd6ylff73h1A1",
    },
    "GET"
  );

  const image = result ? result.photos[0].src.medium : successImg;

  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        {/* progress bar will be placed here  */}
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      <div className={classes.badge}>
        {error ? (
          <div className="msg">{error}</div>
        ) : (
          loading && <div className="msg">Loading to display batch...</div>
        )}
        {!loading && !error && <img src={image} alt="image" />}
      </div>
    </div>
  );
};

export default Summary;
