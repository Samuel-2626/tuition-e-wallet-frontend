import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <div>
 
       <Jumbotron className="faq">
        <Container>
          <h1 className="darkorange"><strong>Contact Us</strong></h1>

   
        </Container>
      </Jumbotron>


      <Container className="mb-5">
          <h2 className="darkorange text-center">We love to hear from you</h2>
          <hr />

          <Form className="mt-5">

          <Form.Group controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Name" />

            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />

            </Form.Group>


            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
 

            <Button variant="primary" type="submit" className="btn-3">
              Send Message
            </Button>
    </Form>

        
   
        </Container>
      
    </div>
  )
}

export default Contact
