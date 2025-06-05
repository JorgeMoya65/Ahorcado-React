import { useEffect, useReducer, useState } from "react";
import "../Style/Config.css";


function configHandler(estadoAnterior, accion) {

    const estado = { ...estadoAnterior }; //corrige cuando se iguala 2 objetos en javaScript💀

    if (accion == "menu") {
        estado.menu = !estadoAnterior.menu
        estado.case = false
    }
    if (accion == "case") {
        estado.case = !estadoAnterior.case
    }
    return estado
}

const capitalHandler = (estadoAnterior, accion) => {
    const estado = { ...estadoAnterior };
    if (accion == "Mayus") {
        estado.liAA = true;
        estado.liAa = false;
        estado.liaa = false;
        estado.valor = "AA"
    }
    if (accion == "None") {
        estado.liAA = false;
        estado.liAa = true;
        estado.liaa = false;
        estado.valor = "Aa"
    }
    if (accion == "Minus") {
        estado.liAA = false;
        estado.liAa = false;
        estado.liaa = true;
        estado.valor = "aa"
    }
    return estado

}


function Config({mensajero}) {

    const [config, setConfig] = useReducer(configHandler, { menu: false, case: false });

    const [capital, setCapital] = useReducer(capitalHandler, { valor: "Aa", liAA: false, liAa: true, liaa: false });


    useEffect(() => {
    mensajero(capital.valor);
    }, [capital]);
    

    return (
        <div className="Config">
            <img src="/icons/gear-wide-connected.svg"
                alt="Configuracion"
                onClick={() => setConfig("menu")}
                style={{ transform: `rotate(${config.menu ? "90" : "0"}deg)` }} />
            <div className="case-type"
                style={{ transform: `translateX(${config.menu ? "0" : "110"}%)` }}>
                <span onClick={() => setConfig("case")}
                    style={{ cursor: "pointer" }}>Case: </span>

                <ul style={{ overflow: config.case ? "visible" : "hidden" }} >
                    <li className={capital.liAA ? "selected" : ""} onClick={() => setCapital("Mayus")}>AA</li>
                    <li className={capital.liAa ? "selected" : ""} onClick={() => setCapital("None")}>Aa</li>
                    <li className={capital.liaa ? "selected" : ""} onClick={() => setCapital("Minus")}>aa</li>
                </ul>


            </div>

        </div>
    )
}

export default Config