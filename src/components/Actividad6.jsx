import { useState } from "react";

function Actividad6() {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <h1>Actividad6</h1>
      <div
        onMouseEnter={() => setContador(contador + 1)}
        onMouseLeave={() => setContador(contador - 1)}
      >
        <h3>Pasa el raton</h3>
      </div>
      <p>{contador}</p>
    </div>
  );
}

export default Actividad6;
