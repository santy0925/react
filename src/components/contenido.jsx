import {useContext  } from "react";
import { ThemeContext } from "../ThemeContext";
import { BotonCambioTema } from "./BotonCambioTema";

export function Contenido() {
    const { tema } = useContext(ThemeContext);

    return (
        <div className={tema}>
            <h1>Contenido</h1>
            <p>Este es el contenido de la aplicación.</p>
            <BotonCambioTema />
        </div>
    );
}