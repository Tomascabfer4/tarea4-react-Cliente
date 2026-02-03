import { useState } from "react";

function Actividad3() {
  const [texto, setTexto] = useState("Apagado");
  return (
    // Usamos un texto, este se modifica con el useState
    // Usamos un input con onChange para que se vea instantaneamente el texto
    // Usamos un parrafo para mostrar el texto
    <div>
      <h1>Actividad 3</h1>
      <input value={texto} onChange={(e) => setTexto(e.target.value)} />
      <p>{texto}</p>
    </div>
  );
}

export default Actividad3;
