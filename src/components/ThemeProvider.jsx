import { useState } from "react";
import { ThemeContext } from "../ThemeContext";

export function ThemeProvider ({ children }) {
    const [tema, setTema] = useState("claro");

    const toggleTema = () => {
        setTema((prev) => (prev === "claro" ? "oscuro" : "claro"));
    }
}