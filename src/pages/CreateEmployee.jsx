import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import CreateEmployeeView from '../features/createEmployee/CreateEmployeeView'

const CreateEmployee = () => {
  return (
    <HelmetProvider>
      <main className="wrapper">
        <Helmet>
          <title>Home - Create Employee</title>
        </Helmet>
        <h2 className="my-5">CreateEmployee</h2>
        <CreateEmployeeView />
      </main>
    </HelmetProvider>
  )
}

export default CreateEmployee
