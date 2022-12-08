import portfolio_misma from "./Utilities/portfolio_marca1_misma.png"
import portfolio_feliz_primavera from "./Utilities/portfolio_marca1_feliz_primavera.png";
import portfolio_calma from "./Utilities/portfolio_marca1_calma.png";
import portfolio_fraymuth from "./Utilities/portfolio_marca2_fraymuth.png"
import portfolio_hiit from "./Utilities/portfolio_marca2_hiit.png";
import portfolio_nutricionista from "./Utilities/portfolio_marca2_nutricionista.png";
import portfolio_zapas from "./Utilities/portfolio_marca3_zapas.png"
import portfolio_zapas2 from "./Utilities/portfolio_marca3_zapas2.jpg";
import portfolio_zapas3 from "./Utilities/portfolio_marca3_zapas3.png";
import portfolio_bombilla from "./Utilities/portfolio_marca4_bombilla.png"
import portfolio_neon from "./Utilities/portfolio_marca4_neon.png";
import portfolio_renovamos from "./Utilities/portfolio_marca4_renovamos.png";

function Portfolio() {
    return (
        <div className='portfolio' id="portfolio">
            <h2 className='maincontainer__imagenes--titular2'>Trabajos de clientes satisfechos!</h2>
            <div className='portfolio__imagen portfolio__grid'>


                <div className="portfolio__grid--item1">
                    <h3>Marca1</h3>
                    <div className="portfolio__grid--flex ">
                        <div className="portfolio__grid--container1">
                            <img className='adjust-image'
                                src={portfolio_feliz_primavera}
                            />
                        </div>
                        <div className="portfolio__grid--container1">
                            <img className='adjust-image'
                                src={portfolio_misma}
                            />
                        </div>
                        <div className="portfolio__grid--container1">
                            <img className='adjust-image'
                                src={portfolio_calma}
                            />
                        </div>
                    </div>
                </div>


                <div className="portfolio__grid--item2">
                    <h3>Marca2</h3>
                    <div className=" portfolio__grid--flex">
                        <div className="portfolio__grid--container2">
                            <img className='adjust-image'
                                src={portfolio_fraymuth}
                            />
                        </div>
                        <div className="portfolio__grid--container2">
                            <img className='adjust-image'
                                src={portfolio_hiit}
                            />
                        </div>
                        <div className="portfolio__grid--container2">
                            <img className='adjust-image'
                                src={portfolio_nutricionista}
                            />
                        </div>
                    </div>
                </div>


                <div className="portfolio__grid--item3">
                    <h3>Marca3</h3>
                    <div className=" portfolio__grid--flex">
                        <div className="portfolio__grid--container3">
                            <img className='adjust-image'
                                src={portfolio_zapas}
                            />
                        </div>
                        <div className="portfolio__grid--container3">
                            <img className='adjust-image'
                                src={portfolio_zapas2}
                            />
                        </div>
                        <div className="portfolio__grid--container3">
                            <img className='adjust-image'
                                src={portfolio_zapas3}
                            />
                        </div>
                    </div>
                </div>


                <div className="portfolio__grid--item4">
                    <h3>Marca4</h3>
                    <div className=" portfolio__grid--flex">
                        <div className="portfolio__grid--container4">
                            <img className='adjust-image'
                                src={portfolio_bombilla}
                            />
                        </div>
                        <div className="portfolio__grid--container4">
                            <img className='adjust-image'
                                src={portfolio_neon}
                            />
                        </div>
                        <div className="portfolio__grid--container4">
                            <img className='adjust-image'
                                src={portfolio_renovamos}
                            />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}


export default Portfolio