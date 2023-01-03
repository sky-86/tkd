import Nav from 'react-bootstrap/Nav';
import './footer.css';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className='footer'>
      <Nav>
        <Nav.Item>
          <Nav.Link href='/'>HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/programs'>PROGRAMS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/faq'>FAQ</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/about'>ABOUT</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/contact'>CONTACT</Nav.Link>
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
