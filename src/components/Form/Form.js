import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton.js';

function FormSection() {
    useEffect(()=>{
        window.scrollTo(0, 0);
    })

    const enviarForm = () => {
        alert('Gracias, se le contactara pronto');
        document.querySelector('.form').style.display = "none";
    };
    let precio = "100$"


    return (
        <div className="form">
            <Form className="form__contents">
                <h2>Arma tu plan</h2>
                <Form.Group className="mb-3 form__contents--body" controlId="formBasicEmail">
                    {/*                     <InputGroup>
                        <Form.Control as="textarea" aria-label="With textarea" placeholder='Describi tu plan ideal!' />
                    </InputGroup> */}
                    <div className='form__contents--body_items'>
                        <div>
                            <p>Este item es esta cosa</p>
                            <Form.Check type="switch" id="custom-switch" label={`${precio}`} />
                        </div>
                        <div>
                            <p>Este item es esta cosa</p>
                            <Form.Check type="switch" id="custom-switch" label={`${precio}`} />
                        </div>
                        <div>
                            <p>Este item es esta cosa</p>
                            <Form.Check type="switch" id="custom-switch" label={`${precio}`} />
                        </div>
                        <div>
                            <p>Este item es esta cosa</p>
                            <Form.Check type="switch" id="custom-switch" label={`${precio}`} />
                        </div>
                        <div>
                            <p>Este item es esta cosa</p>
                            <Form.Check type="switch" id="custom-switch" label={`${precio}`} />
                        </div>
                        <Form.Label>Email</Form.Label>
                        <Form.Control className='form__contents--body_email' type="email" placeholder="Ejemplo@ejemplo.com" />
                        <Form.Text className="text-muted">
                            No compartiremos tu informacion con nadie.

                        </Form.Text>
                        <h4>Te contactaremos pronto</h4>
                    </div>
                </Form.Group>
                <Button onClick={enviarForm} variant="primary">
                    Enviar
                </Button>
            </Form>
            <ScrollToTopButton/>
        </div>
    )
}

export default FormSection
