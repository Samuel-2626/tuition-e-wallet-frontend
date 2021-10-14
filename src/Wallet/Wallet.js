import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Wallet() {
    return (
        <Jumbotron className="jumbotron text-white">
        <Container>
            <h2><strong>Welcome to Your Tuition E-Wallet</strong></h2>

            <h5>Step 1</h5>

            <Link to="/create"><Button variant="primary" size="lg">Create A Virtual Account</Button></Link>
            </Container>
        </Jumbotron>

    )
}

export default Wallet
