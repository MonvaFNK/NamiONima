import MenuHamburguesa from "./MenuHamburguesa/MenuHamburguesa";

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
                    <h2 className="navbar__titulo">Nami</h2><div className="navbar__titulo--o1"></div><div className="navbar__titulo--o2"></div> <h2 className="navbar__titulo2"> Nima</h2>
                </div>
                <button class="navbar-toggler navbar__button" type="button" onClick={handleOpenCart}>
                    <span class="navbar-toggler-icon "></span>
                </button>
                <MenuHamburguesa />
            </nav>

        </div>
    );
}

export default Navbar;