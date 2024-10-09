import CatLogo from '../../assets/logo-by-lucian-radu.png'
import './header.css'

function Header() {
    return (
        <header className='website-header'>
            <img src={CatLogo} alt="Cat Logo from Lucian Radu" className='website-logo'/>
        </header>
    )
}
export { Header }