import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'

const Error = () => {
  return (
    <main className="wrapper">
      <h2>Erreur</h2>
      <span>Redirection timer ...</span>
      <div className="d-grid gap-2">
        <LinkContainer to="/">
          <Button variant="outline-primary" size="lg">
            Home
          </Button>
        </LinkContainer>

        <LinkContainer to="/employees">
          <Button variant="outline-primary" size="lg">
            Employees list
          </Button>
        </LinkContainer>
      </div>
    </main>
  )
}

export default Error
