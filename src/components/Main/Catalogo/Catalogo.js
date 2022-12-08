import { Button, Card, ListGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Catalogo() {
    return (
        <div className="catalogo" id="catalogo">
            <h2 className="catalogo__titular">Catalogo de precios</h2>
            <div className='catalogo__imagenes'>
                <Card className='card__color card__body  card__removeborder card__textcenter'>
                    <Card.Body>
                        <Card.Title>Plan Basico - Mensual</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className='card__color card__removebg card__removeborder'>Creacion de cuentas</ListGroup.Item>
                        <ListGroup.Item className='card__color card__removebg card__removeborder'>Reportes</ListGroup.Item>
                        <ListGroup.Item className='card__color card__removebg card__removeborder'> Instagram - 3 Publicaciones a la semana</ListGroup.Item>
                        <ListGroup.Item className='card__color card__removebg card__removeborder'> Facebook - 3 Publicaciones a la semana</ListGroup.Item>

                    </ListGroup>
                    <Card.Body className='catalogo__imagenes--button'>
                        <a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848451e6a401845a769cd708c7"><Button variant="primary">Comprar</Button>{' '}</a>
                        <Card.Text className="card__text"> <span className="text-tachado">7000</span>6500ARS<span className="text-red"> 5% OFF</span></Card.Text>
                    </Card.Body>
                </Card>

                <Card className='card__color card__body  card__removeborder card__textcenter'>
                    <Card.Body>
                        <Card.Title>Plan Intermedio - Mensual</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className='card__color card__removebg card__removeborder'>Creacion de cuentas</ListGroup.Item>
                        <ListGroup.Item className='card__color card__removebg card__removeborder'>Reportes</ListGroup.Item>
                        <ListGroup.Item className='card__color card__removebg card__removeborder'> Instagram - 3 Publicaciones a la semana</ListGroup.Item>
                        <ListGroup.Item className='card__color card__removebg card__removeborder'> Facebook - 3 Publicaciones a la semana</ListGroup.Item>

                    </ListGroup>
                    <Card.Body className='catalogo__imagenes--button'>
                        <a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848451e64801845a78014808d0"><Button variant="primary">Comprar</Button>{' '} </a>
                        <Card.Text className="card__text"> <span className="text-tachado">9500</span>8500ARS <span className="text-red"> 10% OFF</span></Card.Text>
                    </Card.Body>
                </Card>

                <Card className='card__color card__body  card__removeborder card__textcenter'>
                    <Card.Body >
                        <Card.Title>Plan Premium - Mensual</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className='card__color card__removebg card__removeborder'>Creacion de cuentas</ListGroup.Item>
                        <ListGroup.Item className='card__color card__removebg card__removeborder'>Reportes</ListGroup.Item>
                        <ListGroup.Item className='card__color card__removebg card__removeborder'> Instagram - 3 Publicaciones a la semana</ListGroup.Item>
                        <ListGroup.Item className='card__color card__removebg card__removeborder'> Facebook - 3 Publicaciones a la semana</ListGroup.Item>

                    </ListGroup>
                    <Card.Body className='catalogo__imagenes--button'>
                        <a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c938084845a41c001845a7c6981001f"> <Button variant="primary">Comprar</Button>{' '}</a>
                        <Card.Text className="card__text"> <span className="text-tachado">13500</span>11000ARS <span className="text-red"> 20% OFF</span></Card.Text>
                    </Card.Body>
                </Card>


            </div>
            <Link to='/crea-tu-plan' >
                <button style={{ padding: "1rem", border: "none" }}>
                    Make your own!
                </button>
            </Link>
            {/*             <div className="catalogo__parrafo">
                <p className="catalogo__parrafo--texto" onClick={abrirForm}>Podes contactarnos por planes personalizados</p>
            </div> */}

        </div>
    )
}

export default Catalogo;