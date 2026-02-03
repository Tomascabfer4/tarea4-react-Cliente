import { useState } from "react";

function Actividad15() {
  const [estilo, setEstilo] = useState("grey");
  return (
    <div>
      <h1>Actividad15</h1>
      <input
        style={{
          border: `2px solid ${estilo}`,
          outline: "none",
          transition: "border-color 0.3s ease", // Esto hará que el color "fluya"
        }}
        onFocus={() => setEstilo("blue")}
        onBlur={() => setEstilo("grey")}
        placeholder="El borde cambio de color con el foco"
      ></input>
    </div>
  );
}

export default Actividad15;
