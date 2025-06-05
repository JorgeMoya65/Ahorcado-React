import React, { useEffect, useState } from 'react'
import "../Style/App.css"
import Ahorcado from "./Ahorcado.jsx";
import Config from './Config.jsx';
import WordContainer from "./WordContainer.jsx";
import Partido from "../Components/Partido.jsx";


function App() {
  const [caseConfig, setCaseConfig] = useState("");




  return (
    <div className='App'>
      <Ahorcado />
      <WordContainer configApp={caseConfig} />
      <Config mensajero={setCaseConfig} />
      {/* 
        <Partido /> */}



    </div>
  )
}

export default App