/* import MenuHamburguesa from "../MenuHamburguesa/MenuHamburguesa"; */
import Marca from './Utilities/Marca.png'
import { useEffect } from 'react';
import React from "react";
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";

function Navbar() {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const navbarContainer = document.querySelector('.navbar__container--sections_highlight');

            const mainChildrenRects = [];
            const mainChildren = document.querySelectorAll('.appContainer > *');
            mainChildren.forEach((child) => {
                mainChildrenRects.push(child.getBoundingClientRect());
            });
            if (mainChildrenRects[0].bottom >= 200) {
                navbarContainer.classList.toggle('stage-1', true);
                navbarContainer.classList.toggle('stage-2', false);
                navbarContainer.classList.toggle('stage-3', false);
                navbarContainer.classList.toggle('stage-4', false);
                navbarContainer.classList.toggle('stage-5', false);
            } else if (mainChildrenRects[1].bottom >= 200) {
                navbarContainer.classList.toggle('stage-1', false);
                navbarContainer.classList.toggle('stage-2', true);
                navbarContainer.classList.toggle('stage-3', false);
                navbarContainer.classList.toggle('stage-4', false);
                navbarContainer.classList.toggle('stage-5', false);
            } else if (mainChildrenRects[2].bottom >= 200) {
                navbarContainer.classList.toggle('stage-1', false);
                navbarContainer.classList.toggle('stage-2', false);
                navbarContainer.classList.toggle('stage-3', true);
                navbarContainer.classList.toggle('stage-4', false);
                navbarContainer.classList.toggle('stage-5', false);
            } else if (mainChildrenRects[3].bottom >= 500) {
                navbarContainer.classList.toggle('stage-1', false);
                navbarContainer.classList.toggle('stage-2', false);
                navbarContainer.classList.toggle('stage-3', false);
                navbarContainer.classList.toggle('stage-4', true);
                navbarContainer.classList.toggle('stage-5', false);
            } else  {
                navbarContainer.classList.toggle('stage-1', false);
                navbarContainer.classList.toggle('stage-2', false);
                navbarContainer.classList.toggle('stage-3', false);
                navbarContainer.classList.toggle('stage-4', false);
                navbarContainer.classList.toggle('stage-5', true);
            }
        });
    }, []);
    return (
        <div class="pos-f-t sticky">
            <nav class="navbar navbar-dark bg-dark navbar__container">
                <ul className="navbar__container--sections">
                    <Link to='/'>
                        <div className="navbar__container--logo">
                            <h2 className='navbar__texto--titular1'>NAMI
                                <div className='navbar__texto--marca'><img src={Marca} className='navbar__texto--marca_svg' /></div>
                                <span className="navbar__texto--titular2">NIMA</span>
                            </h2>
                        </div>
                    </Link>
                    <div className='navbar__container--sections_container'>
                        <div className='navbar__container--sections_highlight stage-1'></div>
                        <div className='navbar__container--sections_texto'> <HashLink to='/#landing'><li id='navbar__element0' >Inicio</li></HashLink></div>
                        <div className='navbar__container--sections_texto'> <HashLink to='/#portfolio'><li id='navbar__element1' >Nuestro Trabajo</li></HashLink></div>
                        <div className='navbar__container--sections_texto'> <HashLink to='/#especiales'><li id='navbar__element2' >Servicios</li></HashLink></div>
                        <div className='navbar__container--sections_texto'> <HashLink to='/#catalogo'><li id='navbar__element3' >Ofertas</li></HashLink></div>
                        <div className='navbar__container--sections_texto'> <HashLink to='/#contacto'><li id='navbar__element4' >Contacto</li></HashLink></div>
                    </div>
{/*                     <Link to='/User'> <li>Tu Compra</li></Link> */}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;

/*    ## Elementos sin uso ##

            ## Boton con functionality para el menu hamburguesa ##

                <button class="navbar-toggler navbar__button" type="button" onClick={handleOpenCart}>
                    <span class="navbar-toggler-icon "></span>
                </button>
                <MenuHamburguesa /> 

            ## Function Abrir menu hamburguesa ##

        let openCart = true
        const handleOpenCart = () => {
            if(openCart === true){
            let item = document.querySelector('.cart__container');
            item.style.display = 'flex';
            openCart = false;
            } else {
                let item = document.querySelector('.cart__container');
                item.style.display = 'none';
                openCart = true;
            }
        }



*/