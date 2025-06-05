import Ahorcado from "./Ahorcado.jsx";
import React, { useEffect } from 'react'
import Tecla from "./Tecla.jsx";
import "../Style/WordContainer.css"
import Teclado from "./Teclado";
import Word from "./Word.jsx";


function WordContainer({ configApp }) {


  return (
    <div className='WordContainer'>
      <Word configWordContainer={configApp} />
      <Teclado />
    </div>
  )
}

export default WordContainer