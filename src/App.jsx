import ListaTareas from "./components/ListaTareas";
import { ThemeProvider } from "./components/ThemeProvider";
import { Contenido } from "./components/contenido";

function App() {
  return(
    <div style={{padding: "2rem", fontFamily: "Arial"}}>
      <h1>Lista de Tareas</h1>
      <ListaTareas />
    </div>
  );
}

export default App;