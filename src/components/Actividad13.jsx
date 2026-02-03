import { useState } from "react";

function Actividad13() {
  const [estilo, setEstilo] = useState("");
  return (
    <div>
      <h1>Actividad13</h1>
      <div
        style={{ background: estilo, padding: 10, borderRadius: 10 }}
        onMouseEnter={() => setEstilo("gray")}
        onMouseLeave={() => setEstilo("")}
      >
        FurboVacano es una aplicación increible.
      </div>
    </div>
  );
}

export default Actividad13;
