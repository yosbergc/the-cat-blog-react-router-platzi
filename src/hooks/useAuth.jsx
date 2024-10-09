import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import { users } from "../mockups/users";

function useAuth() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    function onLogin({ username, password }) {
        const user = users.find(user => {
            return user.username === username && user.password === password
        })
        if (user) {
            setUser(user)
            navigate('/')
        } else {
            console.log('Wrong data.')
        }
    }
    function onLogout() {
        setUser(null)
        navigate('/')
    }
    return { onLogin, onLogout, user }
}

function ProtectedRoute({ children }) {
    const { user } = useContext(UserContext)
    console.log(user)
    if (!user) {
        return <Navigate to="/login"/>
    } else {
        return children
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export { useAuth, ProtectedRoute }