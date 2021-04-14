import React from "react";
import produtos from "../../data/produtos";

import "./TabelaProduto.css";

const TabelaProdutos = () => {
  const getLinhasOnTable = () => {
    return produtos.map((produto) => {
      return (
        <tr key={produto.id} className={produto.id % 2 ? "Impar" : "Par"}>
          <td> {produto.id}</td>
          <td> {produto.nome}</td>
          <td> {produto.valor}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <table border="1">
        <tbody>
          <tr className="Title-table">
            <td>Id</td>
            <td>Nome</td>
            <td>Valor</td>
          </tr>
          {getLinhasOnTable()}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaProdutos;
