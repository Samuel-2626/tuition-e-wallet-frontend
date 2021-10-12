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
           <strong>Who is Tuition E-Wallet? Which bank are you affiliated with?</strong>
           </Accordion.Toggle>
           <Accordion.Collapse eventKey="0">
             <Card.Body>
             Tuition E-Wallet is licensed lender based in Lagos, Nigeria. We are determined to make financial credit accessible to those who need it most. Today we are doing so by offering loans to hundreds of salary earners in Nigeria.

               We are not affiliated with any bank.
             </Card.Body>
           </Accordion.Collapse>
         </Card>
         <Card>
           <Accordion.Toggle as={Card.Header} eventKey="1">
           <strong>Who qualifies for a Credit Wallet loan?</strong>
           </Accordion.Toggle>
           <Accordion.Collapse eventKey="1">
             <Card.Body>
               You qualify for a PennyTrust Inc. loan if you work for the Federal Government of Nigeria, or your employer is part of the Remita Payroll & HR platform.
               </Card.Body>
           </Accordion.Collapse>
         </Card>
         <Card>
           <Accordion.Toggle as={Card.Header} eventKey="2">
           <strong>How do I apply for a loan?</strong>
           </Accordion.Toggle>
           <Accordion.Collapse eventKey="2">
             <Card.Body>
             Simply click on the ‘Apply Now’ button anywhere on this website and you will be redirected to the loan application portal where you can begin your loan application.

             Complete the application form with all the correct details and we’ll take care of the rest!
               </Card.Body>
           </Accordion.Collapse>
         </Card>
         <Card>
           <Accordion.Toggle as={Card.Header} eventKey="3">
           <strong>I need help with my application. Who can I talk to?</strong>
           </Accordion.Toggle>
           <Accordion.Collapse eventKey="3">
             <Card.Body>
             Please call our customer success team on 0708 569 8828 or send an email to customersuccess@pennytrust.ng
               </Card.Body>
           </Accordion.Collapse>
         </Card>
         <Card>
           <Accordion.Toggle as={Card.Header} eventKey="4">
           <strong>What happens if I miss one or more monthly repayments?</strong>
           </Accordion.Toggle>
           <Accordion.Collapse eventKey="4">
             <Card.Body>
             It is very important you make your loan repayments on time as agreed in the ‘Credit Offer’. Failing to do so could negatively affect your Credit Score which makes it difficult for you to get future loans from us or any other financial institution.

             There is also a monthly penalty charge of up to 20% for each missed payment.
               </Card.Body>
           </Accordion.Collapse>
         </Card>
       </Accordion>


     </Container>
   
 </div>
  )
}

export default FAQ
