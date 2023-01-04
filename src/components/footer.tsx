import Nav from 'react-bootstrap/Nav';
import './footer.css';
import { SocialIcon } from 'react-social-icons';
import Link from './link';

function Footer() {
  return (
    <div className='footer'>
      <Nav>
        <Nav.Item>
          <Link to="/" name="HOME" />
        </Nav.Item>
        <Nav.Item>
          <Link to="/instructors" name="INSTRUCTORS" />
        </Nav.Item>
        <Nav.Item>
          <Link to="/faq" name="FAQ" />
        </Nav.Item>
        <Nav.Item>
          <Link to="/about" name="ABOUT" />
        </Nav.Item>
        <Nav.Item>
          <Link to="/calendar" name="CALENDAR" />
        </Nav.Item>
        <Nav.Item>
          <Link to="/contact" name="CONTACT" />
        </Nav.Item>
      </Nav>
      <div className='socials'>
        <SocialIcon network='facebook' url='#' />
        <SocialIcon network='youtube' url='#' />
        <SocialIcon network='email' url='#' />
      </div>
      <p className='copyright'>OSTKD © 2023</p>
    </div>
  );
}


export default Footer;
