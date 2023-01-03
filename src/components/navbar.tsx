import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Outlet } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import './navbar.css';

function Link(props: any) {
  return (
    <LinkContainer to={props.to}>
      <Nav.Link>{props.name}</Nav.Link>
    </LinkContainer>
  );
}

// https://react-bootstrap.github.io/components/navbar/
function NavBar() {
  const expand = 'lg';

  return (
    <>
      <Navbar key={expand} bg="light" sticky='top' expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="/">
            <img className='logo' src='logo.png' alt='OSTKD LOGO'></img>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >

            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <p className='nav-title'>OS TKD</p>
                <img className='logo-nav' src='logo.png' alt='OSTKD LOGO'></img>
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/" name="Home" />
                <Link to="/programs" name="Programs" />
                <Link to="/faq" name="Faq" />
                <Link to="/about" name="About" />
                <Link to="/contact" name="Contact" />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Outlet />
    </>
  )
}

export default NavBar;
