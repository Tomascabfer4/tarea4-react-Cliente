import { useState } from "react";

function Actividad16() {
const [contador, setContador] = useState(0);
  return (
    <div>
      <h1>Actividad16</h1>
      <button onClick={() => setContador(contador+1)}>Sumar</button>
      <p>{contador}</p>
      <p>{contador < 5 ? "Valor bajo" : "Valor alto"}</p>
    </div>
  );
}

export default Actividad16;
