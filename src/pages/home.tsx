import './home.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import NavBar from '../components/navbar';
import Footer from '../components/footer';

function HomePage() {
  return (
    <>
      <NavBar />
      <div style={{ backgroundImage: "url(/new-homepage.jpg)" }} className="home">
        <div className='cards' style={{ gridRow: '2' }}>
          <Card>
            <Card.Img variant='top' src='img1.jpg' />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>this is some text wowww</Card.Text>
              <Button variant='primary'>Go Somewhere</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant='top' src='img1.jpg' />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>this is some text wowww</Card.Text>
              <Button variant='primary'>Go Somewhere</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant='top' src='img1.jpg' />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>this is some text wowww</Card.Text>
              <Button variant='primary'>Go Somewhere</Button>
            </Card.Body>
          </Card>

        </div>

        <div className='cards' style={{ gridRow: '3' }}>
          <Card>
            <Card.Img variant='top' src='img1.jpg' />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>this is some text wowww</Card.Text>
              <Button variant='primary'>Go Somewhere</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant='top' src='img1.jpg' />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>this is some text wowww</Card.Text>
              <Button variant='primary'>Go Somewhere</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant='top' src='img1.jpg' />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>this is some text wowww</Card.Text>
              <Button variant='primary'>Go Somewhere</Button>
            </Card.Body>
          </Card>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default HomePage;
