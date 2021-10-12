import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



import { BsFillGiftFill } from 'react-icons/bs';
import { BsFillPuzzleFill } from 'react-icons/bs';
import { BsLightningFill } from 'react-icons/bs';
import { BsSkipBackwardFill } from 'react-icons/bs';
import { BsShieldFill } from 'react-icons/bs';
import { BsSkipForwardFill } from 'react-icons/bs';
import { DiAndroid } from "react-icons/di";
import { DiApple } from "react-icons/di";
import { Link } from 'react-router-dom';

import Zoom from 'react-reveal/Zoom';

function Home() {
  return (
    <div>

      <Jumbotron className="jumbotron text-white">
        <Container>
          <h1 className="darkorange"><strong>Welcome to Tuition E-Wallet&trade;</strong></h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Link to="/apply"><Button variant="primary" size="lg">Apply Now</Button></Link>
          </p>
        </Container>
      </Jumbotron>

      <div className="orange-bg about">
        <Container>
          <Row>
            <Col lg={8}>
              <Zoom>
              <h2 className="grey-text"><strong>ABOUT US</strong></h2>
              </Zoom>
              
              <hr className="border-bottom-dark" />
              <p className="dark-text">
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
              </p>
            </Col>
            <Col lg={4}>
              This should be an Image
            </Col>
          </Row>
        </Container>
      </div>
 
      <div className="grey p-5">
      <Container className="">
        <Zoom>
        <h2 className="darkorange"><strong>WHAT WE OFFER</strong></h2>
        </Zoom>
      
        <hr className="border-bottom" />
        <br />
        <Row className="text-center">
          <Col lg={4} className="services">
          <BsFillGiftFill size="80" className="darkorange" />
          <h3>Quick Loan</h3>
          <br />
          <br />
          <p className="orange-border">
          This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          </Col>
          <Col lg={4} className="services">
          <BsFillPuzzleFill size="80" className="darkorange" />
          <h3>Credit Services</h3>
          <br />
          <br />
          <p className="orange-border">
          This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          </Col>
          <Col lg={4} className="services">
          <BsLightningFill size="80" className="darkorange" />
          <h3>Easy Access</h3>
          <br />
          <br />
          <p className="orange-border">
          This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          </Col>
        </Row>

      </Container>
      </div>
      


      <div className="orange-bg">
        <Container>
          <Zoom>
          <h2 className="dark-text"><strong>HOW WE WORK</strong></h2>
          </Zoom>
        
          <hr className="border-bottom-dark" />
          <br />
          <Row className="text-center">
            <Col lg={4} className="work">
            <BsSkipBackwardFill size="80" className="darkbrown" />
            <h3 className="">You Apply</h3>
            <br />
            <br />
            <p className="dark-text">
            At Tuition E-Wallet we are determined to make financial loans accessible to those who need it most. You can apply for a Credit Wallet loan from the comfort of your own home, anytime of the day.
            </p>
            </Col>
            <Col lg={4} className="work">
            <BsShieldFill size="80" className="darkbrown" />
            <h3 className="">We Process</h3>
            <br />
            <br />
            <p className="dark-text">
            With innovative technology to assess your ability to repay your loan. Partnering with Credit Bureaus and your employer, we are able to quickly and fairly assess your financial position.
            </p>
            </Col>
            <Col lg={4} className="work">
            <BsSkipForwardFill size="80" className="darkbrown" />
            <h3 className="">We Disburse</h3>
            <br />
            <br />
            <p className="dark-text">
            When you accept our ‘Credit Offer” with terms and conditions, we will automatically disburse the agreed funds into your account. wewewewewewewewewewewe
            </p>
            </Col>
          </Row>

        </Container>
      </div>

      <div className="text-center p-5 mobile-app border-top">
        <Container>
       <Zoom>
       <h2 className="darkorange"><strong>Tuition E-Wallet MOBILE APP</strong></h2>
       </Zoom>
  
              
           
              <p className="">
              Download the Tuition E-Wallet and simplify your Loan Processing. Discover quick, simple and convenient way to take request and manage your loanapplications, on your mobile phone.
              </p>

              <hr />

            <Row className="text-center">
              <Col lg={6}>
                <DiAndroid size="80" className="green" />
              </Col>
              <Col lg={6}>
                <DiApple size="80" className="purple" />
              </Col>
            </Row>
      
        </Container>
      </div>
            

    </div>
  )
}

export default Home
