import React from "react";

let NumeroAleatorio = (props) => {
  const { minimo, maximo } = props;

  let aleatorioValor = () => {
    return parseInt(Math.random() * (maximo - minimo) + minimo);
  };

  return (
    <div>
      <h2>Esse foi o número aleatório gerado: {aleatorioValor()}</h2>
    </div>
  );
};

export default NumeroAleatorio;
