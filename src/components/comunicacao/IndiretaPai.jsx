import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = (props) => {
  const [nome, setNome] = useState("?");
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);

  function fornercerInformacoes(nomeChild, idadeChild, nerdChild) {
    setNome(nomeChild);
    setIdade(idadeChild);
    setNerd(nerdChild);
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
