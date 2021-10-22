import './styles/cartwidget.css'
import Icon from'../img/Cart-icon.svg'


function CartWidget () {
    return(

        <div className="widget-container" >
            <p>Carro de compras</p>
            <div className="cart-number"><img src={Icon} alt="cart-logo" width="16px"/>0</div>
        </div>
        
    )
}


export default CartWidget