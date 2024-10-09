import { createContext } from "react";
import { useAuth } from "../hooks/useAuth.jsx";
const UserContext = createContext();

function UserProvider({ children }) {
    const { onLogin, user, onLogout } = useAuth()
    return <UserContext.Provider value={{
        user,
        onLogin,
        onLogout
    }}>
        { children }
    </UserContext.Provider>
}

export { UserContext, UserProvider}