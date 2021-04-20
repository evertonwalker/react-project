const DiretaFilho = (props) => {
  const { texto, numero, bool } = props;

  return (
    <div>
      <div>{texto}</div>
      <div>{numero}</div>
      <div>{bool}</div>
    </div>
  );
};

export default DiretaFilho;
