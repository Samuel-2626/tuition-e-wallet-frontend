import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import { Link } from 'react-router-dom';


function Footer() {
  return (

    <footer className="orange-bg pt-5 pb-3 mb-0">
      <Container>

          <Row className="text-center">
            <Col sm={4}>
              <h3 className="dark-text"><strong>Tuition E-Wallet&trade;</strong></h3>
              <p className="">
              23, Opebi Road,
              <br />
              Pentagon Plaza, Ikeja.
              <br />
              Lagos, Nigeria.
              </p>
              <p className="">
              support@pennytrust.ng
              <br />
              07085698828
              </p>
            </Col>
            <Col sm={4}>
              <h3 className="dark-text"><strong>Useful Links</strong></h3>
              <Link to="/faq" className="darkcolor">FAQs</Link>
              <br />
              <Link to="/contact" className="darkcolor">Contact Us</Link>
              <br />
              <Link to="/contact" className="darkcolor">Mobile App</Link>
              <br />
              <Link to="/contact" className="darkcolor">How To Apply</Link>
            </Col>
            <Col sm={4}>
            This should be an Image
            <a href="/register"><Button variant="primary" size="lg" className="btn-2">Register</Button></a>
            </Col>
          </Row>

      </Container>
      <hr />
      <small className="text-center dark-text">Tuition E-Wallet&trade; Copyright &copy; 2021. All Rights Reserved.</small>
    </footer>

  )
}

export default Footer
