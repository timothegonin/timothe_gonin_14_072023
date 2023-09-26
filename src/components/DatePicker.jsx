import React from 'react'
import Form from 'react-bootstrap/Form'

/**
 * The `DatePicker` component represents a date selection input field.
 *
 * @component
 * @param {object} props - The component's properties.
 * @param {string} props.label - The label for the date field.
 * @param {string} props.htmlForLabel - The ID associated with the date field.
 * @param {string} props.value - The current value of the date field.
 * @param {function} props.handler - The callback function for handling date changes.
 * @returns {JSX.Element} - The rendered DatePicker component.
 */
const DatePicker = ({ label, htmlForLabel, value, handler }) => {
  return (
    <Form.Group>
      <Form.Label htmlFor={htmlForLabel}>{label}</Form.Label>
      <Form.Control
        required
        type="date"
        id={htmlForLabel}
        value={value}
        onChange={(e) => handler(e.target.value)}
        aria-label={`${label} input`}
      />
      <Form.Control.Feedback type="invalid">
        Please choose a {label.toLowerCase()}.
      </Form.Control.Feedback>
    </Form.Group>
  )
}

export default DatePicker
