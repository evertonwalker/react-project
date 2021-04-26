const DiretaFilho = (props) => {
  const { texto, numero, bool } = props;

  return (
    <div>
      <div>Texto: {texto}</div>
      <div> Número: {numero}</div>
      <div> Booleano: {bool ? "Verdadeiro" : "Falso "}</div>
    </div>
  );
};

export default DiretaFilho;
