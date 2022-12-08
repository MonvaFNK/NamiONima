import placeholder from './Utilities/placeholder.png';
import PaginasWeb from'./Utilities/Especiales__PaginasWeb.png';
import Videos from'./Utilities/Especiales__Videos.png';
import Flyiers from './Utilities/Especiales__Flyiers.png';


function Especiales() {
    /* read docs */

    const changeCard = (e) => {
        /* let item = document.querySelector(`.${e.target.id}`); */
        document.querySelector(`.${e.target.id}`).style.display = 'none';
    }

    return (
        <div className='especiales' id="especiales">
            <h2> Especiales</h2>
            <div className="especiales__seccion">
                <div className="especiales__seccion--contenedor especialesImg1">
                    <div className='especiales__seccion--cartas'>
                        <img className='especiales__seccion--imagen' src={Flyiers} alt="" />
                    </div>
                    <div className='especiales__seccion--texto'>
                        <p>Diseño y rediseño de marcas</p>
                    </div>

                </div>
                <div className="especiales__seccion--contenedor especialesImg2">
                    <div className='especiales__seccion--cartas'>
                        <img className='especiales__seccion--imagen' src={PaginasWeb} alt="" />
                    </div>
                    <div className='especiales__seccion--texto'>
                        <p>Creacion de paginas web</p>
                    </div>
                </div>
                <div className="especiales__seccion--contenedor especialesImg3">
                    <div className='especiales__seccion--cartas'>
                        <img className='especiales__seccion--imagen' src={Videos} alt="" />
                    </div>
                    <div className='especiales__seccion--texto'>
                        <p>Edicion y creacion de videos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Especiales;