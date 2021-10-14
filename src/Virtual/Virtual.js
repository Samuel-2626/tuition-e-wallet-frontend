import React, { useState } from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from 'axios';



function Virtual() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');
    const [frequency, setFrequency] = useState('');
    const [min_amount, setMinAmount] = useState('');
    const [max_amount, setMaxAmount] = useState('');


    const handleProcess = () => {
        axios.post(`https://fsi.ng/api/woven/vnubans/create_customer`, {
            headers: {
                'Content-Type': 'application/json', 
                'api_secret': 'vb_ls_bfac75fe54a952841971b6918d06aeb2659523dc92d6',
                'sandbox-key': '0b00aH9F1fyWuIvythpirtiJMEDrjewp1633967007'
              },
              customer_reference: "cusomer-001",
              name: name,
              email: email,
              mobile_number: number,
              expires_on: date,
              use_frequency: frequency,
              min_amount: min_amount,
              max_amount: max_amount,
      }).then((res) => {
          console.log(res);
      }).error((err) => {
          console.log(err);
      })
      }

    const handleNameChange = (e) => {
        setName(e.target.value)
      }
      const handleEmail = (e) => {
        setEmail(e.target.value)
      }
      const handleNumber = (e) => {
        setNumber(e.target.value)
      }
      const handleDate = (e) => {
        setDate(e.target.value)
      }
      const handleFrequencyChange = (e) => {
        setFrequency(e.target.value)
      }
      const handleMinAmountChange = (e) => {
        setMinAmount(e.target.value)
      }
      const handleMaxAmountChange = (e) => {
        setMaxAmount(e.target.value)
      }





    return (
        <div>
            <hr />
            <h3 className='text-center'>Step 1 - Submission</h3>
            <hr />
            <Container>
            <Form.Group controlId="">
              <Form.Control type="text" placeholder="Full Name" value={name} onChange={handleNameChange}  />
              <Form.Text className="text-muted">
 
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="">
              <Form.Control type="eamil" placeholder="Email" value={email} onChange={handleEmail} />
              <Form.Text className="text-muted">
   
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="">
              <Form.Control type="text" placeholder="Phone Number" value={number} onChange={handleNumber} />
              <Form.Text className="text-muted">
      
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="">
              <input type="date" id="start" name="trip-start"
       placeholder="Expires On"
       min="1960-12-31" max="2000-12-31" className="form-control" required value={date} onChange={handleDate}></input>
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="">
              <Form.Control type="number" min="0" max="10" placeholder="Use Frequency" value={frequency} onChange={handleFrequencyChange}  />
              <Form.Text className="text-muted">
  
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="">
              <Form.Control type="text" placeholder="Min Amount" value={min_amount} onChange={handleMinAmountChange}  />
              <Form.Text className="text-muted">

              </Form.Text>
            </Form.Group>

            <Form.Group controlId="">
              <Form.Control type="text" placeholder="Max Amount" value={max_amount} onChange={handleMaxAmountChange}  />
              <Form.Text className="text-muted">

              </Form.Text>
            </Form.Group>

            <Button variant="primary" className="btn-4" onClick={handleProcess}>Process</Button>
            </Container>
            
        </div>
    )
}

export default Virtual
