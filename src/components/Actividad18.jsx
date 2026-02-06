import { useState } from "react";

function Actividad18() {
  const [vertexto, setVerTexto] = useState(false);
  let textoH3 = "";
  let textoP = "";
  if (vertexto) {
    textoH3 = "Enchufe Inteligente";
    textoP = "9.99€";
  } else {
    textoH3 = "";
    textoP = "";
  }

  return (
    <div>
      <h1>Actividad 18</h1>
      <button onClick={() => setVerTexto(!vertexto)}>Detalles</button>
      <h3>{textoH3}</h3>
      <p>{textoP}</p>
    </div>
  );
}

export default Actividad18;
