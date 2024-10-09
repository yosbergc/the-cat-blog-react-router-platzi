import { useId } from "react"
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import './login.css'
function Login() {
    const usernameId = useId();
    const passwordId = useId(); 
    const { onLogin } = useContext(UserContext)

    function handleSubmit(event) {
        event.preventDefault()
        const data = new FormData(event.target)
        const username = data.get('username')
        const password = data.get('password')

        if (password.length === 0) return;


        onLogin({ username, password })
    }
    return (
        <main>
            <h1 className="centered">Iniciar sesión</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor={usernameId}>Tu correo electrónico</label>
                <input type="text" name="username" id={usernameId} autoComplete="username"/>
                <label htmlFor={passwordId}>Tu contraseña</label>
                <input type="password" name="password" id={passwordId} autoComplete="current-password"/>
                <section className="buttons-container">
                    <button>Iniciar sesion</button>
                </section>
            </form>
        </main>
    )
}
export { Login }