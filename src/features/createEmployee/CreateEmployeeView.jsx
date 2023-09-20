import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { createEmployee } from './employeesSlice'
import { states } from '../../constants'
import useFormFields from '../../hooks/useFormFields'

import Form from 'react-bootstrap/Form'
import CustomDatePicker from '../../components/DatePicker'
import Button from 'react-bootstrap/Button'
import Dropdown from '../../components/Dropdown'
import ConfirmationModal from '../../components/ConfirmationModal'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Fieldset = styled.fieldset`
  margin: 16px 0 5px;
  padding: 0px 12px 36px;
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;

  legend {
    float: none;
    clear: both;
    width: auto;
    margin: 0;
  }
`

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */

/**
 * The `CreateEmployeeView` component represents the view for creating a new employee.
 *
 * This component includes a form with various fields for entering employee information,
 * such as first name, last name, date of birth, and address details.
 *
 * @component
 * @returns {JSX.Element} The rendered CreateEmployeeView component.
 */

const CreateEmployeeView = () => {
  const dispatch = useDispatch()
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    dateOfBirth,
    setDateOfBirth,
    startDate,
    setStartDate,
    department,
    setDepartment,
    street,
    setStreet,
    city,
    setCity,
    state,
    setState,
    zipCode,
    setZipCode,
    resetFormFields,
  } = useFormFields()

  const [validated, setValidated] = useState(false)
  const formRef = useRef(null)

  const handleConfirmationModalClose = () => {
    setValidated(false)
    resetFormFields()
    formRef.current.reset()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
      setValidated(true)
      return
    }

    const employee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      department,
      street,
      city,
      state,
      zipCode,
    }
    dispatch(createEmployee(employee))
  }

  return (
    <section>
      <Form
        ref={formRef}
        noValidate
        validated={validated}
        id="create-employee"
        onSubmit={handleSubmit}
      >
        {/* First Name */}
        <Form.Group>
          <Form.Label htmlFor="first-name">First Name</Form.Label>
          <Form.Control
            required
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please choose a first name.
          </Form.Control.Feedback>
        </Form.Group>
        {/* Last Name */}
        <Form.Group>
          <Form.Label htmlFor="last-name">Last Name</Form.Label>
          <Form.Control
            required
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please choose a last name.
          </Form.Control.Feedback>
        </Form.Group>
        {/* Date of Birth */}
        <CustomDatePicker
          label="Date of Birth"
          htmlForLabel="date-of-birth"
          value={dateOfBirth}
          handler={setDateOfBirth}
        />
        {/* Start Date */}
        <CustomDatePicker
          label="Start Date"
          htmlForLabel="start-date"
          value={startDate}
          handler={setStartDate}
        />
        {/* Address */}
        <Fieldset className="address">
          <legend>Address</legend>
          {/* Street */}
          <Form.Group>
            <Form.Label>Street</Form.Label>
            <Form.Control
              required
              id="street"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a street.
            </Form.Control.Feedback>
          </Form.Group>
          {/* City */}
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              required
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a city.
            </Form.Control.Feedback>
          </Form.Group>
          {/* State */}
          <Dropdown
            label="State"
            htmlForLabel="state"
            value={department}
            handler={setState}
          >
            {states.map((state, index) => (
              <option
                key={`${state.abbreviation}-${index}`}
                value={state.abbreviation}
              >
                {state.name}
              </option>
            ))}
          </Dropdown>
          {/* Zip Code */}
          <Form.Group>
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              required
              id="zip-code"
              type="number"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a zip code.
            </Form.Control.Feedback>
          </Form.Group>
        </Fieldset>
        {/* Department */}
        <Dropdown
          label="Departement"
          htmlForLabel="departement"
          value={department}
          handler={setDepartment}
        >
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Legal">Legal</option>
        </Dropdown>
        {/* Submit Button */}
        <div className="mt-4 mb-5">
          <Button className="w-100" variant="outline-primary" type="submit">
            Save
          </Button>
        </div>
        {/* Confirmation Modal */}
        <ConfirmationModal onClose={handleConfirmationModalClose} />
      </Form>
    </section>
  )
}

export default CreateEmployeeView
