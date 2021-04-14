import React from "react";

const ParOuImpar = (props) => {
  const { valor } = props;
  const isPar = valor % 2 === 0;

  return (
    <div>
      {isPar ? <span> Par: {valor} </span> : <span> Ímpar: {valor} </span>}
    </div>
  );
};

export default ParOuImpar;
