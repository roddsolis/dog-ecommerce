import { Routes , Route } from 'react-router-dom'
import NavBar from './Componentes/NavBar'
import ItemListContainer from './Componentes/ItemListContainer'
import Footer from './Componentes/Footer'
import './Componentes/styles/style.css'
import ItemDetailcontainer from './Componentes/ItemDetail/ItemDetailContainer'
import Home from "./Home/Home"


const App = () => {


return(

<>
    <NavBar />
    
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/collares/:categoria" element={<ItemListContainer />}/>
            <Route path="/juguetes/:id" element={<ItemListContainer/>}/>
            <Route path="/correas-de-cadena/:id" element={<ItemListContainer/>}/>
            <Route path="/articulos-de-aseo/:id" element={<ItemListContainer/>}/>
            <Route path="/detalles/:id" element={<ItemDetailcontainer/>}/>
        </Routes>
    
    <Footer />
</>
)


}


export default App