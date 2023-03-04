import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar , Container, Nav} from 'react-bootstrap';

export const NavbarComp = () => {
    return (
        <>       
        <Navbar bg="danger" expand="lg" collapseOnSelect>
        <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-2"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="react-router/" className="text-light">
                <h4>&#127968; Home</h4>
                </Nav.Link>
                <Nav.Link href="react-router/contacto" className="text-light">
                <h4>&#128241; Contacto</h4>
                </Nav.Link>
            </Nav>
            <Navbar.Brand className='text-light'>
                <h3>Happy Taco &#127790;</h3>
            </Navbar.Brand>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
}

export default NavbarComp;