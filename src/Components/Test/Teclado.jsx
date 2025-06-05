import { useEffect, useState } from "react";
import Tecla from "./Tecla.jsx";
import "./Teclado.css";


const estilo = {

    div: {
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        alignItems: "center",
        flexDirection: "column",
        border: "1px solid blue",
        backgroundColor: "green",
        gap: "20px"
    },

    span: {
        minHeight: "24px",
        width: "100%",
        maxWidth: "480px",
        backgroundColor: "#587866",
        padding: "10px",
        borderRadius: "10px",
        color: "black"
    },

    boton: {
        width: "40px",
        aspectRatio: "1",
        backgroundColor: "darkblue",
        border: "2px solid white",
        borderRadius: "5px",
        color: "white"
    },

}

const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function Teclado() {

    const [palabra, setPalabra] = useState("");

    useEffect(
        () => {
            setTimeout(() => {
                document.querySelector("span").style.backgroundColor = "red";
                setTimeout(() => {
                    document.querySelector("span").style.backgroundColor = "gray";
                }, 100);
            }, 1);

        },
        [palabra]
    );



    const texthandler = (letra) => {
        const consulta = /[a-zA-Z]/.test(letra);

        if (!consulta) {
            const longitud = palabra.length;
            const ultimoBorrado = palabra.slice(0, longitud - 1)
            setPalabra(ultimoBorrado);
            return;
        }
        setPalabra(palabra + letra);
    }

    // const texthandlerA = () => {
    //     setPalabra(palabra + "A");
    // }

    // const texthandlerB = () => {
    //     setPalabra(palabra + "B");
    // }

    // const texthandlerC = () => {
    //     setPalabra(palabra + "C");
    // }

    // const texthandlerDelete = () => {
    //     const longitud = palabra.length;
    //     const ultimoBorrado = palabra.slice(0, longitud - 1)
    //     setPalabra(ultimoBorrado);
    // }

    return (
        <div style={estilo.div}>
            <span style={estilo.span}>{palabra}</span>

            <div className="ordenar">
                {
                    letras.map((letra, posicion) => {
                        return <Tecla tecleo={texthandler} key={posicion}>{letra}</Tecla>
                    }
                    )
                }
                <Tecla tecleo={texthandler}>&#9003;</Tecla>

                {/* <Tecla tecleo={texthandler}>A</Tecla>
                <Tecla tecleo={texthandler}>B</Tecla>
                <Tecla tecleo={texthandler}>C</Tecla>
                <Tecla tecleo={texthandler}>D</Tecla>
                <Tecla tecleo={texthandler}>E</Tecla>
                <Tecla tecleo={texthandler}>F</Tecla>
                <Tecla tecleo={texthandler}>G</Tecla>
                <Tecla tecleo={texthandler}>H</Tecla>
                <Tecla tecleo={texthandler}>I</Tecla>
                <Tecla tecleo={texthandler}>J</Tecla>
                <Tecla tecleo={texthandler}>K</Tecla>
                <Tecla tecleo={texthandler}>L</Tecla>
                <Tecla tecleo={texthandler}>M</Tecla>
                <Tecla tecleo={texthandler}>N</Tecla>
                <Tecla tecleo={texthandler}>O</Tecla>
                <Tecla tecleo={texthandler}>P</Tecla>
                <Tecla tecleo={texthandler}>Q</Tecla>
                <Tecla tecleo={texthandler}>R</Tecla>
                <Tecla tecleo={texthandler}>S</Tecla>
                <Tecla tecleo={texthandler}>T</Tecla>
                <Tecla tecleo={texthandler}>U</Tecla>
                <Tecla tecleo={texthandler}>V</Tecla>
                <Tecla tecleo={texthandler}>W</Tecla>
                <Tecla tecleo={texthandler}>X</Tecla>
                <Tecla tecleo={texthandler}>Y</Tecla>
                <Tecla tecleo={texthandler}>Z</Tecla>
                <Tecla tecleo={texthandler}>&#9003;</Tecla> */}


                <span></span>
                <span></span>
                <span></span>

            </div>

            {/* <button style={{ ...estilo.div, ...estilo.boton }} onclick={texthandlerA}>A</button>
            <button style={{ ...estilo.div, ...estilo.boton }} onclick={texthandlerA}>B</button>
            <button style={{ ...estilo.div, ...estilo.boton }} onclick={texthandlerA}>C</button>
            <button style={{ ...estilo.div, ...estilo.boton }} onclick={texthandlerDelete}>&#9003;</button> */}

        </div>
    )
}

export default Teclado