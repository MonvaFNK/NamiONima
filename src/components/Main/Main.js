import Especiales from './Especiales/Especiales.js';
import Landing from './Landing/Landing.js';
import Portfolio from './Portfolio/Portfolio.js';
import Catalogo from './Catalogo/Catalogo.js';
import Contacto from './Contacto/Contacto.js';


function Main() {
    return (
        <section className='maincontainer'>
            <Landing />
            <Portfolio />
            <Especiales />
            <Catalogo />
            <Contacto />
        </section >

    )
}
export default Main;