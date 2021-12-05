import "./home.css"
import ImgHome from '/Users/rodrigosolis/Desktop/rodrigo/Curso-ReactJs/proyecto-ecommerce/dog-ecommerce/src/img/perro-home.png'
import Logo from '/Users/rodrigosolis/Desktop/rodrigo/Curso-ReactJs/proyecto-ecommerce/dog-ecommerce/src/img/dogmatik logo-negro.svg'


const Home = () => {
    return (
        <div className="homeContainer">

            <div className="saludoHome">
            <h1>¡Bienvenidos a nuestra tienda online¡</h1>
            <img src={Logo}  alt="logo" width="240px"/>
            </div>
            <img src={ImgHome} alt="dog-home" className="img-home"/>
        </div>
    )
}

export default Home
