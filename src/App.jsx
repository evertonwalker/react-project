import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragment";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Card from "./components/basicos/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/ condicional/ParOuImpa";

import "./App.css";
import UsuarioInfo from "./components/ condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";

// Quando se tem o default, vc pode retornar uma função anônima, caso não, precisa exportar uma função nomeada
const App = () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#12 Contador em C. em classe" color="#424242">
        <Contador numeroInicial={10} passo={2}></Contador>
      </Card>
      <Card titulo="#11 Componente controlado (Input)" color="#E45F56">
        <Input></Input>
      </Card>
      <Card titulo="#10 Comunicação indireta" color="#59323C">
        <IndiretaPai></IndiretaPai>
      </Card>
      <Card titulo="#09 Comunicação direta" color="#542395">
        {/* Comunição direta é simplesmente o fato do component pai, passar dados
          para o filho */}
        <DiretaPai></DiretaPai>
      </Card>
      <Card titulo="#08 Condicional" color="#982395">
        <ParOuImpar valor={21}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Walker" }} />
        <UsuarioInfo usuario={{}}></UsuarioInfo>
        <UsuarioInfo></UsuarioInfo>
      </Card>
      <Card titulo="#07 Repetição produtos" color="#FA5241">
        <TabelaProdutos></TabelaProdutos>
      </Card>
      <Card titulo="#06 Repetição" color="#FF4C65">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card titulo="#05 Componente pai e filho" color="#1F91">
        <Familia lastName="Son">
          <FamiliaMembro name="Walker"></FamiliaMembro>
          <FamiliaMembro name="Everton"></FamiliaMembro>
          <FamiliaMembro name="Pro"></FamiliaMembro>
        </Familia>
      </Card>
      <Card titulo="#04 Desafio número aleatório" color="#080">
        <NumeroAleatorio minimo="10" maximo="100"></NumeroAleatorio>
      </Card>
      <Card titulo="#03 Fragmento" color="#008">
        <Fragmento></Fragmento>
      </Card>
      <Card titulo="#02 Com parâmetro" color="#F46900">
        <ComParametro titulo="Segundo componente" subtitulo="Muito legal" />
      </Card>
      <Card titulo="#01 Primeiro componente">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);

export default App;
