import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router";

export const Navigation = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          {" "}
          <Nav.Link as={NavLink} to="/Main">
            Home
          </Nav.Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/people">
            People
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
