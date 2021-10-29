import './styles/button.css'
import { useState } from 'react'
import Button from './Button'
import './styles/itemcount.css'

function ItemCount() {


    const [contador,setContador] = useState(0)


    const sumarContador = () => {
      
       setContador(contador + 1)
    }
    const restarContador = () => {
      
       setContador(contador - 1)
    }


    return (
        <div>
            <div className="container--contador">
            <button onClick={sumarContador} className="boton-sumar">+</button>
            <div className="contador">{contador}</div>
            <button onClick={restarContador} className="boton-restar">-</button>
            </div>
            <Button/>
        </div>
    ) 
}

export default ItemCount
