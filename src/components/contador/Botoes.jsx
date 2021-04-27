import React from "react";

const Botoes = (props) => {
  const callIncrementOrDecrement = (value) => {
    props.incrementOrDecrement(value);
  };

  return (
    <div>
      <button onClick={(_) => callIncrementOrDecrement(true)}>+</button>
      <button onClick={(_) => callIncrementOrDecrement(false)}>-</button>
    </div>
  );
};

export default Botoes;
