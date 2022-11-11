
import ig1 from './Utilities/ig1.png';
import ig2 from './Utilities/ig2.png';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Marca from './Utilities/Marca.png';
import Especiales from './Especiales.js';

function Main() {
    return (
        <section className='maincontainer'>
            <div className='maincontainer__section'>
                <div className='fix-position'>
                    <div class="main-container ">
                        <div class="sub-container">
                            <div class="sky">
                                <div class="stars"></div>
                                <div class="stars2"></div>
                                <div class="stars3"></div>
                                <div class="comet"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="maincontainer__imagenes--texto">
                    <div className="maincontainer__texto--titular">
                        <img src={Marca} className='maincontainer__texto--marca' />
                    </div>
                    <h3 className="maincontainer__texto--parrafo">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consequatur repellendus aspernatur dolore. Repellat corporis similique ab qui voluptatibus numquam vel quos assumenda nostrum nam.</h3>
                </div>
                <h3 className='maincontainer__texto'>Trabaja con Nosotros</h3>
                <div className='maincontainer__imagenes'>
                    <Card className='cardcolor cardbody bounce-1 removeborder textcenter' style={{ width: '15rem' }}>
                        <Card.Body>
                            <Card.Title>Plan Basico - Mensual</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item className='cardcolor removebg removeborder'>Creacion de cuentas</ListGroup.Item>
                            <ListGroup.Item className='cardcolor removebg removeborder'>Reportes</ListGroup.Item>
                            <ListGroup.Item className='cardcolor removebg removeborder'> Instagram - 3 Publicaciones a la semana</ListGroup.Item>
                            <ListGroup.Item className='cardcolor removebg removeborder'> Facebook - 3 Publicaciones a la semana</ListGroup.Item>

                        </ListGroup>
                        <Card.Body className='maincontainer__imagenes--button'>
                            <a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848451e6a401845a769cd708c7"><Button variant="primary">Comprar</Button>{' '}</a>
                            <Card.Text> 5500ARS</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='cardcolor cardbody bounce-2 removeborder textcenter' style={{ width: '15rem' }}>
                        <Card.Body>
                            <Card.Title>Plan Intermedio - Mensual</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item className='cardcolor removebg removeborder'>Creacion de cuentas</ListGroup.Item>
                            <ListGroup.Item className='cardcolor removebg removeborder'>Reportes</ListGroup.Item>
                            <ListGroup.Item className='cardcolor removebg removeborder'> Instagram - 3 Publicaciones a la semana</ListGroup.Item>
                            <ListGroup.Item className='cardcolor removebg removeborder'> Facebook - 3 Publicaciones a la semana</ListGroup.Item>

                        </ListGroup>
                        <Card.Body className='maincontainer__imagenes--button'>
                            <a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848451e64801845a78014808d0"><Button variant="primary">Comprar</Button>{' '} </a>
                            <Card.Text> 6000ARS</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='cardcolor cardbody bounce-3 removeborder textcenter' style={{ width: '15rem' }}>
                        <Card.Body >
                            <Card.Title>Plan Premium - Mensual</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item className='cardcolor removebg removeborder'>Creacion de cuentas</ListGroup.Item>
                            <ListGroup.Item className='cardcolor removebg removeborder'>Reportes</ListGroup.Item>
                            <ListGroup.Item className='cardcolor removebg removeborder'> Instagram - 3 Publicaciones a la semana</ListGroup.Item>
                            <ListGroup.Item className='cardcolor removebg removeborder'> Facebook - 3 Publicaciones a la semana</ListGroup.Item>

                        </ListGroup>
                        <Card.Body className='maincontainer__imagenes--button'>
                            <a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c938084845a41c001845a7c6981001f"> <Button variant="primary">Comprar</Button>{' '}</a>
                            <Card.Text> 8500ARS</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='wave bounce-3'></div>
            </div>

            <div className='portfolio'>
                <h3 className='maincontainer__imagenes--titular2'>Trabajos de clientes satisfechos!</h3>
                <div className='portfolio__imagen'>
                    <div className="portfolio__imagen--1">
                        <img className='adjust-image'

                            src={ig2}
                        />
                    </div>
                    <div className="portfolio__imagen--1">
                        <img className='adjust-image'

                            src={ig1}
                        />
                    </div>
                </div>
            </div>
            <Especiales />
        </section >

    )
}
export default Main;