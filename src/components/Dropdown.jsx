import React from 'react'

import Form from 'react-bootstrap/Form'

const Dropdown = ({ label, htmlForLabel, value, handler, children }) => {
  return (
    <Form.Group>
      <Form.Label htmlFor={htmlForLabel}>{label}</Form.Label>
      <Form.Select
        defaultValue={value}
        onChange={(e) => handler(e.target.value)}
        aria-label={`${label} dropdown menu`}
      >
        {children}
      </Form.Select>
    </Form.Group>
  )
}

export default Dropdown
