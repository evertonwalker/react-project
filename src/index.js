import "./index.css"; // Import relativo

import ReactDOM from "react-dom";
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    <ComParametro titulo="Segundo componente" subtitulo="Muito legal" />
  </div>,
  document.getElementById("root")
);
