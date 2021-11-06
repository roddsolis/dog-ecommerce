import './styles/button.css'
// import Icon from'../img/Cart-icon-normal.svg'

function Button (nombre)  {

    nombre = "Agregar al Carro"

    return(
        <button className="button--primary">{nombre}</button>
    )
    // <img src={Icon} alt="cart-logo" width="16px"/>
}
export default Button
