import { useContext, useRef, useState } from 'react'
import "../Style/Ahorcado.css"
import { ConfigContext } from '../Contexts/ConfigContexts';

function Ahorcado() {

  const refBanco = useRef();
  const { banco } = useContext(ConfigContext);

  // const [banco, setBanco] = useState(0)
  // const refAudio = useRef();

  return (
    <>
      <div className='Ahorcado'>
        <div className='Personaje'>
          <div className='Foto'></div>
          <img ref={refBanco}
            style={{ right: `calc(20% + ${banco}%)` }}
            className='Banco'
            src="/images/chair.png"
            alt="Banco" />
        </div>
        {/* <audio ref={refAudio} src="/sounds/bone.mp3"></audio> */}
      </div>
      {/* <button onClick={chairHandler} >Rodar{banco}</button> */}
    </>
  )
}

export default Ahorcado


{/* <button onClick={chairHandler} disabled >Rodar{banco}</button> */ }