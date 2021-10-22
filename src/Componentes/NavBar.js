import Logo from '../img/doglogo.svg'
import './styles/navbar.css'
import CartWidget from './CartWidget'


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
            <CartWidget/>
        </header>
      
    )
}


export default NavBar