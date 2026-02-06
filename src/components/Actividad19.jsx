import { useState } from "react";

function Actividad19() {
  const [mensaje, setMensaje] = useState("");
  // Si el mensaje tiene mas de 10 digitos cambia el contenido de la variable alerta.
  const alerta = mensaje.length > 10 ? "Has escrito demasiado texto" : "";
  return (
    <div>
      <h1>Actividad19</h1>
      {/* Le decimos que guarde en "mensaje" el contenido del input */}
      <input
        type="text"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      ></input>
      <p>{alerta}</p>
    </div>
  );
}

export default Actividad19;
