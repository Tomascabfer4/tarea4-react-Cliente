import { useState } from "react";

function Actividad8() {
  const [texto, setTexto] = useState("");
  return (
    <div>
      <h1>Actividad 8</h1>
      <textarea onChange={(e) => setTexto(e.target.value)} />
      <br />
      <span>{texto.length}</span>
    </div>
  );
}

export default Actividad8;
