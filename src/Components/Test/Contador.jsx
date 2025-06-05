// import { useState } from "react"

// const estilo = {
//   display: "flex",
//   justifyContent: "center",
//   width: "100vw",
//   alignItems: "center",
//   flexDirection: "column"
// }

// function Contador() {

//   const [contador, setContador] = useState(0);

//   return (
//     <div style={estilo}>
//       <span>{contador}</span>
//       <button onClick={()=>setContador(contador+1)} >Click Me</button>
//     </div>
//   )
// }

// export default Contador





import { useState } from "react"

const estilo = {
  display: "flex",
  justifyContent: "center",
  width: "100vw",
  alignItems: "center",
  flexDirection: "column",
  border: "1px solid blue",
  backgroundColor: "green",
  gap:"20px"
}


function Contador() {

  const [contador, setContador] = useState(0);

  const handlerSuma = () => setContador(contador + 1);
  const handlerResta = () => setContador(contador - 1);

  return (
    <div style={estilo}>
      <span>{contador}</span>
      <button onClick={handlerSuma}>Sumar</button>
      <button onClick={handlerResta}>Restar</button>
    </div>
  )
}

export default Contador

