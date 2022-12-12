import Marca from './Utilities/Marca.png';
import Nightsky from './Nightsky/Nightsky.js';
import Typewriter from 'typewriter-effect';
import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaAngleDown } from "react-icons/fa";

function Landing() {
    const [isActive, setIsActive] = useState(false);
    const deleteElement = () =>{
        setIsActive(current => !current);
    }

    useEffect(() => {
        const landingHeight = document.getElementById('landing');
        const height = landingHeight.offsetHeight
    }, []);
    return (
        <div className='maincontainer__section' id='landing'>
            <Nightsky />
            <div className="maincontainer__imagenes--texto">
                <div className="maincontainer__texto--titular">
                    <h1 className='maincontainer__texto--titular_contenedor'> <span className="maincontainer__texto--titular1"> NAMI </span><img src={Marca} className='maincontainer__texto--marca' /><span className="maincontainer__texto--titular2">NIMA</span></h1>
                </div>
                <div className='maincontainer__texto'>
                    <h3 className="maincontainer__texto--parrafo">
                        <span className="maincontainer__texto--parrafo_oraciones1">
                            <span className='fix-right'> Potenciamos tu</span>
                            <Typewriter
                                options={{
                                    strings: ['negocio', 'empresa', 'marca'],
                                    autoStart: true,
                                    skipAddStyles: false,
                                    loop: true,
                                    cursor: '',
                                    color: '#00FFFF',
                                }}
                            />
                        </span>
                        <span className="maincontainer__texto--parrafo_oraciones2">
                            <span className='fix-right'> en</span>
                            <Typewriter
                                className='nima'
                                options={{
                                    strings: ['Facebook', 'Instagram', 'YouTube'],
                                    autoStart: true,
                                    loop: true,
                                    cursor: '',
                                }}
                            /></span>
                    </h3>
                </div>
            </div>
            <div className="maincontainer__imagenes--seccion">
                <HashLink to='/#portfolio'>
                    <button 
                    style={{
                        display: isActive ? 'none' : 'flex'
                    }}
                    className='maincontainer__imagenes--seccion_button bounce-3'
                    >
                        <h4 className='maincontainer__imagenes--seccion_button-texto' onClick={deleteElement}> 
                        <FaAngleDown /> Conocé nuestro trabajo <FaAngleDown/>
                        </h4>
                    </button>
                </HashLink>
            </div>
        </div>
    )
}



export default Landing