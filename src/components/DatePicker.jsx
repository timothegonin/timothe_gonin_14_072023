import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker.min.css'
import { format } from 'date-fns'

const CustomDatePicker = ({ label, htmlForLabel, value, handler }) => {
  return (
    <React.Fragment>
      <label htmlFor={htmlForLabel}>{label}</label>
      <DatePicker
        selected={value ? new Date(value) : value}
        onChange={(date) => handler(format(date, 'MM-dd-yyyy'))}
        dateFormat="MM/dd/yyyy"
        todayButton="TODAY"
        aria-label={`${label} input`}
        wrapperClassName="d-block"
        className="form-control"
        placeholderText="month/day/year"
      />
    </React.Fragment>
  )
}

export default CustomDatePicker
