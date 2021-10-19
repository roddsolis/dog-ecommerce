import Logo from '../img/doglogo.svg'

const NavBar = () => {
    return(
            <>
            <img src={Logo} width="120px" alt="logo" />
            <ul>
                <li><a href="http://">Item de menu 1</a></li>
                <li><a href="http://">Item de menu 2</a></li>
                <li><a href="http://">Item de menu 3</a></li>
                <li><a href="http://">Item de menu 4</a></li>
            </ul>
            <button>Soy un botón</button>
            </>
            
       
    )
}

export default NavBar