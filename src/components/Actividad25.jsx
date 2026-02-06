import { useState } from "react";

function Actividad25() {
  const [lista] = useState(["Elemento 1", "Elemento 2", "Elemento 3"]);
  const [mostrar, setMostrar] = useState(false);

  return (
    <div>
      <h1>Actividad25</h1>
      {/* Con !mostrar le decimos que cambie el estado al contrario, es decir,
      si mostrar está true le decimos que lo cambie a false,
      pero si es false le decimos que lo cambie a true. */}
      <button onClick={() => setMostrar(!mostrar)}>
        Mostrar / Ocultar Lista
      </button>
      {/* Le decimos si mostrar es verdadero renderizalo */}
      {/* {mostrar ? (
        <ul>
          {lista.map((elemento, indice) => (
            <li key={indice}>{elemento}</li>
          ))}
        </ul>
      ) : (
        ""
      )} */}
      {/* Otra forma de renderizado condicional en el que: Si lo de la izquierda
       es true, dibuja lo de la derecha. Si es false, no hagas absolutamente nada*/}
      {mostrar && (
        <ul>
          {lista.map((elemento, indice) => (
            <li key={indice}>{elemento}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Actividad25;
