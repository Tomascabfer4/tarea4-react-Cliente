import { useState } from "react";

function Actividad9() {
  const [nombre, setNombre] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault(); // Prevenimos que recarge la pagina
    const formData = new FormData(e.target); // Obtenemos los campos del formulario
    const nombreIngresado = formData.get("campoNombre"); // Igualamos la variable nombreIngresado al campo "campoNombre" del formulario
    setNombre(nombreIngresado); // Utilizamos el set del estado para cambiar la variable nombre del estado.
  };

  return (
    <div>
      <h1>Actividad 9 </h1>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          name="campoNombre" //Para que lo pueda leer el estado y asi cambiarla
          placeholder="Escribe tu nombre"
        />
        <button type="submit">Enviar</button>
      </form>

      <p>Hola, {nombre}</p>
    </div>
  );
}

export default Actividad9;
