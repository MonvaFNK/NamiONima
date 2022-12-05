/* import MenuHamburguesa from "../MenuHamburguesa/MenuHamburguesa"; */
import Marca from './Utilities/Marca.png'
import { useEffect } from 'react';
import React, { Component } from "react";


function Navbar() {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const navbarContainer = document.querySelector(".navbar__container--sections_highlight");
            if (window.scrollY < 700) {
                navbarContainer.classList.add('stage-1');
                navbarContainer.classList.remove('stage-2');
            } else if (window.scrollY < 1400) {
                navbarContainer.classList.add('stage-2');
                navbarContainer.classList.remove('stage-1');
                navbarContainer.classList.remove('stage-3');
            } else if (window.scrollY < 1800) {
                navbarContainer.classList.add('stage-3');
                navbarContainer.classList.remove('stage-2');
                navbarContainer.classList.remove('stage-4');
            } else if (window.scrollY < 2000) {
                navbarContainer.classList.add('stage-4');
                navbarContainer.classList.remove('stage-3');
                navbarContainer.classList.remove('stage-5');
            } else {
                navbarContainer.classList.add('stage-5');
                navbarContainer.classList.remove('stage-4');
            }
        });
    }, []);
    return (
        <div class="pos-f-t sticky">
            <nav class="navbar navbar-dark bg-dark navbar__container">
                <ul className="navbar__container--sections">
                    <div className="navbar__container--logo">
                        <h2 className='navbar__texto--titular1'>NAMI
                            <div className='navbar__texto--marca'><img src={Marca} className='navbar__texto--marca_svg' /></div>
                            <span className="navbar__texto--titular2">NIMA</span>
                        </h2>
                    </div>
                    <div className='navbar__container--sections_container'>
                        <div className='navbar__container--sections_highlight'></div>
                        <div className='navbar__container--sections_texto'> <li id='navbar__element0' >Home</li></div>
                        <div className='navbar__container--sections_texto'> <li id='navbar__element1' >Portfolio</li></div>
                        <div className='navbar__container--sections_texto'> <li id='navbar__element2' >Especiales</li></div>
                        <div className='navbar__container--sections_texto'> <li id='navbar__element3' >Catalogo</li></div>
                        <div className='navbar__container--sections_texto'> <li id='navbar__element4' >Contacto</li></div>
                    </div>
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