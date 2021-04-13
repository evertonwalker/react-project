export default function ComParametro(props) {
  const { titulo, subtitulo } = props;


  return (
    <div>
      <h2>Titulo: {titulo}</h2>
      <h3>Subtitulo: {subtitulo} </h3>
    </div>
  );
}
