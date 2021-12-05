//import Item from "../Item"
import { useParams } from "react-router"
// import Button from "../Button"
import ItemCount from "../Counter/ItemCount"
import './itemDetail.css'



function ItemDetail(  ) {



const {id} = useParams();
       


return (
<>

    <div className="container__details" >

        
            
            <div className="product__details">

            <div className="imgDetail__container" >
            <div className="productDetail-tag" >categoria</div>
            <div className="productDetail-stock">Stock </div>
            <img src="/" alt="img-detail" className="imgDetail"/>
            </div>
            
            <div className="main__info">

            <h6>nombre</h6>
            <p>
                descripcion
            </p>

            <div className="productDetail-sku">SKU:</div>
            <div className="cta__container">
            <ItemCount/>
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
    

        

    </div>
</>
)

}

export default ItemDetail