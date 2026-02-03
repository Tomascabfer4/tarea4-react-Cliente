import { useState } from "react";

function Actividad10() {
  const [desactivado, setDesactivado] = useState(true);
  return (
    <div>
      <h1>Actividad10</h1>
      <p>Click para poder continuar</p>
      <input
        type="checkbox"
        onChange={(e) => setDesactivado(!e.target.checked)}
      ></input>
      {/* Invertimos el valor con ! para que activado sea true  */}
      <button disabled={desactivado}>Continuar</button>
    </div>
  );
}

export default Actividad10;
