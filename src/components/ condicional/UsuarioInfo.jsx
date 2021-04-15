import React from "react";
import If from "./If";

const UsuarioInfo = (props) => {
 
  const { usuario } = props ;

  return (
    <div>
      <If test={!!usuario}>
        Seja bem vindo <strong> {usuario?.nome}</strong>!
      </If>
      <If test={!usuario}>
        Seja bem vindo <strong> Amigão!</strong>!
      </If>
    </div>
  );
};

export default UsuarioInfo;
