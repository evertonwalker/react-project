import React, { Component } from "react";
import Botoes from "./Botoes";
import "./Contador.css";
import Display from "./Display";
import FormPasso from "./FormPasso";

export default class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passo || 1,
  };

  makeIncrementOrDecrement = (flag) => {
    if (flag) {
      this.setState({
        numero: this.state.numero + this.state.passo,
      });
    } else {
      this.setState({
        numero: this.state.numero - this.state.passo,
      });
    }
  };

  changePasso = (valorPasso) => {
    this.setState({
      passo: valorPasso,
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <FormPasso passo={this.state.passo} alterandoPasso={this.changePasso} />
        <Botoes incrementOrDecrement={this.makeIncrementOrDecrement} />
      </div>
    );
  }
}
