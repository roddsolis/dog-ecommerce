import Button from './Button'
import './styles/productContainer.css'
import ItemCount from './ItemCount'



const ProductContainer = ({productos}) => {
console.log(productos[0].id)



    return (
        <>
            <div className="product-container">
            <div className="product-image">
                <div className="product-tag">{productos[0].categorias}</div>
                <div className="product-sku">{productos[0].sku}</div>
            </div>
            <div className="product-description">
                <h3>{productos[0].productname}</h3>
                <p>{productos[0].description}</p>
            </div>
            <div className="product-cta">
                <div className="product-price">
                ${productos[0].precio}
                </div>
                <Button/>
            </div>
                <div className="product-count">
                <div className="product-stock">Stock:{productos[0].stock}</div>
                <ItemCount/>
                </div>
            </div>
    </>
    )
}


export default ProductContainer