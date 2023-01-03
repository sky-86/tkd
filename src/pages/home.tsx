import './home.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

function HomePage() {
  return (
    <>
      <img src='/new-homepage.jpg' className="bgImage" />
      <Stack style={{ marginTop: '-5vh' }} gap={5}>
        <div className='cards'>
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

        <div className='cards'>
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
      </Stack>
    </>
  )
}

export default HomePage;
