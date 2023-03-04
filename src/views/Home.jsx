import 'bootstrap/dist/css/bootstrap.min.css';


import {NavbarComp} from '../components/Navbar';
import {Col, Container} from 'react-bootstrap';

const Home = () => {
    return (
        <> 
            <NavbarComp/>
            <Container style = {{ display: 'flex'}} className="back">
                <Col className="text-center">
                    <h1 className="text-center">Bienvenido a <b>Happy Taco</b></h1>
                    <h2 className="text-center">El lugar de los tacos felices</h2>
                    <img src="https://cdn.pixabay.com/photo/2013/07/13/09/37/taco-155812_960_720.png" alt='taco' width="300"  height="300"></img>                    
                </Col>                      
            </Container>                  
        </>
    );
}

export default Home;