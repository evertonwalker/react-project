import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [valor, setValor] = useState("Inicial");

  const recebeValor = (event) => {
    setValor(event.target.value);
  };

  return (
    <div>
      <h2> {valor}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input className="Input" value={valor} onChange={recebeValor} />
        {/* Quando não se tem o controle do estado do componente, é interessante que ele fique como readOlny
        ou seja ele não tem onChange vinculado a algum useState */}
        <input className="Input" value={valor} readOnly />
        {/* E quando vc tiver um uncotroled componente, é interessante que vc passe o valor undefined
        porque ai o estado irá atualizar o valor de algo que não existe. */}
        <input className="Input" value={undefined} />
      </div>
    </div>
  );
};

export default Input;
