import React from "react";

const Familia = (props) => {
  return (
    <div>
      {props.children.map((child, key) => {
        return React.cloneElement(child, { ...props, key });
      })}
    </div>
  );
};

export default Familia;
