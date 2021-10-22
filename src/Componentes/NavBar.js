import Logo from '../img/doglogo.svg'
import Button from './Button'
import './styles/navbar.css'


const NavBar = () => {
    return(
        <header>
            <img src={Logo} width="150px" alt="logo" />
            <nav>
                <a href="http://">Collares</a>
                <a href="http://">Correas</a>
                <a href="http://">Juguetes</a>
                <a href="http://">Arneses</a>
            </nav>
            <Button/>
        </header>
      
    )
}


export default NavBar