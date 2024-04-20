import { useState } from "react";
import "./style.css";
import { FaStar } from "react-icons/fa";

export default function StarRating({ totalStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  return (
    <>
      <div className="star-rating">
        {[...Array(totalStars)].map(
          (_, index) => (
            (
              <FaStar
                key={index}
                className={index <= (hover || rating) ? "active" : "inactive"}
                onClick={() => handleClick(index)}
                onMouseMove={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                size={50}
              />
            )
          )
        )}
      </div>
    </>
  );
}
