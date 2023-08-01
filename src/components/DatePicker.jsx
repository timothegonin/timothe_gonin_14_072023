import React from 'react'
import Form from 'react-bootstrap/Form'

const DatePicker = ({ label, htmlForLabel, value, handler }) => {
  return (
    <Form.Group>
      <Form.Label htmlFor={htmlForLabel}>{label}</Form.Label>
      <Form.Control
        type="date"
        value={value}
        aria-label={`${label} input`}
        onChange={(e) => handler(e.target.value)}
      />
    </Form.Group>
  )
}

export default DatePicker
