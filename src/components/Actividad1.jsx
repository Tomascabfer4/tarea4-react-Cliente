// Enunciado:
// Crea un componente Contador que muestre un número inicial en 0 y un botón.
// Cada vez que se pulse el botón, el número debe aumentar en 1.
// Pistas:  Usa useState(0)  Usa un botón con onClick

import { useState } from "react";

function Actividad1() {
  const [contador, setContador] = useState(0);

  return (
    // Usamos un contador, este se modifica con el useState
    // Usamos un botón con onClick para incrementar el contador
    <div>
      <h1>Actividad 1</h1>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default Actividad1;
