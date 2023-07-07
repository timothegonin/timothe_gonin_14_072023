import React from 'react'
import Header from '../components/Header'
import CreateEmployeeView from '../features/createEmployee/CreateEmployeeView'

const CreateEmployee = () => {
  return (
    <React.Fragment>
      <Header />
      <CreateEmployeeView />
    </React.Fragment>
  )
}

export default CreateEmployee
