import React from "react";
import "./Card.css";

const Card = (props) => {
  const { titulo, children } = props;

  return (
    <div className="Card">
      <div className="Title">{titulo}</div>
      <div className="Content">{children}</div>
    </div>
  );
};

export default Card;
