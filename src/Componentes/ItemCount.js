import './styles/button.css'
import { useState } from 'react'
import Button from './Button'
import './styles/itemcount.css'
import './styles/item-product.css'

function ItemCount() {


    const [contador,setContador] = useState(0)


    const sumarContador = () => {
      
       setContador(contador + 1)
    }
    const restarContador = () => {
      
       setContador(contador - 1)
    }


    return (
        <div className="item-product">
            <div className="container--contador">
            <button onClick={restarContador} className="boton-restar">-</button>
            <div className="contador">{contador}</div>
            <button onClick={sumarContador} className="boton-sumar">+</button>
            </div>
            <Button/>
        </div>
    ) 
}

export default ItemCount
