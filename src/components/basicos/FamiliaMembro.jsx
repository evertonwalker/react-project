import React from "react";

const FamiliaMembro = (props) => {
  const { name, lastName } = props;

  return (
    <div>
      <span>
        {name} <strong> {lastName} </strong>
      </span>
    </div>
  );
};

export default FamiliaMembro;
