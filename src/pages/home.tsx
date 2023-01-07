import './home.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

//<img src='/new-homepage.jpg' className="bgImage" />
function HomePage() {
  return (
    <>
      <div className='bgImage'></div>
      <Stack className='stack' gap={3}>
        <div className='cards'>
          <Card className='text-center'>
            <Card.Img variant='top' src='img3.jpg' />
            <Card.Body>
              <Card.Title>Interested</Card.Title>
              <Card.Text>Have more questions? Or do you want to sign up? Give us a call!</Card.Text>
              <Button variant='primary'>Contact Us</Button>
            </Card.Body>
          </Card>

          <Card className='text-center'>
            <Card.Img variant='top' src='img1.jpg' />
            <Card.Body>
              <Card.Title>About Us</Card.Title>
              <Card.Text>Learn more about us in FAQ.</Card.Text>
              <Button variant='primary'>FAQ</Button>
            </Card.Body>
          </Card>

          <Card className='text-center'>
            <Card.Img variant='top' src='img2.jpg' />
            <Card.Body>
              <Card.Title>Instructors</Card.Title>
              <Card.Text>Owner and Head Instructor: Barry Favors. Certified Instructor Henry Davis.</Card.Text>
              <Button variant='primary'>Learn More</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='cards'>
          <Card className='text-center'>
            <Card.Body>
              <Card.Title>Testimonials</Card.Title>
              <Card.Text>"What a great place, with great leaders.  So excited to get our children started here in OS"</Card.Text>
              <Card.Text>
                Tracy Wright, Client
              </Card.Text>
              <Button variant='primary'>Reviews</Button>
            </Card.Body>
          </Card>

          <Card className='text-center'>
            <Card.Body>
              <Card.Title>Events</Card.Title>
              <Card.Text>Check out our schedule and all upcoming events here</Card.Text>
              <Button variant='primary'>Calender</Button>
            </Card.Body>
          </Card>

          <Card className='text-center'>
            <Card.Body>
              <Card.Title>Location</Card.Title>
              <Card.Text>3827-3, Bienville Blvd, Ocean Springs, MS 39564</Card.Text>
              <Card.Text>Tel: +1 (228) 282-4795</Card.Text>
              <Button variant='primary'>Directions</Button>
            </Card.Body>
          </Card>

        </div>
      </Stack>
    </>
  )
}

export default HomePage;
