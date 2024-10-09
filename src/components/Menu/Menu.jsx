import { routes } from '../../routes/routes'
import { NavLink } from 'react-router-dom'
import './menu.css'
function Menu() {
    return (
        <nav>
                <ul>
                    {
                        routes.map(route => {
                            return <li key={route.to}>
                                <NavLink to={route.to} className={({ isActive }) => isActive && 'currentRoute'}>
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