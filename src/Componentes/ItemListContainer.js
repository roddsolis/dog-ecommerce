
import React from 'react'
//import Item from './Item.js'
import ItemList from './ItemList.js'
import './styles/item-list-container.css'


export default function ItemListContainer() {

    

    const [productos, setProductos] = React.useState([])



    React.useEffect(()=>{

        const productItems = new Promise ((resolve,reject)=>{

            
            const listaProductos = [

                {
                    id:1,
                    img:"https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/179ca3728917b7682025ae0e550f5228/5/1/51506_65_92.jpg",
                    tag:'Collares',
                    nombre:'Collar de eslabones largos - Acero inoxidable mate 3,0 mm',
                    descripcion:'Para pieles largas y finas debido al tamaño y la forma del eslabón.',
                    sku: 51506-65,
                    stock: 20,
                    price: 15000,
                    
                },

                {
                    id:2,
                    img:"https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/1/51506_67_92.jpg",
                    tag:'Collares',
                    nombre:'Collar, eslabones largos - CUROGAN, 3,0 mm',
                    descripcion:'Cómodo para pieles largas y finas debido al tamaño y la forma del eslabón.',
                    sku: 51506-67,
                    stock: 24,
                    price: 30000,
                    
                },

                {
                    id:3,
                    img:"https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/1/51506_57_153.jpg",
                    tag:'Collares',
                    nombre:'Collar, eslabones largos - Acero inoxidable negro, 3,0 mm',
                    descripcion:'cómodo para pieles largas y finas debido al tamaño y la forma del eslabón.',
                    sku: 51506-57,
                    stock: 10,
                    price: 25000,
                    
                },

                {
                    id:4,
                    img:"https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/1/51506_55_145.jpg",
                    tag:'Collares',
                    nombre:'Collar, eslabones largos - Acero inoxidable 3.0 mm',
                    descripcion:'cómodo para pieles largas y finas debido al tamaño y la forma del eslabón.',
                    sku: 51506-55,
                    stock: 23,
                    price: 15000,
                    
                },

                {
                    id:5,
                    img:"https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/1/51506_02_91.jpg",
                    tag:'Collares',
                    nombre:'Collar, eslabones largos - Acero cromado, 3,0 mm',
                    descripcion:'cómodo para pieles largas y finas debido al tamaño y la forma del eslabón.',
                    sku: 51506-55,
                    stock: 10,
                    price: 15000,
                    
                },
                {
                    id:6,
                    img:"https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/1/51541_67_317.jpg",
                    tag:'Collares',
                    nombre:'Collar, mediano - CUROGAN, 3.0 mm',
                    descripcion:'Los eslabones medianos se deslizan muy bien a través del anillo.',
                    sku: 51541-67,
                    stock: 80,
                    price: 35000,
                    
                },
                {
                    id:7,
                    img:"https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/1/51541_65_239.jpg",
                    tag:'Collares',
                    nombre:'Collar, mediano - Acero inoxidable mate, 3,0 mm',
                    descripcion:'Los eslabones medianos se deslizan muy bien a través del anillo.',
                    sku: 51541-65,
                    stock: 56,
                    price: 30000,
                    
                },
                {
                    id:8,
                    img:"https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/1/51541_57_202.jpg",
                    tag:'Collares',
                    nombre:'Collar, mediano - Acero inoxidable mate, 3,0 mm',
                    descripcion:'Los eslabones medianos se deslizan muy bien a través del anillo.',
                    sku: 51541-57,
                    stock: 48,
                    price: 30000,
                    
                },
                {
                    id:9,
                    img:"https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/1/51541_55_149.jpg",
                    tag:'Collares',
                    nombre:'Collar, mediano - Acero inoxidable, 3.0 mm',
                    descripcion:'recomendado para razas pequeñas y grandes debido a la excelente resistencia a la tracción.',
                    sku: 51541-55,
                    stock: 14,
                    price: 30000,
                    
                },
                {
                    id:10,
                    img:"https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/1/51530_02_165.jpg",
                    tag:'Collares',
                    nombre:'Collar, ajustable - con gancho SPRENGER - Acero cromado',
                    descripcion:'nueva posición del anillo para una comodidad de uso optimizada.',
                    sku: 51541-55,
                    stock: 32,
                    price: 25000,
                    
                },
            

            ]
            
            

            setTimeout(() => {
                
            resolve(listaProductos)
            
            },2000);

           
            

        })

        productItems.then((resolve)=>{setProductos(resolve)})
        productItems.catch((reject)=>{"Ocurrio un problema"})
      

    },[])

  
    return (
        
         <ItemList productos={productos}/>
    )
}

// ItemListCointainer: Acá va el useEffect con la promise dentro para hacer el pedido de los productos, que los guardas en un useState (un estado) y se los pasas por props al ItemList.
