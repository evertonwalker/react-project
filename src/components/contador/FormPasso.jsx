import React from "react";

const FormPasso = (props) => {
  const changePasso = (event) => {
    props.alterandoPasso(+event.target.value);
  };

  return (
    <div>
      <strong>Passo: </strong>
      <input value={props.passo} onChange={changePasso} />
    </div>
  );
};

export default FormPasso;
