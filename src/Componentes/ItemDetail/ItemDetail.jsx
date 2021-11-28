//import Item from "../Item"
import { useParams } from "react-router"
import Button from "../Button"
import ItemCount from "../ItemCount"
import "/Users/rodrigosolis/Desktop/rodrigo/Curso-ReactJs/proyecto-ecommerce/dog-ecommerce/src/Componentes/ItemDetail/itemDetail.css"



function ItemDetail({detail}) {




const {id} = useParams();
       


return (
<>

    <div className="container__details" >

        
            
            <div key={id} className="product__details">

            <div className="imgDetail__container">
            <div className="productDetail-tag">nombre del tag</div>
            <div className="productDetail-stock">numero de stock</div>
            <img src="/" alt="img-detail" className="imgDetail" />
            </div>
            
            <div className="main__info">

            <h6>Este es el nombre del producto y puede tener 2 líneas máximo.</h6>
            <p>
                in text last influenced may secretly outcomes could options escape, in times and for
                fact, two didn't the this of to he mister he chosen thing rung mad knows, that of home, employed
                hero's broad. Deeply both continued is of instance. Should years, shreds was the can best little so.
            </p>

            <div className="productDetail-sku">SKU:123456789</div>
            <div className="cta__container">
            <ItemCount /><Button  btntext="Agregar al carro" buttonType="button-primary"/> 
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