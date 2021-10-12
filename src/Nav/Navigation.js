import React, { useContext } from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

import {UserContext} from '../UserContext';
import {PrimaryKeyContext} from '../UserContext';
import {StaffStatusContext} from '../UserContext';

import axios from 'axios';

function Navigation() {

  const [token, setToken] = useContext(UserContext);
  const [pk, setPk] = useContext(PrimaryKeyContext);
  const [status, setStatus] = useContext(StaffStatusContext);


  const handleLogout = () => {
    
    axios.post(`http://127.0.0.1:8000/api/v1/rest-auth/logout/`, {
        headers: {
          'Authorization': `Token ${token}`
        }
      }).then((res) => {
        setToken('')
        setPk(null)
        setStatus('')
        console.log(pk);
        console.log(status);
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
      })
  }

  if (token === '') {

    return (
      <Navbar collapseOnSelect expand="lg" className="nav">
        This should be an Image{' '} &nbsp;
        <Navbar.Brand href="/" className="color"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
   
          <Nav>
          
        
        
            <Nav.Link href="#deets" className="color-light"><Link to="/" className="dark-color">HOME </Link></Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="color-light">
              <Link to="/faq" className="dark-color">FAQs</Link>
            </Nav.Link>
            <Nav.Link eventKey={3} href="#memes" className="color-light">
              <Link to="/contact" className="dark-color">CONTACT US</Link>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <span className="mt-2 color-light">Existing Customer?</span> &nbsp;<Link to="/dashboard"><Button variant="primary" size="sm" className="btn-2 mt-1">Click here</Button></Link>&nbsp; &nbsp; &nbsp;
        <Link to="/register"><Button variant="primary" className="btn">Register</Button></Link>
        </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    )

  }

  return (
    <Navbar collapseOnSelect expand="lg" className="nav">
        This should be an Image{' '} &nbsp;
        <Navbar.Brand href="/" className="color"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
   
          <Nav>
          
        
        
            <Nav.Link href="#deets" className="color-light"><Link to="/" className="dark-color">HOME </Link></Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="color-light">
              <Link to="/faq" className="dark-color">FAQs</Link>
            </Nav.Link>
            <Nav.Link eventKey={3} href="#memes" className="color-light">
              <Link to="/contact" className="dark-color">CONTACT US</Link>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
           <Link to="/apply"><Button variant="primary" className="btn" onClick={handleLogout}>Logout</Button></Link>
        </Nav>
        </Navbar.Collapse>
        
      </Navbar>
  )

  
}

export default Navigation
