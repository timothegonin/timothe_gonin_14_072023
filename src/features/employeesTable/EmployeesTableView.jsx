import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Table from 'react-bootstrap/Table'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const StyledTable = styled(Table)`
  th,
  td {
    vertical-align: middle;
  }
`

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const EmployeesTableView = () => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || []
    setEmployees(storedEmployees)
  }, [])

  return (
    <StyledTable
      id="employee-table"
      className="display"
      striped
      bordered
      hover
      responsive
    >
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Start Date</th>
          <th>Department</th>
          <th>Date of Birth</th>
          <th>Street</th>
          <th>City</th>
          <th>State</th>
          <th>Zip Code</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.startDate}</td>
            <td>{employee.department}</td>
            <td>{employee.dateOfBirth}</td>
            <td>{employee.street}</td>
            <td>{employee.city}</td>
            <td>{employee.state}</td>
            <td>{employee.zipCode}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
}

export default EmployeesTableView
