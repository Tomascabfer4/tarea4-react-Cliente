import { useState } from "react";

function Actividad2() {
  const [texto, setTexto] = useState("Apagado");
  //   function cambiarTexto() {
  //     if (texto === "Apagado") {
  //       setTexto("Encendido");
  //     } else {
  //       setTexto("Apagado");
  //     }
  //   }
  return (
    // Usamos un texto, este se modifica con el useState
    // Usamos un botón con onClick para cambiar el texto,
    // usamos el operador ternario para cambiar el texto.
    <div>
      <h1>Actividad 2</h1>
      <p>{texto}</p>
      <button
        onClick={() => setTexto(texto === "Apagado" ? "Encendido" : "Apagado")}
      >
        Cambiar Estado
      </button>
    </div>
  );
}

export default Actividad2;
