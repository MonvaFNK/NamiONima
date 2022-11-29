import Especiales from './Especiales/Especiales.js';
import Landing from './Landing/Landing.js';
import Portfolio from './Portfolio/Portfolio.js';

function Main() {
    return (
        <section className='maincontainer'>
            <Landing />
            <Portfolio />
            <Especiales />
        </section >

    )
}
export default Main;