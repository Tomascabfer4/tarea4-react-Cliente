import { useState } from "react";

function Actividad17() {
  const [logueado, setLogueado] = useState(false);

  return (
    <div>
      <h1>Actividad 17</h1>

      <button onClick={() => setLogueado(!logueado)}>
        {logueado ? "Cerrar Sesión" : "Iniciar Sesión"}
      </button>

      {logueado && <p>Bienvenido, usuario</p>}
    </div>
  );
}

export default Actividad17;
