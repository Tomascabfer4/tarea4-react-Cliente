import { useState } from "react";

function Actividad4() {
  const [mensajeSecreto, setMensajeSecreto] = useState(true);

  return (
    <div>
      <h1>Actividad 4</h1>
      <button onClick={() => setMensajeSecreto(!mensajeSecreto)}>
        {mensajeSecreto ? "Mostrar" : "Ocultar"}
      </button>
      <p>{mensajeSecreto ? "" : "Este es el mensaje secreto"}</p>
    </div>
  );
}

export default Actividad4;
