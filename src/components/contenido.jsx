import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { BotonCambioTema } from "./BotonCambioTema";
import ListaTareas from "./ListaTareas";    

export function Contenido() {
    const { tema } = useContext(ThemeContext);

    const estilos = {
        backgroundColor: tema === "claro" ? "#fff" : "#222",
        color: tema === "claro" ? "#000" : "#fff",
        height: "100vh",
        padding: "2em",
        transition: "all 0.3s",
    };

    return (
        <div style={estilos}>
            <h1>App con tema{tema}</h1>
           <BotonCambioTema />
           <h1>Lista de Tareas</h1>
              <ListaTareas />
        </div>
    );
}