import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Marca from './Utilities/Marca.png';
import Nightsky from './Nightsky/Nightsky.js';
import Typewriter from 'typewriter-effect';


function Landing() {



    return (
        <div className='maincontainer__section' >
            <Nightsky />
            <div className="maincontainer__imagenes--texto">
                <div className="maincontainer__texto--titular">
                    <h1 className='maincontainer__texto--titular1'>NAMI<img src={Marca} className='maincontainer__texto--marca' /><span className="maincontainer__texto--titular2">NIMA</span></h1>
                </div>
                <div className='maincontainer__texto2'>
                    <h3 className="maincontainer__texto--parrafo">Potenciamos tu
                        <Typewriter
                            options={{
                                strings: ['negocio', 'empresa', 'marca'],
                                autoStart: true,
                                skipAddStyles: false,
                                loop: true,
                                cursor: '',
                            }}
                        />   </h3>
                    <h3 className='maincontainer__texto--parrafo'>en<Typewriter
                        options={{
                            strings: ['Facebook', 'Instagram', 'YouTube'],
                            autoStart: true,
                            loop: true,
                            cursor: '',
                        }}
                    /></h3>
                </div>
            </div>
            <div className="maincontainer__imagenes--seccion">
                <h2 className='maincontainer__texto'>Facilitamos el manejo de tus redes sociales</h2>
            </div>
        </div>
    )
}




export default Landing