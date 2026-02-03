import { useState } from "react";

function Actividad12() {
  const [tamanno, setTamanno] = useState(14);
  return (
    <div>
      <h1>Actividad12</h1>
      <p style={{ fontSize: tamanno }}>Este texto cambia de tamaño</p>
      <button onClick={() => setTamanno(tamanno + 1)}>Aumentar</button>
      <button onClick={() => setTamanno(tamanno - 1)}>Disminuir</button>
    </div>
  );
}

export default Actividad12;
