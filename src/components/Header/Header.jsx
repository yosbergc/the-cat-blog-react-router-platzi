import CatLogo from '../../assets/logo-by-lucian-radu.png'
import { Link } from 'react-router-dom'
import { Menu } from '../Menu/Menu'
import './header.css'

function Header() {
    return (
        <header className='website-header'>
            <Link to="/">
                <img src={CatLogo} alt="Cat Logo from Lucian Radu" className='website-logo'/>
            </Link>
            <Menu />
        </header>
    )
}
export { Header }