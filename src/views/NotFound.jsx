import 'bootstrap/dist/css/bootstrap.min.css';


import {NavbarComp} from '../components/Navbar';
import {Col, Container} from 'react-bootstrap';

const NotFound = () => {
    return (
        <> 
            <NavbarComp/>
            <Container style = {{ display: 'flex'}} className="back">
                <Col className="text-center">
                    <h1 className="text-center">Página no encontrada &#127790;</h1>                    
                    <img src="taco.png" alt='taco' width="400"  height="341"></img>                    
                </Col>                      
            </Container>                  
        </>
    );
}

export default NotFound;