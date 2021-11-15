import Button from './Button'
import './styles/items.css'
import ItemCount from './ItemCount'
import './styles/button.css'



const Item = ({ producto} ) => {


    return (

        
        <>
            <div className="product-container">
            <div className="product-image" >
                 <img src={producto.img} alt="productimg" className="productImg"/>   
                 <div className="product-tag">{producto.tag}</div>
                 <div className="product-stock">Stock:{producto.stock}</div>
             </div>
             <div className="product-sku">SKU:{producto.sku}</div>
             <div className="product-description">
                 <h3>{producto.nombre}</h3>
                 <p>{producto.descripcion}</p>
             </div>
             <div className="product-cta">
                 <div className="product-price">
                ${producto.price}
                </div>
                <ItemCount/>
                
             </div>
                <div className="product-count">
                <Button btntext="Ver detalles" buttonType="button-secondary"/>
                <Button btntext="Agregar al carro" buttonType="button-primary"/>
                 </div>
             </div>
         </>
    )
}


export default Item

//Item: Renderea las propiedades que contenga cada producto (imagen, precio, nombre, etc)
