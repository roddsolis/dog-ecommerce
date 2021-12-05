import { Routes , Route } from 'react-router-dom'
import NavBar from './Componentes/NavBar'
import ItemListContainer from './Componentes/Item/ItemListContainer'
import Footer from './Componentes/Footer'
import './Componentes/styles/style.css'
import ItemDetailcontainer from './Componentes/ItemDetail/ItemDetailContainer'
import Home from "./Componentes/Home/Home"




const App = () => {


return(

<>
    <NavBar />
    
        <Routes>
            <Route exact path="/home" element={<Home/>}/>
            <Route path="/collares/:categoria" element={<ItemListContainer />}/>
            <Route path="/juguetes/:categoria" element={<ItemListContainer/>}/>
            <Route path="/correas-de-cadena/:categoria" element={<ItemListContainer/>}/>
            <Route path="/articulos-de-aseo/:categoria" element={<ItemListContainer/>}/>
            <Route exact path="/detalles/:id" element={<ItemDetailcontainer/>}/>
        </Routes>
    
    <Footer />
</>
)


}


export default App