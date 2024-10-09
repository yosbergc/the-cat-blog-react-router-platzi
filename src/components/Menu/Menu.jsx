import { routes } from '../../routes/routes'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import './menu.css'
function Menu() {
    const { user } = useContext(UserContext)
    return (
        <nav>
                <ul>
                    {
                        routes.map(route => {
                            if (route.loggedOnly && !user) return;
                            if (route.publicOnly && user) return;
                            return <li key={route.to}>
                                <NavLink to={route.to} className={({ isActive }) => isActive ? 'currentRoute' : "route-menu"}>
                                    {route.text}
                                </NavLink>
                            </li>
                        })
                    }
                </ul>

        </nav>
    )
}
export { Menu }