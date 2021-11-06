import './styles/cartwidget.css'
import Icon from'../img/Cart-icon-normal.svg'


function CartWidget () {
    return(

        <div className="widget-container" >
            <p>Carro de Compras</p>
            <div className="cart-number"><img src={Icon} alt="cart-logo" width="16px"/>0</div>
        </div>
        
    )
}


export default CartWidget