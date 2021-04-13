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

# Props

Se você passar um parâmetro em um componente entre aspas, ele irá no valor strings: <code>titulo="teste"</code> --> String, mas se você passar entre chaves ele irá no valor real,
isso é muito útil quando você quiser passar valores números:
<code>nota={9.3} </code> --> 9.3 Number

Outro ponto interessante sobre propriedades é que você não pode alterar os valores delas, elas são apenas para leitura!
caso tente fazer algo do tipo: <code>props.variavel = 'teste'</code>, você vai ver que receberá erro. 

# React Fragment

Sempre que você quer devolver mais de um elemento adjacentes e não circunda eles com nenhuma div, é preciso usar o React.Fragment, 
existe duas formas de chama-lo: <React.Fragment> </React.Fragment> ou <> </>, a diferença entre as duas sintaxes é que, a 2° não te permite passar
atributos, porém normalmente você n usa atributos em Fragments.