// 1- tiene que estar la variable react en scope

import React from "react"

// 2- tiene que estar la variable reactDOM en scope
import ReactDOM from "react-dom"

// 3- tengo que tener un elemento
  
const Elemento = () => <p>otra frase de prueba</p>

// 4- tengo que renderizar el elemento

ReactDOM.render(<Elemento/> , document.getElementById('root'))



