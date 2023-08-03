import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { createEmployee } from './employeesSlice'
import { states } from '../../constants'

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
const CreateEmployeeView = () => {
  const dispatch = useDispatch()

  // State for form fields
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [startDate, setStartDate] = useState('')
  const [department, setDepartment] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [validated, setValidated] = useState(false)

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    }

    setValidated(true)

    if (
      validated &&
      firstName &&
      lastName &&
      dateOfBirth &&
      startDate &&
      department &&
      street &&
      city &&
      state &&
      zipCode
    ) {
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
  }

  return (
    <section>
      <Form
        noValidate
        validated={validated}
        id="create-employee"
        onSubmit={handleFormSubmit}
      >
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
        <CustomDatePicker
          label="Date of Birth"
          htmlForLabel="date-of-birth"
          value={dateOfBirth}
          handler={setDateOfBirth}
        />
        <CustomDatePicker
          label="Start Date"
          htmlForLabel="start-date"
          value={startDate}
          handler={setStartDate}
        />

        <Fieldset className="address">
          <legend>Address</legend>

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

        <div className="mt-4 mb-5">
          <Button className="w-100" variant="outline-primary" type="submit">
            Save
          </Button>
        </div>
        <ConfirmationModal />
      </Form>
    </section>
  )
}

export default CreateEmployeeView
