import { useState } from "react";

function Actividad20() {
  // Usamos un vector como estado
  const [lista, setLista] = useState([]);
  // Si el contenido de la lista es igual a 0 se escribe el mensaje
  const alerta = lista.length === 0 ? "No hay elementos" : "";
  // Hacemos una funcion para añadir elementos a la lista
  const crearElemento = () => {
    setLista([...lista, `Elemento ${lista.length}`]);
  };
  return (
    <div>
      <h1>Actividad20</h1>
      {/* Cada vez que le demos al boton se añadira un elemento */}
      <button onClick={crearElemento}>Añadir Elemento</button>
      <ul>
        {/* Recorremos generando un li por elemento de la lista, como es un estado lo vera automaticamente */}
        {/* ¿Porque podemos añadir dentro de las llaves (osea javascript) etiquetas li?,porque es jsx, 
        babel lo traduce a javascript, tambien usamos parentesis con funcion flecha en
        lugar de llaves para indicar el html, lo hacemos porque viene con el return incluido,
        map crea una lista nueva con los valores que ya tiene mas el li,
        si no hacemos return esa lista no se devuelve con lo cual esta vacia. */}
        {/* Comparativa de lista:
        "Elemento 1",
        "Elemento 2",
        "Elemento 3"
        Lista despues del map:
        "<li>Elemento 1</li>",
        "<li>Elemento 2</li>",
        "<li>Elemento 3</li>" */}
        {/* Con esto nos queda claro que el map no recorre, copia y 
        transforma la lista nueva segun el contenido que deseemos. */}
        {lista.map((elemento, indice) => (
          <li key={indice}>{elemento}</li>
        ))}
      </ul>
      <p>{alerta}</p>
    </div>
  );
}

export default Actividad20;
