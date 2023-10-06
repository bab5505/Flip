import React from "react";
import "./Card.css";

function Card(props) {
  const { caption, src, currNum, totalNum, onClick } = props;

  return (
    <div className="Card" onClick={onClick}> {/* Add onClick here */}
      <img src={src} alt={caption} />
      <p className="caption">{caption}</p>
      <p className="counter">
        {currNum} of {totalNum}
      </p>
    </div>
  );
}

export default Card;
