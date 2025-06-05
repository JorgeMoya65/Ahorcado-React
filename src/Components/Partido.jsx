import React, { useEffect, useReducer } from 'react';
import "../Style/Partido.css"

const initialState = { equipo1: 0, equipo2: 0 };

function Marcador() {
    const [partido, setPartido] = useReducer(reducer, initialState);

    const partidoHandler = (puntoPaQuien) => {
        setPartido(puntoPaQuien);
    };

    function reducer(state, action) {
        if (action === 'equipo1') {
            return { ...state, equipo1: state.equipo1 + 1 };
        }
        if (action === 'equipo2') {
            return { ...state, equipo2: state.equipo2 + 1 };
        }
        if (action === 'reset') {
            return initialState;
        }
        return state;
    }

    useEffect(() => {
        if (partido.equipo1 === 5) {

            setTimeout(() => {
                alert(`¡Ganó el equipo de Alemania! con una puntuacion de: ${partido.equipo1} a ${partido.equipo2}`);
            }, 50);

        } else if (partido.equipo2 === 5) {
            
            setTimeout(() => {
                alert(`¡Ganó el equipo de Colombia! con una puntuacion de: ${partido.equipo2} a ${partido.equipo1}`);
            }, 50);

        }
    }, [partido]);

    return (
        <div>
            <img src="https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1e9-1f1ea.svg" alt="" />
            <h2 >Alemania: {partido.equipo1}</h2>

            <img src="https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1e8-1f1f4.svg" alt="" />
            <h2 >Colombia: {partido.equipo2}</h2>

            <span>
                <button id='alemania' onClick={() => partidoHandler('equipo1')}>Equipo 1</button>
                <button id='colombia' onClick={() => partidoHandler('equipo2')}>Equipo 2</button>
                <button id='limpiar' onClick={() => partidoHandler('reset')}>Reset</button>
            </span>
        </div>
    );
}

export default Marcador