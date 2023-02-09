import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
function CNavbar() {
    return (
        <>
            <Navbar className='nav_cus' bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Portafolio Mels</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/certificados">Certificados</Nav.Link>
                            <NavDropdown title="Proyectos" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to='/proyectos/python/'>Python</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/proyectos/javascript/'>Javascript
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/about">Acerca</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default CNavbar
