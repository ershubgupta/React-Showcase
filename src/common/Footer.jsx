import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';

export default function Footer() {
  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        
      >
        <Navbar.Text>Shubham Gupta</Navbar.Text>
        <Nav className="ml-auto">
          <Navbar.Text>Let's Connect over:</Navbar.Text>
          <Nav.Link
            href="https://www.linkedin.com/in/ershubgupta/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Nav.Link>
          <Nav.Link href="mailto:ershubgupta@gmail.com">Email</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
