import { Form } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function UserId() {
    const navigate = useNavigate();
    useEffect(() => {
        let userIdButton = document.querySelector('#userIdButton')
        userIdButton.addEventListener('click', () => {
            let valor = document.querySelector('.userId__form--input').value
            navigate(`/User/${valor}`)
        })
    })

    return (
        <div className="userId">
            <Form className="userId__form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><h2> Id de tu compra</h2></Form.Label>
                    <Form.Control className="userId__form--input" type="id" placeholder="Introduci tu id" />
                    <Form.Text className="text-muted">
                        No compartas tu Id con nadie.
                    </Form.Text>
                </Form.Group>
                <Button id='userIdButton'>Buscar</Button>
            </Form>
        </div>
    )
}

export default UserId;