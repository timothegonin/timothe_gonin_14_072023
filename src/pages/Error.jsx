import React from 'react'
import Button from 'react-bootstrap/Button'

const Error = () => {
  return (
    <main className="wrapper">
      <h2>Erreur</h2>
      <span>Redirection timer ...</span>
      <div className="d-grid gap-2">
        <Button variant="outline-primary" size="lg">
          Home
        </Button>
        <Button variant="outline-primary" size="lg">
          Employees list
        </Button>
      </div>
    </main>
  )
}

export default Error
