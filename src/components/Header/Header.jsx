import { useContext } from 'react'
import CatLogo from '../../assets/logo-by-lucian-radu.png'
import { Link } from 'react-router-dom'
import { Menu } from '../Menu/Menu'
import { UserContext } from '../../context/UserContext'

import './header.css'

function Header() {
    const { user, onLogout } = useContext(UserContext)
    return (
        <header className='website-header'>
            <Link to="/">
                <img src={CatLogo} alt="Cat Logo from Lucian Radu" className='website-logo'/>
            </Link>
            <Menu />
            {
                user && <section className='right-header'>
                    <section>
                        <p>Bienvenido, {user.username}</p>
                        <strong>{user.role}</strong>
                    </section>
                    <button onClick={onLogout}>Logout</button>
                </section>
                
            }
        </header>
    )
}
export { Header }