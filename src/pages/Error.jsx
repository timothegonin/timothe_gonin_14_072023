import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'

const Error = () => {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (countdown === 0) {
      navigate('/')
    }
  }, [countdown, navigate])

  return (
    <main className="wrapper">
      <h2>Erreur</h2>
      <span>Redirection timer ... {countdown}</span>
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
