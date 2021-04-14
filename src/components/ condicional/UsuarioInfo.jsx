import React from "react";
import ComponentIf from "./If";

const UsuarioInfo = (props) => {
  const { usuario } = props;

  const verifyUser = usuario && usuario.nome;

  console.log(verifyUser);
  return (
    <div>
      <ComponentIf test={verifyUser}>
        Seja bem vindo <strong> {usuario.nome}</strong>!
      </ComponentIf>
    </div>
  );
};

export default UsuarioInfo;
