import React from "react";
import "./Card.css";

const Card = (props) => {
  const { titulo, children } = props;

  const cardStyle = {
    backgroundColor: props.color || "#F00",
    borderColor: props.color || "#F00",
  };

  return (
    <div className="Card" style={cardStyle}>
      <div className="Title">{titulo}</div>
      <div className="Content">{children}</div>
    </div>
  );
};

export default Card;
