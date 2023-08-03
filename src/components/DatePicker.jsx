import React, { forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker.min.css'
import Form from 'react-bootstrap/Form'
import { format } from 'date-fns'

const CustomDatePicker = ({ label, htmlForLabel, value, handler }) => {
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <Form.Group>
      <Form.Label htmlFor={htmlForLabel}>{label}</Form.Label>
      <Form.Control
        required
        type="text"
        defaultValue={value}
        onClick={onClick}
        ref={ref}
        placeholder="month/day/year"
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        Please choose a {label.toLowerCase()}.
      </Form.Control.Feedback>
    </Form.Group>
  ))
  return (
    <React.Fragment>
      <DatePicker
        selected={value ? new Date(value) : value}
        onChange={(date) => handler(format(date, 'MM-dd-yyyy'))}
        dateFormat="MM/dd/yyyy"
        todayButton="TODAY"
        aria-label={`${label} input`}
        wrapperClassName="d-block"
        customInput={<ExampleCustomInput />}
      />
    </React.Fragment>
  )
}

export default CustomDatePicker
