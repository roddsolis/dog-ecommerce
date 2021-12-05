// import Button from '../Button'
import ItemCount from '../Counter/ItemCount'
import '../Item/items.css'
import '../styles/button.css'
//import ItemDetailContainer from './ItemDetail/ItemDetailContainer'
import { Link } from 'react-router-dom'




const Item = ( { producto } ) => {

    
    console.log(producto.id)
   
    return (

        
        <>
            <div className="product-container">
                <div className="product-image" >
                    <div className="product-tag">{producto.categoria}</div>
                    <img src={producto.img} alt="productimg" className="productImg"/>   
                </div>

                <div className="product-description">
                    
                        <div className="chipContainer">

                        
                        
                        <div className="product-sku">Sku:{producto.sku}</div>

                        <div className="product-stock">Stock:{producto.stock}</div>

                        </div>

                        <h3>{producto.nombre}</h3>
                        <div className="product-price"><small>$</small>{producto.precio}</div>
                        <ItemCount/>
                        <Link to={`/detalles/${producto.id}`} className="btnLinkSecondary">Ver detalles</Link>
                </div>
             
            

            </div>
         </>
    )
}


export default Item

//Item: Renderea las propiedades que contenga cada producto (imagen, precio, nombre, etc)
