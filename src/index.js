import "./index.css"; // Import relativo

import ReactDOM from "react-dom";
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

const tag = <strong>Olá mundo2!</strong>;

ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
  </div>,
  document.getElementById("root")
);
