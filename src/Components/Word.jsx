import { useContext, useEffect, useState } from "react";
import "../Style/Word.css";
import { ConfigContext } from "../Contexts/ConfigContexts";

function Word({ configWordContainer }) {

    const { palabra, letras } = useContext(ConfigContext);

    const [juego, setJuego] = useState([]);

    useEffect(() => {
        const estructura = palabra.split("").map((letra) => {
            return {
                letra: letra,
                conseguida: !(/[a-zA-Z]/.test(letra)) || letras.toLowerCase().includes(letra.toLowerCase())
            };
        });
        setJuego(estructura);
        // console.log(configWordContainer);
    }, [configWordContainer, letras, palabra]);
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
// git commit -m "my first commit"
// git push   o   git push -u origin master

// *gitgnore*
// node_modules
// dist
// dist-ssr
// *.local


// git log --oneline                           ver el historial de commit
// git checkout "y el numero del commit"       viajar a un commit anterior
// git checkout master                          para devolver al anterior

