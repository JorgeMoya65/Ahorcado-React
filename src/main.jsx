import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Teclado from './Components/Test/Teclado.jsx'
// import Focos from "./Components/Test/Focos.jsx";
// import Mayusculainador from "./Components/Test/Mayusculainador.jsx";
// import Formulario from "./Components/Test/Formulario.jsx";
// import  "./Components/Style/Formulario.css";
import App from "./Components/App";
import ConfigContextComponent from './Contexts/ConfigContexts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <>
      <Focos />
    </> */}

    {/* <>
      <Formulario />
    </> */}

    {/* <>
      <Mayusculainador />
    </>  */}

    <ConfigContextComponent>
      <App />
    </ConfigContextComponent>

    
  </StrictMode>
)
