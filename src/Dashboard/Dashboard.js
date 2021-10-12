import React, { useContext, useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {UserContext} from '../UserContext';
import {PrimaryKeyContext} from '../UserContext';
import {StaffStatusContext} from '../UserContext';
import axios from 'axios';



function Dashboard() {

  const [token, setToken] = useContext(UserContext);
  const [pk, setPk] = useContext(PrimaryKeyContext);
  const [status, setStatus] = useContext(StaffStatusContext);

  const [profile, setProfile] = useState({})

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


  const handleLogin = () => {
    axios.post(`http://127.0.0.1:8000/api/v1/rest-auth/login/`, {
        email: email,
        password: password
      }).then((res) => {
        console.log(res.data);
        setToken(res.data.key)

        var temp_token = res.data.key

        axios.get(`http://127.0.0.1:8000/apis/v1/get_user/${email}`, {
          headers: {
            'Authorization': `Token ${temp_token}`
          }
        }).then((res) => {
          console.log(res.data);
          console.log(res.data.fields['is_staff']);
          setPk(res.data.pk)
          if (res.data.fields['is_staff'] === false) {
            setStatus('regular')
          } else {
            setStatus('admin')
          }
          
        
          console.log(pk);
          console.log(status);
        }).catch(error => {
          console.log(error);
        })
 
      }).catch((error) => {
        console.log(error);
        setServerError('Unable to log in with provided credentials.')
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

 

  useEffect(() => (

    axios.get(`http://127.0.0.1:8000/apis/v1/get_profile/${pk}`, {
        headers: {
          'Authorization': `Token ${token}`
        }
      }).then((res) => {
        setProfile(res.data.fields);
        console.log(res.data.fields);
      }).catch((error) => {
        console.log(error);
      })

  ), [pk, token, status])

  useEffect(() => {

      if (emailError === '' && passwordError === '') {
        setDisable(false)
      } else {
        setDisable(true)
      }


    }, [email, emailError, password, passwordError])


  if (token !== '' && status === 'regular') {
    return (
      <div className="m-5">
        <Container>
          <h2>Hello {profile.first_name}</h2>
          <p>welcome to your dashboard</p>
          <p><strong>Here are some of your details:</strong></p>
          
         <ul>
           <li>{profile.first_name} {profile.last_name}</li>
           <li>{profile.date_of_birth}</li>
           <li>{profile.gender}</li>
           <li>{profile.address}</li>
           <li>{profile.title}</li>
           <li>{profile.phone_number}</li>
           <li>{status}</li>
         </ul>
          
        </Container>
      </div>
    )
  } 


  if (token !== '' && status === 'admin') {
    return (
      <div className="m-5">
        <Container>
          <h2>Welcome Admin</h2>
        
          
        </Container>
      </div>
    )
  } 

  return (
    <div className="m-5">
      <Container>
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

        <Button variant="primary" className="btn-4" onClick={handleLogin} disabled={disable}>Login</Button>
        <Button variant="primary" className="btn-4">forgot password</Button>

      </Container>
      
    </div>
  )
}

export default Dashboard
