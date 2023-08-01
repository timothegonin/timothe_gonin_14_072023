import React, { forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Form from 'react-bootstrap/Form'

const CustomDatePicker = ({ label, htmlForLabel, value, handler }) => {
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <Form.Group>
      <Form.Label htmlFor={htmlForLabel}>{label}</Form.Label>
      <Form.Control
        type="text"
        defaultValue={value}
        aria-label={`${label} input`}
        onClick={onClick}
        ref={ref}
        placeholder="month/day/year"
      />
    </Form.Group>
  ))

  return (
    <DatePicker
      selected={value}
      onChange={(date) => handler(date)}
      format={'MM/dd/yy'}
      customInput={<ExampleCustomInput />}
    />
  )
}

export default CustomDatePicker
