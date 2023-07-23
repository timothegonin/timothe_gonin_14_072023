import React from 'react'
import Header from '../components/Header'
import CreateEmployeeView from '../features/createEmployee/CreateEmployeeView'

const CreateEmployee = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <CreateEmployeeView />
      </main>
    </React.Fragment>
  )
}

export default CreateEmployee
