// 1- tiene que estar la variable react en scope
import React from "react"
import reactDom from "react-dom"
// 2- tiene que estar la variable reactDOM en scope
import ReactDOM from "react-dom"
import './style.css'
import Menu from './Menu.js'
// 3- tengo que tener un elemento
const Elemento = () => <p>otra frase de prueba</p>


// 4- tengo que renderizar el elemento
ReactDOM.render(<Elemento/> , document.getElementById('root'))
reactDom.render(<Menu/>, document.getElementById('menu'))


