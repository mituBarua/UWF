import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar, Button } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../assets/logo.png";
import "./style.css";
function HeaderMenu() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            className="d-inline-block align-top site-logo"
            alt="Unity Welfare Fund"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto site-menu">
            <Nav.Link className="active" href="#deets">
              Home
            </Nav.Link>

            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/appeals">Appeal</Nav.Link>
            <Nav.Link href="/campaign">Campagin</Nav.Link>
            <Nav.Link href="#deets">News</Nav.Link>
            <Nav.Link href="#deets">Contact</Nav.Link>
            <Button className="donate">Donate</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderMenu;
