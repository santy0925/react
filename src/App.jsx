
import { ThemeProvider } from "./components/ThemeProvider";
import { Contenido } from "./components/contenido";

function App() {
  return(
    <ThemeProvider>
      <Contenido />
    </ThemeProvider>
  );
}

export default App;