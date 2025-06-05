import { useRef, useState } from "react";


function Mayusculainador() {

  const [palabra, setPalabra] = useState("");
  const [gringo, setGringo] = useState(false);
  const refInput = useRef();

  const textHandler = () => {
    const nuevoValor = refInput.current.value.toUpperCase();
    setGringo(String(nuevoValor).includes("Ñ"));
    setPalabra(nuevoValor);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>{palabra}</h1>
      <input type="text" ref={refInput} onChange={textHandler} />
      {gringo && <img src="https://images7.memedroid.com/images/UPLOADED654/61f037794bb2f.jpeg" width={200} alt="foco" />}
    </div>
  )
};

export default Mayusculainador