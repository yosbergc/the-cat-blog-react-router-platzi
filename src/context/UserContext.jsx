import { createContext } from "react";
import { useAuth } from "../hooks/useAuth.jsx";
const UserContext = createContext();

function UserProvider({ children }) {
    const { onLogin, user } = useAuth()
    return <UserContext.Provider value={{
        user,
        onLogin
    }}>
        { children }
    </UserContext.Provider>
}

export { UserContext, UserProvider}