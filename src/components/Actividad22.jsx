import { useState } from "react";

function Actividad22() {
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
  const eliminarElemento = (indice) => {
    // Aqui lo que hace el metodo filter es hacer una copia de la lista sin el elemento del indice en concreto,
    // Lo que hace es ir recorriendo y si el indiceActual mientras lo recorre coincide con el que queremos eliminar,
    // lo excluye de la lista y asi se queda fuera de la misma.
    const listaConElementoBorrado = lista.filter(
      (_, indiceActual) => indiceActual !== indice,
    );
    // Despues cambiamos el estado con la nueva lista sin ese elemento.
    setLista(listaConElementoBorrado);
  };

  return (
    <div>
      <h1>Actividad22</h1>
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
      ></input>
      <button onClick={crearElemento}>Añadir Tarea</button>
      <ul>
        {lista.map((elemento, indice) => (
          <div key={indice}>
            <li>
              {elemento}
              <button onClick={() => eliminarElemento(indice)}></button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Actividad22;
