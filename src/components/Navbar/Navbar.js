/* import MenuHamburguesa from "../MenuHamburguesa/MenuHamburguesa"; */
import Marca from './Utilities/Marca.png'

function Navbar() {
    /*     let openCart = true
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
        } */
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
                    <div className='navbar__container--sections_texto'> <li>Home</li></div>
                    <div className='navbar__container--sections_texto'> <li>Portfolio</li></div>
                    <div className='navbar__container--sections_texto'> <li>Especiales</li></div>
                    <div className='navbar__container--sections_texto'> <li>Sobre Nosotros</li></div>
                    <div className='navbar__container--sections_texto'> <li>Contacto</li></div>
                </ul>
                {/* MENU HAMBURGUESA DESHABILITADO */}
                {/*                 <button class="navbar-toggler navbar__button" type="button" onClick={handleOpenCart}>
                    <span class="navbar-toggler-icon "></span>
                </button>
                <MenuHamburguesa /> */}
            </nav>

        </div>
    );
}

export default Navbar;