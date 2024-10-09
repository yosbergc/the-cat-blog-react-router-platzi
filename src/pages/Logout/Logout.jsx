import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

function Logout() {
    const { ProtectedRoute } = useContext(UserContext)
    return (
        <ProtectedRoute>
            <h1>Logout</h1>
        </ProtectedRoute>
    )
}
export { Logout }