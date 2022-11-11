import MenuHamburguesa from "../MenuHamburguesa/MenuHamburguesa";
import Marca from './Utilities/Marca.png'

function Navbar() {
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
    return (
        <div class="pos-f-t sticky">
            <nav class="navbar navbar-dark bg-dark navbar__container">
                <div className="navbar__container--logo">
                    <img src={Marca} className='maincontainer__texto--marca' />
                </div>
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