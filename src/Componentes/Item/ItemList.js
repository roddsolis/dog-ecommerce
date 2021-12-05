import Item from "../Item/Item"
import './itemListContainer.css'

const ItemList = ({productos}) => {
    
    

    return (
    
    <div className="container-list">
        {productos.map(producto => (<Item key={productos.id} producto={producto}/>))}
        
    </div>
        
    
    
    )

    
}


export default ItemList 


// ItemList: Recibe los productos por props y hace el map. dentro del map retorna por cada producto un Item.