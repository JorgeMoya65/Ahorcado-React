import { useEffect, useState } from "react";
import "../Style/Word.css";

//  asdwfide or

// const letras = "asdwfidet or"
// const palabra = "Sopa de macaco";

// const [letras, setLetras] = useState([]);
// const [palabra, setPalabra] = useState([]);

function Word({ configWordContainer }) {

    const [juego, setJuego] = useState([]);
    const [letras, setLetras] = useState("onmtpy");
    const [palabra, setPalabra] = useState("OnOmAtOpEyA");

    useEffect(() => {
        const estructura = palabra.split("").map((letra) => {
            return {
                letra: letra,
                conseguida: !(/[a-zA-Z]/.test(letra)) || letras.toLowerCase().includes(letra.toLowerCase())
            };
        });
        setJuego(estructura);
        console.log(configWordContainer);
    }, [configWordContainer]);
    return (
        <ol className="Word"
            style={{
                textTransform: configWordContainer == "AA" ? "uppercase"
                    : configWordContainer == "aa" ? "lowercase"
                        : "none"
            }}>
            {juego.map((obj, index) => {
                return (

                    /[a-zA-Z]/.test(obj.letra) ?

                        <li key={index}>
                            {obj.conseguida ? obj.letra : "\u00A0"}
                        </li>
                        :
                        obj.letra == " " ?
                            "\u00A0\u00A0\u00A0\u00A0"
                            :
                            <li key={index} style={{ border: "none" }}>
                                {obj.letra}
                            </li>
                );
            })}
        </ol>
    )
}

export default Word

// git init
// git config user.name "nombre"
// git config user.email "miCorreo"

// git remote add origin https://github.com/link-del-repositorio.git

// git add . 
// git commit -m "programacion del sistema configuracion"
// git push

// *gitgnore*
// node_modules
// dist
// dist-ssr
// *.local
