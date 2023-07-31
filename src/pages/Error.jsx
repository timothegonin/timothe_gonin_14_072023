import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

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
    <main className="wrapper px-3">
      <h2 className="my-5">Error</h2>
      <p>Select your destination :</p>
      <div className="d-grid gap-3 mb-5">
        <LinkContainer to="/">
          <Button variant="outline-primary">Home</Button>
        </LinkContainer>

        <LinkContainer to="/employees">
          <Button variant="outline-primary">Employees list</Button>
        </LinkContainer>
      </div>
      <Stack gap={1} className="text-center">
        <p className="mb-0">
          Or you will be automatically redirected to the home page in :
        </p>
        <p>
          <span className="fs-5 fw-bold">{countdown} </span>
          seconds.
        </p>
      </Stack>
    </main>
  )
}

export default Error
