import React, { useContext, useRef, useReducer, useState } from 'react'
import "../Style/Menu.css";
import { ConfigContext } from '../Contexts/ConfigContexts';

const menuViewInicial = {
    vistaActual: 0,
    nuevojuego: true, //vista 0
    nuevaFrase: false, //vista1
    pausa: false //vista2
};

function menuViewHandler(estado, accion) {

    const nuevoEstado = { ...estado };

    switch (accion) {
        case 0:
            nuevoEstado.vistaActual = 0;
            nuevoEstado.nuevojuego = true;
            nuevoEstado.nuevaFrase = false;
            nuevoEstado.pausa = false;
            return nuevoEstado;

        case 1:
            nuevoEstado.vistaActual = 1;
            nuevoEstado.nuevojuego = false;
            nuevoEstado.nuevaFrase = true;
            nuevoEstado.pausa = false;
            return nuevoEstado;

        case 2:
            nuevoEstado.vistaActual = 2;
            nuevoEstado.nuevojuego = false;
            nuevoEstado.nuevaFrase = false;
            nuevoEstado.pausa = true;
            return nuevoEstado;

        case 3:
            nuevoEstado.vistaActual = 2;
            nuevoEstado.nuevojuego = false;
            nuevoEstado.nuevaFrase = false;
            nuevoEstado.pausa = true;
            return nuevoEstado;

        default:
            return nuevoEstado;
    }

};

function Menu() {

    const [menuView, setMenuView] = useReducer(menuViewHandler, menuViewInicial);
    const { setPalabra, setLetras, setBanco } = useContext(ConfigContext);
    const refFrase = useRef();

    const fraseHandler = (e) => {
        e.preventDefault();

        if (refFrase.current.value.trim() == "") {
            return alert("Debes llenar este campo");

        }
        if (!/[a-zA-Z]/.test(refFrase.current.value)) {
            return alert("Debes llenar este campo");
        }

        const frase = refFrase.current.value.trim().replaceAll("<", "&#60;").replaceAll(">", "&#62;")
        //😈sanitizar😈

        setBanco(0);
        setMenuView(2);
        setMenu(false);
        setPalabra(frase);

    }

    const reiniciarHandler = () => {
        const confirmar = confirm("¿Seguro que deseas reiniciar del juego?");
        if (confirmar) {
            setBanco(0);
            setPalabra("");
            setLetras("");
            setMenuView(1);
        }
    }
    const salirHandler = () => {
        const confirmar = confirm("¿Seguro que deseas salir del juego?");
        if (confirmar) {
            setBanco(0);
            setPalabra("");
            setLetras("");
            setMenuView(0);
        }
    }

    const [menu, setMenu] = useState(true);

    return (
        <div className='Menu' style={{

            backgroundColor: menu ? "rgba(255,255,255, 0.7" : "transparent",
            backdropFilter: `blur(${menu ? 5 : 0}px)`,
            width: `${menu ? 100 : 0}%`, height: `${menu ? 100 : 0}%`
        }}>

            {menuView.pausa && !menu &&
                <img src="./icons/list.svg" alt="Menu" onClick={() => setMenu(!menu)} />
            }

            {menu && <>
                <p >El <span>A</span>horcado</p>

                {menuView.nuevojuego &&
                    <button type='button' onClick={() => setMenuView(1)}>Nuevo Juego</button>}

                {menuView.nuevaFrase &&
                    <form onSubmit={fraseHandler}>
                        <textarea placeholder='Frase secreta' ref={refFrase} required></textarea>
                        <div className='separador'>
                            <button type='button' onClick={() => setMenuView(0)}>Cancelar</button>
                            <button type='submit'>Empezar</button>
                        </div>
                    </form>}

                {menuView.pausa && <>
                    <button type='button' onClick={() => setMenu(!menu)}>Continuar</button>
                    <button type='button' onClick={reiniciarHandler}>Reiniciar</button>
                    <button type='button' onClick={salirHandler}>Salir</button>
                </>
                }
            </>}

        </div>
    )
};

export default Menu