import React from 'react'
import EmployeesTableView from '../features/employeesTable/EmployeesTableView'

const CurrentEmployees = () => {
  return (
    <main id="employee-div" className="container">
      <h2 className="mt-5 mb-5">Current Employees</h2>
      <EmployeesTableView />
    </main>
  )
}

export default CurrentEmployees
