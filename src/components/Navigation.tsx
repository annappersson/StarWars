
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router';

export const Navigation = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/people">People</Nav.Link>
        {/* <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      </Nav>
    </Container>
    </Navbar>
  )
}

export default Navigation;


