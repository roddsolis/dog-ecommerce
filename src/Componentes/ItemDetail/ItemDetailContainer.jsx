import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from "./ItemDetail"
import './itemDetail.css'



const productList = [
    {
        "id": "1",
        "categoria": "Collares",
        "nombre": "Collar de eslabones largos - Acero inoxidable mate 3,0 mm",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "51506-65",
        "stock": "20",
        "precio": "15.000",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/179ca3728917b7682025ae0e550f5228/5/1/51506_65_92.jpg"
    },
    {
        "id": "1",
        "categoria": "Collares",
        "nombre": "Collar, eslabones largos - CUROGAN, 3,0 mm",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "51506-67",
        "stock": "24",
        "precio": "30.000",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/1/51506_67_92.jpg"
    },
    {
        "id": "1",
        "categoria": "Collares",
        "nombre": "Collar, eslabones largos - Acero inoxidable negro, 3,0 mm",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "51506-57",
        "stock": "28",
        "precio": "25.000",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/1/51506_57_153.jpg"
    },
    {
        "id": "1",
        "categoria": "Collares",
        "nombre": "Collar, eslabones largos - Acero inoxidable 3.0 mm",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "51506-55",
        "stock": "23",
        "precio": "15.000",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/1/51506_55_145.jpg"
    },
    {
        "id": "1",
        "categoria": "Collares",
        "nombre": "Collar, eslabones largos - Acero cromado, 3,0 mm",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "51506-55",
        "stock": "10",
        "precio": "15.000",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/1/51506_02_91.jpg"
    },
    {
        "id": "1",
        "categoria": "Collares",
        "nombre": "Collar, mediano - CUROGAN, 3.0 mm",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "51541-67",
        "stock": "80",
        "precio": "35.000",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/1/51541_67_317.jpg"
    },
    {
        "id": "1",
        "categoria": "Collares",
        "nombre": "Collar, mediano - Acero inoxidable mate, 3,0 mm",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "51541-65",
        "stock": "56",
        "precio": "30.000",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/1/51541_65_239.jpg"
    },
    {
        "id": "1",
        "categoria": "Collares",
        "nombre": "Collar, mediano - Acero inoxidable mate, 3,0 mm",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "51541-55",
        "stock": "14",
        "precio": "30.000",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/1/51530_02_165.jpg"
    },
    {
        "id": "1",
        "categoria": "Collares",
        "nombre": "Collar, ajustable - con gancho SPRENGER - Acero cromado",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "51541-55",
        "stock": "32",
        "precio": "25.000",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/1/51530_02_165.jpg"
    },
    {
        "id": "1",
        "categoria": "Collares",
        "nombre": "Collar, ajustable - con gancho SPRENGER - Acero cromado",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "51541-55",
        "stock": "32",
        "precio": "25.000",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/1/51530_02_165.jpg"
    },
    {
        "id": "2",
        "categoria": "Juguetes",
        "nombre": "Juguete para perros FRUIT CHALLENGE - \"Mango\" (C)",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5819902300",
        "stock": "30",
        "precio": "14.990",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/8/5819902300_1_17.jpg"
    },
    {
        "id": "2",
        "categoria": "Juguetes",
        "nombre": "Mordedor de manguera de incendios",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "58196-2",
        "stock": "25",
        "precio": "8.990",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/8/58196_010_00_89.jpg"
    },
    {
        "id": "2",
        "categoria": "Juguetes",
        "nombre": "Mordedor de cuero pequeño",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "58196-1",
        "stock": "10",
        "precio": "7.500",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/8/58196_006_00_89.jpg"
    },
    {
        "id": "2",
        "categoria": "Juguetes",
        "nombre": "Mordedor - Algodón, XS",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5819705076",
        "stock": "33",
        "precio": "4.500",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/8/5819705076_62.jpg"
    },
    {
        "id": "2",
        "categoria": "Juguetes",
        "nombre": "Bite Tug - Algodón",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "58197-1",
        "stock": "56",
        "precio": "30.000",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/8/58197-1_56.jpg"
    },
    {
        "id": "2",
        "categoria": "Juguetes",
        "nombre": "Juguete para perro COPO DE NIEVE - amarillo",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5819900600",
        "stock": "72",
        "precio": "9.990",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/8/5819900600_65.jpg"
    },
    {
        "id": "2",
        "categoria": "Juguetes",
        "nombre": "Juguete para perros FRUIT CHALLENGE - \"Piña\" (L)",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5819900400",
        "stock": "64",
        "precio": "24.980",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/8/58199900400_65.jpg"
    },
    {
        "id": "2",
        "categoria": "Juguetes",
        "nombre": "Juguete para perros FRUIT CHALLENGE - \"Durian\", verde-amarillo (M)",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5819900200",
        "stock": "83",
        "precio": "15.990",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/8/5819900200_65.jpg"
    },
    {
        "id": "2",
        "categoria": "Juguetes",
        "nombre": "Pelota de goma blanda - Ø 65 mm",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "58198-2",
        "stock": "32",
        "precio": "25.900",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/8/58198-3_1_57.jpg"
    },
    {
        "id": "2",
        "categoria": "Juguetes",
        "nombre": "Pelota de goma - color mezclado",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "58198-3",
        "stock": "26",
        "precio": "17.000",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/8/58198-2_94.jpg"
    },
    {
        "id": "3",
        "categoria": "Correas de cadena",
        "nombre": "Cadena de protección de correa: acero cromado, 3,0 mm, 40 cm / 16 \"",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5242004002",
        "stock": "74",
        "precio": "42.990",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/2/52150_02-2_90.jpg"
    },
    {
        "id": "3",
        "categoria": "Correas de cadena",
        "nombre": "Cabestro con resorte - Acero niquelado, 4.0 mm / 79 \"",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5571120001",
        "stock": "34",
        "precio": "32.700",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/5/55711_01_90.jpg"
    },
    {
        "id": "3",
        "categoria": "Correas de cadena",
        "nombre": "Cadena cabestro - Acero niquelado, 3,4 mm / 98 \"",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5510425001",
        "stock": "53",
        "precio": "53.000",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/5/55104_01_90.jpg"
    },
    {
        "id": "3",
        "categoria": "Correas de cadena",
        "nombre": "Cadena cabestro: acero niquelado, 3,0 mm / 79 \"",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5410020001",
        "stock": "12",
        "precio": "56.990",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/4/54100_01_90.jpg"
    },
    {
        "id": "3",
        "categoria": "Correas de cadena",
        "nombre": "Coupling chain with snap hook - Steel chrome-plated, 4.0 mm, 61 cm / 24\"",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5199306102",
        "stock": "84",
        "precio": "34.000",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/1/51993_02_90.jpg"
    },
    {
        "id": "3",
        "categoria": "Correas de cadena",
        "nombre": "Correas de cadena - Acero cromado, 2.0 mm, 80 cm / 31 \"",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5346508002",
        "stock": "44",
        "precio": "60.000",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/2/52304_02_90.jpg"
    },
    {
        "id": "3",
        "categoria": "Correas de cadena",
        "nombre": "Correas de cadena - Acero cromado, 2.5 mm, 80 cm / 31 \"",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5230408002",
        "stock": "44",
        "precio": "65.000",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/2/52304_02_90.jpg"
    },
    {
        "id": "3",
        "categoria": "Correas de cadena",
        "nombre": "Correas de cadena - Acero cromado, 3.0 mm, 80 cm / 31",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5240308002",
        "stock": "44",
        "precio": "65.000",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/2/52304_02_90.jpg"
    },
    {
        "id": "3",
        "categoria": "Correas de cadena",
        "nombre": "Cadena de acoplamiento con mosquetón - Acero cromado",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "51955-02",
        "stock": "56",
        "precio": "54.000",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/1/51949_02_101.jpg"
    },
    {
        "id": "3",
        "categoria": "Correas de cadena",
        "nombre": "Cadena de acoplamiento con mosquetón de tijera - Acero cromado, 3.0 mm, 42 cm / 17 \"",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5195004202",
        "stock": "23",
        "precio": "53.000",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/1/51900_02_90.jpg"
    },
    {
        "id": "4",
        "categoria": "Artículos de aseo",
        "nombre": "Peine para curry, ovalado - goma, azul, 150 x 100 mm",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5713200076",
        "stock": "35",
        "precio": "12.990",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/7/5713200076_17.jpg"
    },
    {
        "id": "4",
        "categoria": "Artículos de aseo",
        "nombre": "Peine para curry, ovalado - goma, negro, 150 x 100 mm",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5713100071",
        "stock": "61",
        "precio": "8.000",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/7/5713100071_17.jpg"
    },
    {
        "id": "4",
        "categoria": "Artículos de aseo",
        "nombre": "Peine para curry, ovalado - goma, azul, 125 x 80 mm",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5713000076",
        "stock": "34",
        "precio": "14.990",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/7/5713000076_17.jpg"
    },
    {
        "id": "4",
        "categoria": "Artículos de aseo",
        "nombre": "Rastrillo para perros - revestido de acero, 1 hilera",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5759200000",
        "stock": "65",
        "precio": "18.000",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/7/57592_00_92.jpg"
    },
    {
        "id": "4",
        "categoria": "Artículos de aseo",
        "nombre": "Cortaúñas con tope de seguridad - negro",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5750400055",
        "stock": "87",
        "precio": "16.780",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/7/57504_000_55_92.jpg"
    },
    {
        "id": "4",
        "categoria": "Artículos de aseo",
        "nombre": "Guante de gel-masaje - plástico, azul pastel",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5716000200",
        "stock": "23",
        "precio": "22.000",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/7/57160_002_00_91.jpg"
    },
    {
        "id": "4",
        "categoria": "Artículos de aseo",
        "nombre": "Rastrillo para perros - Acero niquelado",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5702000001",
        "stock": "73",
        "precio": "17.880",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/7/57020_01_92.jpg"
    },
    {
        "id": "4",
        "categoria": "Artículos de aseo",
        "nombre": "Biba - Limpiador de brochas",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5723800000",
        "stock": "42",
        "precio": "15.890",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/7/57238_00_91.jpg"
    },
    {
        "id": "4",
        "categoria": "Artículos de aseo",
        "nombre": "Biba - Cepillo para perros, ovalado - pelo natural puro",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5723800000",
        "stock": "52",
        "precio": "15.890",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/7/57238_00_91.jpg"
    },
    {
        "id": "4",
        "categoria": "Artículos de aseo",
        "nombre": "Biba - Cepillo para perros - clinchado, dientes de metal de 20 mm",
        "descripcion": "Events, classes sort commissaries. Forest on room waved won't an commissaries. Times latter a that little tickets of maybe with have designer still have maybe math indulged harmonics.",
        "sku": "5723300000",
        "stock": "35",
        "precio": "12.880",
        "img": "https://hundesport.sprenger.de/shop/pub/media/catalog/product/cache/e62f1136e18474e3cc85df5238a64961/5/7/57233_00_91.jpg"
    }
]



const ItemDetailcontainer = ( ) => {

    
    const [producto, setProducto] = React.useState({})
    const {id} = useParams ()
    
    console.log(id)

    useEffect(() => {


        const productDetail = new Promise((resolve, reject) => {


            setTimeout(() => {

                resolve(productList)
                
            }, 2000);

        })



        productDetail.then((resolve) => {
            setProducto(resolve)
            
            
        })
        productDetail.catch((reject) => {
            "Ocurrio un problema"
        })


        
        
        
        
        
    }, [id])

    
    
    return ( 
        
        
        <div>
            <ItemDetail />
        </div>
       
        
    )
}

export default ItemDetailcontainer