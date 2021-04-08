# React.

Para criar um projeto você usa o comando: npx create-app-react "nome-do-projeto"

# JSX

Linguagem que o react usa para ter uma mistura de javascript com tags htmls de forma que consiga ser interpretado,
então é obrigatório sempre que você usar o jsx ter a library React importada.

- Outro ponto é que não importa se é js ou jsx se a lógica estiver com o React importado, vai compilar direitinho, o bom de criar com o padrão jsx é que vcê avisa a IDE, e ao
  outro desenvolvedor o que deveria ter naquele tipo de arquivo.

- Curiosidades sobre o retorno, quando você possui vários elementos para serem retornados por um componente, é
  interessante que você o circunde-ô com (), só assim ele conseguirá retornar todos elementos da maneira correta.

<code>
export default function Primeiro() {
  return (
    <div>
      <h2>Primeiro compenente</h2>
    </div>
  );
}
</code>
