import { useRef, useState } from "react";
import Tecla from "./Tecla.jsx";

// function Foco(props) {



//     if (props.on == true) {
//         return (
//             <div>
//                 <img src="/images/foco on.png" alt="" />
//                 <button>Apagar</button>
//             </div>
//         )

//     } else {

//         return (
//             <div>
//                 <img src="/images/foco off.png" alt="" />
//                 <button>Encender</button>
//             </div>
//         )
//     }
// }

// export default Foco





// function Foco(props) {
//     return (

//         props.on == true ?

//             <div>
//                 <img src="/images/foco on.png" alt="" />
//                 <button>Apagar</button>
//             </div>
//             :
//             <div>
//                 <img src="/images/foco off.png" alt="" />
//                 <button>Encender</button>
//             </div>
//     );

// }
// export default Foco




// function Foco(props) {
//     return (
//         <div>
//             <h2>Titulo</h2>

//             {props.on == true ?

//                 <div>
//                     <img src="/images/foco on.png" alt="" />
//                     <button>Apagar</button>
//                 </div>
//                 :
//                 <div>
//                     <img src="/images/foco off.png" alt="" />
//                     <button>Encender</button>
//                 </div>}
//         </div>
//     );

// }
// export default Foco



// function Foco(props) {
//     return (
//         <div>
//             <h2>Titulo</h2>
//             <div>
//                 <img src={`/images/${props.on == true ? "foco on" : "foco off"}.png`} alt="Foco" />
//                 <button> {props.on == true ? "encender" : "apagar"}</button>
//             </div>
//         </div>
//     );

// }

// export default Foco



function Foco({on}) {
    return (
        <div>
            <h2>Titulo</h2>
            <div>
                <img src={`/images/${on ? "foco on" : "foco off"}.png`} alt="Foco" />
                <button> {on ? "encender" : "apagar"}</button>
            </div>
        </div>
    );
}

export default Foco


// function Foco({on}) {
//     return (
//         <div>
//             {on && <h2>Titulo</h2>}
//                {!on && <h2>Descripcion</h2>}
//             <div>
//                 <img src={`/images/${on ? "foco on" : "foco off"}.png`} alt="Foco" />
//                 <button> {on ? "encender" : "apagar"}</button>
//             </div>
//         </div>
//     );
// }

// export default Foco



// function Foco({on}) {
//     return (
//         <div>
//             {on && <Tecla tecleo={()=>alert("a")}>A</Tecla>}

//             <div>
//                 <img src={`/images/${on ? "foco on" : "foco off"}.png`} alt="Foco" />
//                 <button> {on ? "encender" : "apagar"}</button>
//             </div>
//         </div>
//     );
// }

// export default Foco


// function Foco({on,off}) {  faltaaa
//     return (
//         <div>
//             {(on && !off) <Tecla tecleo={()=>alert("a")}>A</Tecla>}

//             <div>
//                 <img src={`/images/${(on && !off) ? "foco on" : "foco off"}.png`} alt="Foco" />
//                 <button> {(on && !off) ? "encender" : "apagar"}</button>
//             </div>
//         </div>
//     );
// }

// export default Foco



// function Foco() {
//     const [light, setLight] = useState(false)

//     const referenciaFoto = useRef();
//     const referenciaBoton = useRef();

//     const lightHandler = () => {

//         console.log(referenciaFoto);
//         console.log(referenciaBoton);

//         const encendido = !light;

//         if (encendido) {
//             referenciaFoto.current.src = "/images/foco on.png";
//         } else {
//             referenciaFoto.current.src = "/images/foco off.png";
//         }

//         setLight(encendido);

//     };

//     return (

//         <div>
//             <img ref={referenciaFoto} src="/images/foco on.png" alt="Foco" />
//             <button ref={referenciaBoton} onClick={lightHandler}> </button>
//         </div>

//     );
// }

// export default Foco



// function Foco() {
//     const [light, setLight] = useState(false)

//     const referenciaFoto = useRef();
//     const referenciaBoton = useRef();

//     const lightHandler = () => {

//         console.log(referenciaFoto);
//         console.log(referenciaBoton);

//         const encendido = !light;

//         if (encendido) {
//             referenciaFoto.current.src = "/images/foco on.png";
//             referenciaBoton.current.textContent = "Apagar";
//         } else {
//             referenciaFoto.current.src = "/images/foco off.png";
//             referenciaBoton.current.textContent = "Encender";
//         }

//         setLight(encendido);
//     };

//     return (

//         <div>
//             <img ref={referenciaFoto} src="/images/foco off.png" alt="Foco" />
//             <button ref={referenciaBoton} onClick={lightHandler}>Encender</button>
//         </div>

//     );
// }

// export default Foco
