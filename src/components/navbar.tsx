import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Outlet } from "react-router-dom";
import './navbar.scss';
import Link from './link';

// https://react-bootstrap.github.io/components/navbar/
function NavBar() {
  const expand = 'md';

  return (
    <>
      <Navbar key={expand} fixed='top' expand={expand}>
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
                <Link to="/" name="HOME" />
                <Link to="/instructors" name="INSTRUCTORS" />
                <Link to="/faq" name="FAQ" />
                <Link to="/calendar" name="CALENDAR" />
                <Link to="/contact" name="CONTACT" />
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
