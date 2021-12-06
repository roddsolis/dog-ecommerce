import ItemCount from '../Counter/ItemCount'
import '../Item/items.css'
import '../styles/button.css'
import { Link } from 'react-router-dom'




const Item = ( { producto } ) => {

    const onAdd = (cantidad)=>{

        console.log("seleccionaron la cantidad")
        console.log(cantidad, producto)
    }
   
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
                        <ItemCount onAdd={onAdd}/>
                        <Link to={`/detalles/${producto.id}`} className="btnLinkSecondary">Ver detalles</Link>
                </div>
             
            

            </div>
         </>
    )
}


export default Item

//Item: Renderea las propiedades que contenga cada producto (imagen, precio, nombre, etc)
