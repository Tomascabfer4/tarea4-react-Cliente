import { useState } from "react";

function Actividad7() {
  const [color, setColor] = useState("red");
  return (
    <div>
      <h1>Actividad7</h1>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value="red">Rojo</option>
        <option value="green">Verde</option>
        <option value="blue">Azul</option>
      </select>
      {/* No puedes usar la propiedas color de p por ejemplo, debes usar la propiedad style, 
      y ahi dentro llamar al objeto color por ejemplo, y pasarle la variable del useState. */}
      <p style={{color:color}}>Este texto cambia de color</p>
    </div>
  );
}

export default Actividad7;
