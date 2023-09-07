import React, { useState, useEffect } from 'react'
// import styled from 'styled-components'
// import Table from 'react-bootstrap/Table'
import { SortableTable } from 'sortable-table-react'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
// const StyledTable = styled(Table)`
//   th,
//   td {
//     vertical-align: middle;
//   }
// `

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
    <p>Loading...</p>
  ) : (
    <SortableTable data={employees} tableHeads={tableHeadsList} />
  )
}

export default EmployeesTableView
