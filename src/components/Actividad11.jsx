import { useState } from "react";

function Actividad11() {
  const [color, setColor] = useState("blue");
  return (
    <div>
      <h1>Actividad11</h1>
      <button
        style={{ backgroundColor: color }}
        // Aqui dice, es azul?, si lo es ponlo verde y sino ponlo azul. Los dos puntos seria el else.
        onClick={() => setColor(color === "blue" ? "green" : "blue")}
      >
        Hola
      </button>
    </div>
  );
}

export default Actividad11;
