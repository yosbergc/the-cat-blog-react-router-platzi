import { useParams } from "react-router-dom"
import { users } from "../../mockups/users"
function Profile() {
    const { username } = useParams()
    const user = users.find(user => user.username === username)
    if (user){
        return (
            <main>
                <h1>Perfil</h1>
                <p>{user.username} - {user.age}</p>
                <strong>{user.role}</strong>
                <p>{user.description}</p>
            </main>
        )
    } else {
        return (
            <main>
                <h3>Usuario no encontrado.</h3>
            </main>
        )
    }
}
export { Profile }