import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

function Link(props: any) {
  return (
    <LinkContainer to={props.to}>
      <Nav.Link>{props.name}</Nav.Link>
    </LinkContainer>
  );
}

export default Link;


