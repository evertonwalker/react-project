import React from "react";

const IndiretaFilho = (props) => {
  const enviar = () => props.enviarDadosParaComponentPai("Walker", 25, true);
  return (
    <div>
      Componente Filho:
      <button onClick={enviar}>Fornercer Informações</button>
    </div>
  );
};

export default IndiretaFilho;
