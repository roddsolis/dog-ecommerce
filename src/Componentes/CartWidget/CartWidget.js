import '../CartWidget/cartwidget.css'
import Icon from'/Users/rodrigosolis/Desktop/rodrigo/Curso-ReactJs/proyecto-ecommerce/dog-ecommerce/src/img/Cart-icon-normal.svg'



function CartWidget () {
    return(

        <div className="widget-container" >
            <p className="cartTitle">Carro de Compras</p>
            <div className="cart-number"><img src={Icon} alt="cart-logo" width="20px"/>0</div>
        </div>
        
    )
}


export default CartWidget