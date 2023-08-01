import React, { forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Form from 'react-bootstrap/Form'
import { format } from 'date-fns'

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
      selected={value ? new Date(value) : null}
      onChange={(date) => handler(format(date, 'MM-dd-yyyy'))}
      dateFormat="MM/dd/yyyy"
      customInput={<ExampleCustomInput />}
    />
  )
}

export default CustomDatePicker
