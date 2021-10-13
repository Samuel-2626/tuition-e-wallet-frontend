import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import axios from 'axios';

import {Redirect} from 'react-router-dom'






function Register() {




  const [redirect, setRedirect] = useState(false)

  
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('This field is required')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('This field is required')
  const [disable, setDisable] = useState(true)
  const [serverError, setServerError] = useState('')


  function ValidateEmail(mail) 
  {
    let re =  /\S+@\S+\.\S+/;
    return re.test(mail);
  }

  function checkPassword(str)
  {
    // at least one number, one lowercase and one uppercase letter
    // at least eight characters
    let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
    return re.test(str);
  }


  const handleRegister = () => {
    axios.post(`https://tuition-e-wallet-backend.herokuapp.com/api/v1/rest-auth/registration/`, {
        email: email,
        password1: password,
        password2: password
      }).then((res) => {

        var temp_token = res.data.key

        axios.post(`https://tuition-e-wallet-backend.herokuapp.com/api/v1/rest-auth/logout/`, {
        headers: {
          'Authorization': `Token ${temp_token}`
        }
      }).then((res) => {
        setRedirect(true)
        }).catch(error => {
        })
 
      }).catch((error) => {
        setServerError(`${error.response.data.email[0]}`)
      })

  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
    if  (ValidateEmail(e.target.value) === false) {
       setEmailError('You have entered an invalid email address!')
     }
    else {
      setEmailError('')
      }
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 10) {
      setPasswordError('Password can\'t be less than 10 characters')
    } else if (checkPassword(e.target.value) === false) {
      setPasswordError('Password must have at least one number, one lowercase and one uppercase letter')
    }
    else {
      setPasswordError('')
    }

  }

  useEffect(() => {

    if (emailError === '' && passwordError === '') {
      setDisable(false)
    } else {
      setDisable(true)
    }


  }, [email, emailError, password, passwordError])

  if (redirect) {
    return (
      <Redirect to="/dashboard" />
    )
  }



  return (
    <div className="apply">

    <div className="p-5">
      <Container>
        <Row>
          <Col lg={4}>
            <h2 className="orange-text welcome"><strong>Welcome. Get a loan in 30 minutes!</strong></h2>
            <p className="grey-text">
            Tuition E-Wallet is a fast- growing licensed micro lender in Nigeria. Based in Lagos, Nigeria. PCSL provides personal loans to salaried workers across the country through its innovative technology platform (PennyTrust TM). Today we help low to middle income earners gain quick, convenient, and secure access to loans that they desperately need.
            </p>
          </Col>

          <Col lg={8} className="apply_form p-3">
            <div className="text-center">

            <h1 className="text-center"><strong>Login</strong></h1>
        <div className="error-background">{serverError}</div>

        <Form autoComplete="off" className="mt-3">
          <Container>
            <Row>
            <Col lg={12}>
    
          <Form.Group controlId="">
            <Form.Control type="email" placeholder="email"  onChange={handleEmail} value={email} />
            <Form.Text className="text-muted">
            <small className="error">{emailError}</small>
            </Form.Text>
          </Form.Group>
          </Col>
          <Col lg={12}>
    
          <Form.Group controlId="">
            <Form.Control type="password" placeholder="password" onChange={handlePassword} value={password} />
            <Form.Text className="text-muted">
            <small className="error">{passwordError}</small>
            </Form.Text>
          </Form.Group>
          </Col>
        
    
          </Row>
          </Container>
         
        </Form>

        <Button variant="primary" className="btn-4" onClick={handleRegister} disabled={disable}>Register</Button>

             
          </div>
          </Col>
    
        
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default Register
