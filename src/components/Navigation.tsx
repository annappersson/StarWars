import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router";
import logo from "../assets/img/stormtrooper.png";
import "../assets/scss/Navigation.scss";

export const Navigation = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Image src={logo} alt="stormtrooper as logo" />{" "}
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/Main">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/people">
            People
          </Nav.Link>
          <Nav.Link as={NavLink} to="/films">
            Film
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
