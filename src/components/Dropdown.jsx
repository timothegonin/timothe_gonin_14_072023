import React from 'react'

import Form from 'react-bootstrap/Form'

const Dropdown = ({ value, handler, children }) => {
  return (
    <Form.Group>
      <Form.Label htmlFor="department">Department</Form.Label>
      <Form.Select
        name="department"
        id="department"
        defaultValue={value}
        onChange={(e) => handler(e.target.value)}
      >
        {children}
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
        <option value="Engineering">Engineering</option>
        <option value="Human Resources">Human Resources</option>
        <option value="Legal">Legal</option>
      </Form.Select>
    </Form.Group>
  )
}

export default Dropdown
