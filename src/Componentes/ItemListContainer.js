
import React, { useEffect, useState } from 'react'
import ProductContainer from './ProductContainer.js'
import './styles/item-list-container.css'


function ItemListContainer () {

    const [productos, setProductos] =  useState([]);


    
    useEffect(() => {


        const promesa = new Promise ((resolve, reject)=>{


        const datoProductos = [  
            {id:1,
            sku: 123456789,
            categorias:"Collares", 
            productname: "Collar ajustable de acero cromado 51530 Herm Sprenger", 
            description:"Collar ajustable de acero cromado 51530 Herm Sprenger de 3 mm, hecho en Alemania para perros con un peso de hasta 45 Kg.",
            precio:"20.900",
            stock:"20 unidades"
        }
        ];   

        setTimeout(()=> {
            resolve(datoProductos)
        }, 2000)
        })
       
        promesa.then((resolve)=>{ setProductos(resolve)})
        .catch((reject)=>{"Ocurrio un problema al cargar"})
    

    
    },[])

    return(
            <div className="container-list">
                {productos.length > 0 ? <ProductContainer productos={productos}/> : <h1>Cargando...</h1>}
            </div>
        
           
    )
}


export default ItemListContainer


// ItemListCointainer: Acá va el useEffect con la promise dentro para hacer el pedido de los productos, que los guardas en un useState (un estado) y se los pasas por props al ItemList.

// ItemList: Recibe los productos por props y hace el map. dentro del map retorna por cada producto un Item.

// Item: Renderea las propiedades que contenga cada producto (imagen, precio, nombre, etc)


// 1 El componente arranca
// 1.5 Arranca con un estado inicial de productos
// 2 Se dibuja por primera vez
// 3 Hago un efecto
// 4 Simulo un pedido
// 5 Obtengo los productos
// 6 actualizo el estado