import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { createEmployee } from './employeesSlice'
import { states } from '../../constants'

import Form from 'react-bootstrap/Form'
import CustomDatePicker from '../../components/DatePicker'
import Button from 'react-bootstrap/Button'
import Dropdown from '../../components/Dropdown'

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
  const [department, setDepartment] = useState('Sales')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('AL')
  const [zipCode, setZipCode] = useState('')

  const handleSaveEmployee = (e) => {
    e.preventDefault()
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
      <Form id="create-employee" onSubmit={handleSaveEmployee}>
        <Form.Group>
          <Form.Label htmlFor="first-name">First Name</Form.Label>
          <Form.Control
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="last-name">Last Name</Form.Label>
          <Form.Control
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
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
              id="street"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
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
              id="zip-code"
              type="number"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
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
      </Form>
    </section>
  )
}

export default CreateEmployeeView
