import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export function BotonCambioTema() {
    const { tema, toggleTema } = useContext(ThemeContext);

    const estilos ={
        backgroundColor: tema === "claro" ?  "#fff": "#222",
        color: tema === "claro" ? "#000" : "#fff",
        height: "100VH",
        padding: "2em",
        transi5tion: "all 0.3s",
    };
        return(
            <div style={estilos}>
                <h1>App con tema{tema}</h1>
                <BotonCambioTema/>
            </div>
        );



}