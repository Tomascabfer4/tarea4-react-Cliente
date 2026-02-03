import { useState } from "react";

function Actividad5() {
  const [contador, setContador] = useState(0);
  const [inputSumar, setInputSumar] = useState(0);

  return (
    <div>
      <h1>Actividad 5</h1>
      <input
        value={inputSumar}
        onChange={(e) => setInputSumar(e.target.value)}
      />
      {/* Cuando ponemos + delante de una variable, (en este caso en el valor del input),
      esta variable se convertira a texto automaticamente. */}
      <button onClick={() => setContador(contador + +inputSumar)}>Sumar</button>
      <p>Contador: {contador}</p>
    </div>
  );
}

export default Actividad5;
