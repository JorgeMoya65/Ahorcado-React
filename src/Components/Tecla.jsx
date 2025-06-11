//traemos el reeemplazo de id
import { useContext, useEffect, useRef } from "react";
//estilos
import "../Style/Tecla.css";
import { ConfigContext } from "../Contexts/ConfigContexts";

//creamos u compomente que recibe "tecleo" y debe tener hijos.
const Tecla = ({ children }) => {

    const { letras, setLetras, palabra, chairHandler } = useContext(ConfigContext);

    //creamos una referencia a un boton
    const refBoton = useRef();
    
    useEffect(() => {
        if (!letras) {
            refBoton.current.removeAttribute("disabled");
        }
    }, [letras]);

    //funcion que llamaremos dentro del componente
    const manejadorBoton = () => {
        setLetras(letras + children)

        if (!palabra.toLowerCase().includes(String(children).toLowerCase())) {
            chairHandler();
        }
        refBoton.current.setAttribute("disabled", true);
    }

    return (
        <button type="button"
            ref={refBoton}
            className="Tecla"
            style={{
                gridArea: children.toLowerCase()
            }}
            onClick={manejadorBoton}
        // onMouseEnter={manejadorHover}
        // onMouseLeave={manejadorExit}
        >
            {children}
        </button>
    )
}

export default Tecla


