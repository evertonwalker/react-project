import React from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = (props) => {
  let nome, idade, nerd;

  function fornercerInformacoes(nomeChild, idadeChild, nerdChild) {
    console.log(nome, idade, nerd);
  }

  return (
    <div>
      <div>Dados:</div>
      <div>
        <span>Nome: {nome} </span>
      </div>
      <div>
        <span>Idade: {idade} </span>
      </div>
      <div>
        <span>nerd: {nerd ? `verdadeiro` : `falso`} </span>
      </div>

      <IndiretaFilho
        enviarDadosParaComponentPai={fornercerInformacoes}
      ></IndiretaFilho>
    </div>
  );
};

export default IndiretaPai;
