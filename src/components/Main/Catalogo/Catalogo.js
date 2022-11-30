import { Button, Card, ListGroup } from "react-bootstrap";

function Catalogo() {
    return (
        <div className="catalogo">
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
                        <Card.Text> 5500ARS</Card.Text>
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
                        <Card.Text> 6000ARS</Card.Text>
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
                        <Card.Text> 8500ARS</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Catalogo;