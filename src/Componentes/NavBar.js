import Logo from '../img/dogmatik logo.svg'
import './styles/navbar.css'
import CartWidget from '../Componentes/CartWidget/CartWidget.js'
import { Link } from 'react-router-dom'


const NavBar = () => {

    

    return(
        <header>
            <Link to="/"><img src={Logo} width="200px" alt="logo" /></Link>
            
            <nav>
                <Link to="/collares/1" className="a_link">Collares</Link>
                <Link to="/juguetes/2" className="a_link">Juguetes</Link>
                <Link to="/correas-de-cadena/3" className="a_link">Correas de cadena</Link>
                <Link to="/articulos-de-aseo/4" className="a_link">Artículos de Aseo</Link>
            </nav> 
            <CartWidget/>
        </header>
    )
}


export default NavBar