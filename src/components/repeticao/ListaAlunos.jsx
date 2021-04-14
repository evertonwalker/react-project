import React from "react";
import alunos from "../../data/alunos";

const ListaAlunos = (props) => {
  const styleUl = {
    listStyle: "none",
    padding: 0,
  };

  return (
    <div>
      <ul style={styleUl}>
        {alunos.map((aluno) => {
          return (
            <li key={aluno.id}>
              {aluno.nome} - {aluno.nota}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListaAlunos;
