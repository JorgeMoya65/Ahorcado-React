import react, { useRef } from 'react';

function Formulario() {
    const nameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const lastName = lastNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        alert(`
            La información ingresada es:\n
            Nombre: ${name}
            Apellido: ${lastName}
            Email: ${email}
            Contraseña: ${"*".repeat(password.length)}`);
    };

    return (
        <form onSubmit={handleSubmit}>

            <div>
                <h1>Formulario de Inscripción</h1>
            </div>

            <div>
                <label htmlFor="name" >Nombre:</label>
                <input type="text" ref={nameRef} id="name" required placeholder='Nombre' />
            </div>

            <div>
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" ref={lastNameRef} id="apellido" required placeholder='Apellido' />
            </div>

            <div>
                <label htmlFor="correo">Email:</label>
                <input type="email" ref={emailRef} id="correo" required placeholder='Correo Electronico' />
            </div>

            <div>
                <label htmlFor="contraseña">Contraseña:</label>
                <input type="password" ref={passwordRef} id="contraseña" maxLength={10} required placeholder='Ej: 1234' />
            </div>

            <button type="submit">Registrar</button>

        </form>
    );
}

export default Formulario;
