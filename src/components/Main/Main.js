import Landing from './Landing/Landing';
import Portfolio from './Portfolio/Portfolio';
import Especiales from './Especiales/Especiales';
import Contacto from './Contacto/Contacto';
import Catalogo from './Catalogo/Catalogo';
import ScrollToTop from './../ScrollToTop/ScrollToTop';
import FormSection from './../Form/Form';
function Main() {
    return (
        <div className='appContainer'>
            <Landing />
            <Portfolio />
            <Especiales />
            <Catalogo />
            <ScrollToTop />
        </div>
    )
}

export default Main;