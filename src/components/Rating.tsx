import { useState } from "react";
import Star from "./Star";
import Modal from "./Modal";

export default function Rating({
  color = "gold",
  title = "How do you feel about your last job ?",
  feedbackMessages = [
    "terrible",
    "bad",
    "ok",
    "that was nice",
    "amazing. I ♥ it !",
  ],
}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    if (!!rating) setSubmitted(true);
  };

  const handleQuit = () => {
    setRating(0);
    setHover(0);
    setSubmitted(false);
  };

  const stars = Array.from(
    { length: feedbackMessages.length },
    (_, index) => index + 1,
  );
  const clicked = (star: number) => setRating(star);

  return (
    <>
      <div className="rating-container">
        <p>{title} </p>
        <div className="stars">
          {stars.map((star) => (
            <Star
              key={star}
              star={star}
              color={color}
              rating={rating}
              hover={hover}
              clickHandler={() => clicked(star)}
              mouseEnterHandler={() => setHover(star)}
              mouseLeaveHandler={() => setHover(0)}
            />
          ))}
        </div>
        {rating > 0 && (
          <p className="feedback"> {feedbackMessages[rating - 1]}</p>
        )}
        <button
          className="submit-button"
          disabled={!rating}
          onClick={handleSubmit}
        >
          {" "}
          Submit{" "}
        </button>

        <button className="close-button" onClick={() => setRating(0)}>
          Reset
        </button>

        <Modal
          isOpen={submitted}
          rating={rating}
          stars={stars}
          handleQuit={handleQuit}
        />
      </div>
    </>
  );
}
