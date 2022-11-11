import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import placeholder from './Utilities/placeholder.png';


function Especiales() {
    /* read docs */

    const changeCard = (e) => {
        /* let item = document.querySelector(`.${e.target.id}`); */
        document.querySelector(`.${e.target.id}`).style.display = 'none';
    }

    return (
        <div className='especiales'>
            <h2> Especiales</h2>
            <div className="especiales__contenedor">

                <div className='especialesCardButton1' >
                    <div className=''>
                        <Card className="bg-dark text-white">

                            <Card.Img src={placeholder} alt="Card image" />
                            <Card.ImgOverlay>
                            </Card.ImgOverlay>

                        </Card>
                        <div className="especiales__contenedor--imagen"></div>
                    </div>
                </div>
                <div>
                    <Button id='especialesCardButton1' variant='primary' onClick={changeCard}>Hacer Algo</Button>
                </div>

                <div className=''>
                    <div className=''>
                        <Card className=" bg-dark text-white">
                            <Card.Img src={placeholder} alt="Card image" />
                            <Card.ImgOverlay>
                            </Card.ImgOverlay>
                        </Card>
                        <div className="especiales__contenedor--imagen"></div>
                    </div>
                </div>

                <div className=''>
                    <div className=''>
                        <Card className="bg-dark text-white">
                            <Card.Img src={placeholder} alt="Card image" />
                            <Card.ImgOverlay>
                            </Card.ImgOverlay>
                        </Card>
                        <div className=" especiales__contenedor--imagen"></div>
                    </div>
                </div>

                <div className=''>
                    <div className=''>
                        <Card className="bg-dark text-white">
                            <Card.Img src={placeholder} alt="Card image" />
                            <Card.ImgOverlay>
                            </Card.ImgOverlay>
                        </Card>
                        <div className="especiales__contenedor--imagen"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Especiales;