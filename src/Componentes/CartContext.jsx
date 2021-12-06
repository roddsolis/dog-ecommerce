import { createContext, useState } from 'react'



export const contexto = createContext([])

console.log(contexto)

const { Provider } = contexto



const CustomComponent = ({children}) => {

    const [ cart, setCart] = useState([])

    const addToCart = (product,cantidad) => {
        console.log("este es el dato del cart context")
        console.log(product,cantidad)
    }
    
    const valorDelContexto = {
        cart: cart,
        addToCart: addToCart,
        setCart: setCart,

    }

    

    console.log(cart)

    return (

        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )


}

export default CustomComponent