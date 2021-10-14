import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

function FAQ() {
  return (
    <div>
    <Jumbotron className="faq">
     <Container>
       <h1 className="darkorange"><strong>FAQs</strong></h1>


     </Container>
   </Jumbotron>


   <Container className="mb-5">
       <h2 className="darkorange text-center">General Question's</h2>
       <hr />

       <Accordion defaultActiveKey="0">
         <Card>
           <Accordion.Toggle as={Card.Header} eventKey="0">
           <strong>Customer Segment</strong>
           </Accordion.Toggle>
           <Accordion.Collapse eventKey="0">
             <Card.Body>
             Undergraduate, Postgraduate & Parents
             </Card.Body>
           </Accordion.Collapse>
         </Card>
         <Card>
           <Accordion.Toggle as={Card.Header} eventKey="1">
           <strong>Early Adopters</strong>
           </Accordion.Toggle>
           <Accordion.Collapse eventKey="1">
             <Card.Body>
               Undergraduate Students & Parents
               </Card.Body>
           </Accordion.Collapse>
         </Card>
         <Card>
           <Accordion.Toggle as={Card.Header} eventKey="2">
           <strong>Problem Statement 1</strong>
           </Accordion.Toggle>
           <Accordion.Collapse eventKey="2">
             <Card.Body>
             Parents & students misspend money meant for school transactions (for themselves or their children)

               </Card.Body>
           </Accordion.Collapse>
         </Card>
         <Card>
           <Accordion.Toggle as={Card.Header} eventKey="3">
           <strong>Problem Statement 2</strong>
           </Accordion.Toggle>
           <Accordion.Collapse eventKey="3">
             <Card.Body>
             Students fail to have enough savings after undergraduate level for  furthering a postgraduate degree or starting a business

               </Card.Body>
           </Accordion.Collapse>
         </Card>
         <Card>
           <Accordion.Toggle as={Card.Header} eventKey="4">
           <strong>Problem Statement 3</strong>
           </Accordion.Toggle>
           <Accordion.Collapse eventKey="4">
             <Card.Body>
             Students hold too much cash at hand

               </Card.Body>
           </Accordion.Collapse>
         </Card>
       </Accordion>


     </Container>
   
 </div>
  )
}

export default FAQ
