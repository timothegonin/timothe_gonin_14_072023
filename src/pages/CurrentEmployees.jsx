import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import EmployeesTableView from '../features/employeesTable/EmployeesTableView'

const CurrentEmployees = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Current Employees</title>
      </Helmet>
      <main id="employee-div" className="wrapper">
        <h2 className="my-5">Current Employees</h2>
        <EmployeesTableView />
      </main>
    </HelmetProvider>
  )
}

export default CurrentEmployees
