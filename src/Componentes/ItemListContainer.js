import './styles/item-list-container.css'

function ItemListContainer (greeting) {

    console.log(greeting)
    return(
        <>
        <div className="container-greeting">
        <p>{greeting.saludo} {greeting.nombre}</p>
        </div>
        
        </>
    )
}

export default ItemListContainer