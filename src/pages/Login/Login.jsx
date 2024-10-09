import { useId } from "react"
import './login.css'
function Login() {
    const emailId = useId();
    const passwordId = useId(); 
    return (
        <main>
            <h1 className="centered">Iniciar sesión</h1>
            <form>
                <label htmlFor={emailId}>Tu correo electrónico</label>
                <input type="email" name="Email" id={emailId} />
                <label htmlFor={passwordId}>Tu contraseña</label>
                <input type="password" name="password" id={passwordId} />
                <section className="buttons-container">
                    <button>Iniciar sesion</button>
                </section>
            </form>
        </main>
    )
}
export { Login }