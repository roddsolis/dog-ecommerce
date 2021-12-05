
import { useState } from 'react'
import './counter.css'
import Button from '../Button'
import { createContext } from 'react'

function ItemCount( {onClick}) {



    const [contador,setContador] = useState(0)


    const sumarContador = () => {
      
       setContador(contador + 1)
    }
    const restarContador = () => {
      
       setContador(contador - 1)
    }


    return (
        
            < div className="product-count">
            <div className="container--contador">
            <button onClick={restarContador} className="boton-restar">-</button>
            <div className="contador">{contador}</div>
            <button onClick={sumarContador} className="boton-sumar">+</button>
            </div>
            <Button onClick={ () => onClick(contador) } btntext="Agregar al carro" buttonType="button-primary"/>
            </div>
        
    ) 
}

export default ItemCount
