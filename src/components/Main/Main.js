import Landing from './Landing/Landing';
import Portfolio from './Portfolio/Portfolio';
import Especiales from './Especiales/Especiales';
import Catalogo from './Catalogo/Catalogo';
import ScrollToTopButton from './../ScrollToTopButton/ScrollToTopButton';
import { useEffect } from 'react';


function Main() {
    useEffect(()=>{
        window.scrollTo(0, 0);
    })
    return (
        <div className='appContainer'>
            <Landing id='landing'/>
            <Portfolio id='portfolio'/>
            <Especiales id='especiales'/>
            <Catalogo id='catalogo'/>
            <ScrollToTopButton/>
        </div>
    )
}

export default Main;