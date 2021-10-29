import './styles/button.css'
import Icon from'../img/Cart-icon-normal.svg'

function Button ()  {

    return(
        <button className="button--primary"><img src={Icon} alt="cart-logo" width="16px"/> Agregar al carro </button>
    )
}
export default Button
