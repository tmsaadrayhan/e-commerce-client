import React from "react";
import PropTypes from "prop-types";

// Star component that represents a single star
const Star = ({ filled, halfFilled, size }) => {
  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        width: `${size}rem`,
        fontSize: "1em",
        color: "lightgray",
        margin: "0px 2px",
      }}
    >
      <span
        style={{
          color: "gold",
          position: "absolute",
          top: 0,
          left: 0,
          width: filled ? "100%" : halfFilled ? "50%" : "0%",
          overflow: "hidden",
        }}
      >
        &#9733;
      </span>
      <span>&#9733;</span>
    </span>
  );
};

Star.propTypes = {
  filled: PropTypes.bool,
  halfFilled: PropTypes.bool,
};

const Rating = ({ rating, size }) => {
  // Ensure the rating is within the valid range of 0 to 5
  const validRating = Math.min(5, Math.max(0, rating));
  const fullStars = Math.floor(validRating);
  const hasHalfStar = validRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div>
      {Array.from({ length: fullStars }, (_, index) => (
        <Star key={index} filled size />
      ))}
      {hasHalfStar && <Star halfFilled size />}
      {Array.from({ length: emptyStars }, (_, index) => (
        <Star size key={index + fullStars + (hasHalfStar ? 1 : 0)} />
      ))}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
