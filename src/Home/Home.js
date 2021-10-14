
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
          Just Start your journey into a financial freedom
          </p>
          <p>
         
<Link to="/register"><Button variant="primary" size="lg">Register</Button></Link>


          </p>
        </Container>
      </Jumbotron>

      <div className="orange-bg about">
        <Container>
          <Row>
            <Col lg={8}>
              <Zoom>
              <h2 className="grey-text"><strong>VISION / MISSION</strong></h2>
              </Zoom>
              
              <hr className="border-bottom-dark" />
              <p className="dark-text">
              To create the smartest way of managing tuition fund for parents and students while ensuring a financial freedom
              </p>
            </Col>
            <Col lg={4}>
            <p style={{fontSize:100}}>&#129312;</p>
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
          <h3>E-wallet</h3>
          <br />
          <br />
          <p className="orange-border">
          A software application with an unwithdrawable e-wallet  for  tuition fee

          </p>
          </Col>
          <Col lg={4} className="services">
          <BsFillPuzzleFill size="80" className="darkorange" />
          <h3>Pikin savings</h3>
          <br />
          <br />
          <p className="orange-border">
          Sees your child through his or her final educational level 

          </p>
          </Col>
          <Col lg={4} className="services">
          <BsLightningFill size="80" className="darkorange" />
          <h3>financial freedom</h3>
          <br />
          <br />
          <p className="orange-border">
          finally withdraw for a business purpose after post graduate degree.

          </p>
          </Col>
        </Row>

      </Container>
      </div>
      


      <div className="orange-bg">
        <Container>
          <Zoom>
          <h2 className="dark-text"><strong>UNIQUE VALUE PROPOSITION</strong></h2>
          </Zoom>
        
          <hr className="border-bottom-dark" />
          <br />
          <Row className="text-center">
            <Col lg={4} className="work">
            <BsSkipBackwardFill size="80" className="darkbrown" />
            <h3 className="">1</h3>
            <br />
            <br />
            <p className="dark-text">
            Parent users  can save responsibly and secure their childs tuition fee till post graduate.  
            </p>
            </Col>
            <Col lg={4} className="work">
            <BsShieldFill size="80" className="darkbrown" />
            <h3 className="">2</h3>
            <br />
            <br />
            <p className="dark-text">
            Students can inherit pikin savings from parents after admission into a uni and continue  on the path of a  tuition fee /after school savings habit. 

            </p>
            </Col>
            <Col lg={4} className="work">
            <BsSkipForwardFill size="80" className="darkbrown" />
            <h3 className="">3</h3>
            <br />
            <br />
            <p className="dark-text">
            School fees payment across all levels of education is constant

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
