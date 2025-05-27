import { Image, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router";
import logo from "../assets/img/stormtrooper.png";
import "../assets/scss/Navigation.scss";

export const Navigation = () => {
  return (
    <Navbar bg="black" data-bs-theme="dark" expand="md">
      <Navbar.Brand as={Link} to="/Main">
        <Image src={logo} alt="stormtrooper as logo" />{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
