import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar, Button } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import "./style.css";
function HeaderMenu() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="logo-toggler">
          <img
            src={logo}
            className="d-inline-block align-top site-logo"
            alt="Unity Welfare Fund"
          />
     
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto site-menu">
            <Nav.Link className="active" href="/">
              Home
            </Nav.Link>

            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/appeals">Appeal</Nav.Link>
            <Nav.Link href="/campaign">Campagin</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Link to={`/donate`}>
            <Button className="donate">Donate</Button>
            </Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderMenu;
