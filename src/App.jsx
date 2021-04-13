import React from 'react';


import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from './components/basicos/Fragment';
import NumeroAleatorio from './components/basicos/NumeroAleatorio';
import Card from './components/basicos/layout/Card';

// Quando se tem o default, vc pode retornar uma função anônima, caso não, precisa exportar uma função nomeada
export default () => (
    <div class="app">
        <h1>Fundamentos React</h1>
        <Card titulo="#04 Desafio número aleatório">
            <NumeroAleatorio minimo="10" maximo="100"></NumeroAleatorio>
        </Card>
        <Card titulo="#03 Fragmento">
            <Fragmento></Fragmento>
        </Card>
        <Card titulo="#02 Com parâmetro">
            <ComParametro titulo="Segundo componente" subtitulo="Muito legal" />
        </Card>
        <Card titulo="#01 Primeiro componente">
            <Primeiro></Primeiro>
        </Card>
    </div>
);