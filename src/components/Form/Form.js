import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { InputGroup, Alert } from 'react-bootstrap';


function FormSection() {
    const cerrarForm = () => {
        document.querySelector('.form').style.display = "none";
    }
    const enviarForm = () => { 
        alert('Gracias, se le contactara pronto');
        document.querySelector('.form').style.display = "none";
    }

    return (
        <div className="form">
            <Form className="form__contents">
                <Form.Group className="mb-3 form__contents--body" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ejemplo@ejemplo.com" />
                    <Form.Text className="text-muted">
                        No compartiremos tu informacion con nadie.
                    </Form.Text>
                    <InputGroup>
                        <Form.Control as="textarea" aria-label="With textarea" placeholder='Describi tu plan ideal!' />
                    </InputGroup>
                </Form.Group>
                <Button onClick={enviarForm} variant="primary">
                    Enviar
                </Button>
                <CloseButton className="form__contents--close" onClick={cerrarForm}></CloseButton>
            </Form>
        </div>
    )
}

export default FormSection
