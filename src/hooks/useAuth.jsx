import { useState } from "react";
import { Navigate } from "react-router-dom";
import { users } from "../mockups/users";

function useAuth() {
    const [user, setUser] = useState(null)
    
    function onLogin({ username, password }) {
        const user = users.find(user => {
            return user.username === username && user.password === password
        })
        if (user) {
            setUser(user)
        }
    }

    return { onLogin, ProtectedRoute, user }
}

function ProtectedRoute({ children }) {
    const { user } = useAuth()
    if (!user) {
        return <Navigate to="/login"/>
    } else {
        return children
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export { useAuth, ProtectedRoute }