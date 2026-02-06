import { useState } from "react";

function Actividad24() {
  const [lista, setLista] = useState([]);
  const crearElemento = () => {
    setLista([...lista, "Elemento: " + (lista.length + 1)]);
  };

  return (
    <div>
      <h1>Actividad24</h1>
      <button onClick={crearElemento}>Añadir elementos</button>
      <p>Numero de elementos: {lista.length}</p>
      <ul>
        {lista.map((elemento, indice) => (
          <li key={indice}>{elemento}</li>
        ))}
      </ul>
    </div>
  );
}

export default Actividad24;
