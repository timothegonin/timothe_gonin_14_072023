import React, { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { SortableTable } from 'sortable-table-react'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const EmployeesTableView = () => {
  const [employees, setEmployees] = useState([])
  const tableHeadsList = [
    'First Name',
    'Last Name',
    'Start Date',
    'Department',
    'Date of Birth',
    'Street',
    'City',
    'State',
    'Zip Code',
  ]

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || []
    setEmployees(storedEmployees)
  }, [])

  return employees.length === 0 ? (
    <Spinner animation="border" role="status" variant="primary">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <SortableTable data={employees} tableHeads={tableHeadsList} />
  )
}

export default EmployeesTableView
