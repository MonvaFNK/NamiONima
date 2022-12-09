import Landing from './Landing/Landing';
import Portfolio from './Portfolio/Portfolio';
import Especiales from './Especiales/Especiales';
import Catalogo from './Catalogo/Catalogo';
import ScrollToTop from './../ScrollToTop/ScrollToTop';
import { useRef } from 'react';


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