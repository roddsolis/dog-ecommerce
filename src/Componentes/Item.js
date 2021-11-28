import Button from './Button'
import ItemCount from './ItemCount'
import './styles/items.css'
import './styles/button.css'
//import ItemDetailContainer from './ItemDetail/ItemDetailContainer'
import { Link } from 'react-router-dom'




const Item = ( { producto } ) => {

    
    return (

        
        <>
            <div className="product-container">
            <div className="product-image" >
                 <img src={producto.img} alt="productimg" className="productImg"/>   
                 <div className="product-tag">{producto.tag}</div>
                 <div className="product-stock">Stock:{producto.stock}</div>
             </div>

             <div className="product-description">
                    <div className="product-sku">SKU:{producto.sku}</div>
                    <h3>{producto.nombre}</h3>
                    {/* <p>{producto.descripcion}</p> */}
             </div>
             <div className="product-cta">
                    <div className="product-price"><small>$</small>{producto.precio}</div>
                    <ItemCount/>
             </div>

            <div className="product-count">
                <Link to={`/detalles/${producto.id}`} className="btnLinkSecondary">Ver detalles</Link>
                <Button btntext="Agregar al carro" buttonType="button-primary"/>
            </div>
            </div>
         </>
    )
}


export default Item

//Item: Renderea las propiedades que contenga cada producto (imagen, precio, nombre, etc)
