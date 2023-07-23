import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
  return (
    <header>
      <Navbar bg="light" data-bs-theme="light">
        <Container className="flex-row">
          <Navbar.Brand href="#">
            <h1 className="fs-2">HRnet</h1>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#">View Current Employees</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
