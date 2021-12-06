import React,{useState,useEffect} from "react"
import { useContext } from 'react'
import { contexto } from '../CartContext'
import { useParams} from "react-router"
import ItemCount from "../Counter/ItemCount"
import './itemDetail.css'





function ItemDetail({detail}) {


    const {addToCart} = useContext(contexto)

    
    const [product, setProduct]= useState([])
    const {id} = useParams();
    
    const onAdd = (cantidad)=>{

        console.log("este es el dato del item detail")
        addToCart(product,cantidad)
        console.log(product, cantidad)
    }
    useEffect(() => {
        const producto= detail.find(el=> el.id === id)
        setProduct(producto)
        console.log(producto)
    }, [product])


return (
<>
    {product && 
    <div className="container__details" >
            <div key={id} className="product__details">

            <div className="imgDetail__container">
            <div className="productDetail-tag">{product.categoria}</div>
            <div className="productDetail-stock">STOCK:{product.stock} </div>
            <img src={product.img} alt="img-detail" className="imgDetail" />
            </div>
            
            <div className="main__info">

            <h6>{product.nombre} </h6>
            <p>
                {product.descripcion}
            </p>

            <div className="productDetail-sku">SKU:{product.sku} </div>
            <div className="cta__container">
            <ItemCount onAdd={onAdd}/>
            
            </div>
            
            </div>

            <div className="aditional__info">
                
            <h6>Caracteristicas</h6>
            <p>Both finally, of in based the on life keep in village upon where travelling, distressed train and
                deceleration brown that much was his that proposal. Mostly unavoidable, hard reached sleep is very
                past better any to good enormity, designer indication own belong, lie the sort have it the steps.
                Mountains, in text last influenced may secretly outcomes could options escape, in times and for
                fact, two didn't the this of to he mister he chosen thing rung mad knows, that of home, employed
                hero's broad. Deeply both continued is of instance. Should years, shreds was the can best little so.
            </p>
            <hr />
            <h6>Detalles</h6>
            <p>Both finally, of in based the on life keep in village upon where travelling, distressed train and
                deceleration brown that much was his that proposal. Mostly unavoidable, hard reached sleep is very
                past better any to good enormity, designer indication own belong, lie the sort have it the steps.
                Mountains, in text last influenced may secretly outcomes could options escape, in times and for
                fact, two didn't the this of to he mister he chosen thing rung mad knows, that of home, employed
                hero's broad. Deeply both continued is of instance. Should years, shreds was the can best little so.
            </p>

            </div>

        

        </div>
    

        

    </div>}
</>
)

}

export default ItemDetail