import { useState } from "react";

function Actividad21() {
  // Hacemos un estado para la lista
  const [lista, setLista] = useState([]);
  // Y un estado para manejar lo que se escribe por el input
  const [tarea, setTarea] = useState("");
  const crearElemento = () => {
    if (tarea != "") {
      // Añadimos la tarea a lista, primero se pone el spread de la lista para hacer la copia,
      // y despues el elemento a añadir, en este caso tarea.
      setLista([...lista, tarea]);
    }
  };

  return (
    <div>
      <h1>Actividad21</h1>
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
      ></input>
      <button onClick={crearElemento}>Añadir Tarea</button>
      <ul>
        {lista.map((elemento, indice) => (
          <li key={indice}>{elemento}</li>
        ))}
      </ul>
    </div>
  );
}

export default Actividad21;
