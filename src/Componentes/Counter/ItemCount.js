
import { useState } from 'react'
import './counter.css'
import '../styles/button.css'
import { useContext } from 'react'
import { contexto } from '../CartContext'


function ItemCount( {onAdd}) {


   const { cart } = useContext(contexto)

    const [contador,setContador] = useState(0)


    const sumarContador = () => {
      
       setContador(contador + 1)
    }
    const restarContador = () => {
      
       setContador(contador - 1)
    }

    
    const confirmar = () => {
      onAdd(contador)
      console.log("Me diste un click")
   }


    return (
        
            < div className="product-count">
            <div className="container--contador">
            <button onClick={restarContador} className="boton-restar">-</button>
            <div className="contador">{contador}</div>
            <button onClick={sumarContador} className="boton-sumar">+</button>
            </div>
            <button onClick={confirmar} btntext="Agregar al carro" className="button-primary">Agregar al carro</button>
            </div>
        
    ) 
}

export default ItemCount
