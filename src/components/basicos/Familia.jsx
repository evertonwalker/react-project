import React from "react";

const Familia = (props) => {
  return (
    <div>
      {props.children.map((child, key) => {
        // Aqui ele recebe o(s) elemento(s) passado pelo pai e faz um clone exibindo cada um deles.
        return React.cloneElement(child, { ...props, key });
      })}
    </div>
  );
};

export default Familia;
