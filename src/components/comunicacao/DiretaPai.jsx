import React from "react";
import DiretaFilho from "./DiretaFilho";

const DiretaPai = (props) => {
  return (
    <div>
      <DiretaFilho texto="Valor" numero={3} bool={true} />
    </div>
  );
};

export default DiretaPai;
