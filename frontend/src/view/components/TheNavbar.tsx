import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

function TheNavbar(): React.JSX.Element {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Hung-Udacity</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/list-product">Home</Nav.Link>
            <Nav.Link href="/create-product">Create</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control as="input" placeholder='Search ...' />
        </Form.Group>
      </Container>
    </Navbar>
  );
}

export default TheNavbar;