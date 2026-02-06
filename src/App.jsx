import { useState } from "react";
import "./App.css";
import Actividad1 from "./components/Actividad1";
import Actividad2 from "./components/Actividad2";
import Actividad3 from "./components/Actividad3";
import Actividad4 from "./components/Actividad4";
import Actividad5 from "./components/Actividad5";
import Actividad6 from "./components/Actividad6";
import Actividad7 from "./components/Actividad7";
import Actividad8 from "./components/Actividad8";
import Actividad9 from "./components/Actividad9";
import Actividad10 from "./components/Actividad10";
import Actividad11 from "./components/Actividad11";
import Actividad12 from "./components/Actividad12";
import Actividad13 from "./components/Actividad13";
import Actividad14 from "./components/Actividad14";
import Actividad15 from "./components/Actividad15";
import Actividad16 from "./components/Actividad16";
import Actividad17 from "./components/Actividad17";
import Actividad18 from "./components/Actividad18";
import Actividad19 from "./components/Actividad19";
import Actividad20 from "./components/Actividad20";
import Actividad21 from "./components/Actividad21";
import Actividad22 from "./components/Actividad22";
import Actividad23 from "./components/Actividad23";
import Actividad24 from "./components/Actividad24";
import Actividad25 from "./components/Actividad25";

function App() {
  //Estado para el componente 14
  const [cambiarTema, setCambiarTema] = useState("tema-oscuro");

  return (
    <div className={cambiarTema}>
      <Actividad1 />
      <Actividad2 />
      <Actividad3 />
      <Actividad4 />
      <Actividad5 />
      <Actividad6 />
      <Actividad7 />
      <Actividad8 />
      <Actividad9 />
      <Actividad10 />
      <Actividad11 />
      <Actividad12 />
      <Actividad13 />
      <Actividad14 //Aqui le enviamos la funcion al hijo para que la ejecute.
        botonClick={() =>
          setCambiarTema(
            cambiarTema === "tema-oscuro" ? "tema-claro" : "tema-oscuro",
          )
        }
      />
      <Actividad15 />
      <Actividad16 />
      <Actividad17 />
      <Actividad18 />
      <Actividad19 />
      <Actividad20 />
      <Actividad21 />
      <Actividad22 />
      <Actividad23 />
      <Actividad24 />
      <Actividad25 />
    </div>
  );
}

export default App;
