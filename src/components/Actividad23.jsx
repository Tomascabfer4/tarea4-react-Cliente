import { useState } from "react";

function Actividad23() {
  // 1. Guardamos el ÍNDICE del seleccionado (empezamos en null porque nada está seleccionado)
  const [seleccionado, setSeleccionado] = useState(null);
  
  const listaNombres = ["Rafael", "Miguel", "Jorge", "Adrian", "Pablo"];

  return (
    <div>
      <h1>Actividad 23</h1>
      <p>Seleccionado: {seleccionado !== null ? listaNombres[seleccionado] : "Ninguno"}</p>
      
      <ul>
        {listaNombres.map((nombre, indice) => (
          <li 
            key={indice}
            // 2. Evento: Al hacer clic, guardamos SU índice en el estado
            onClick={() => setSeleccionado(indice)}
            // 3. Estilo condicional: Si mi índice es el que está en el estado, me pinto diferente
            style={{
              cursor: "pointer",
              padding: "5px",
              backgroundColor: seleccionado === indice ? "gold" : "transparent",
              fontWeight: seleccionado === indice ? "bold" : "normal",
              color: seleccionado === indice ? "blue" : "white"
            }}
          >
            {nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Actividad23;