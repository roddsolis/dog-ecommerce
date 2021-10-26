import './Componentes/styles/style.css'
import NavBar from './Componentes/NavBar'
import Footer from './Componentes/Footer'
import Main from './Componentes/Main'
import ItemListContainer from './Componentes/ItemListContainer'


const App = () => {
    return( 
        <>
    <NavBar/>
    <ItemListContainer saludo="Bienvenido" nombre="Rodrigo Solis"/>
    <Main/>
    <Footer/>
    </> 
    )
}


export default App