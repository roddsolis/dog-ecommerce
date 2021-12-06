import '../CartWidget/cartwidget.css'
import Icon from'../../img/Cart-icon-normal.svg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { contexto } from '../CartContext'


function CartWidget () {

    const resultado = useContext(contexto)

    console.log(resultado)

    return(
        <div className="cartContainer">

        <Link to="/comprar/" className="widget-container" >finalizar compra<div className="cart-number"><img src={Icon} alt="cart-logo" width="20px"/>0</div></Link>

        </div>
        
    )
}


export default CartWidget