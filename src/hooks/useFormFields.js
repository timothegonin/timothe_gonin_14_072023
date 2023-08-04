import React from 'react'

const useFormFields = () => {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [dateOfBirth, setDateOfBirth] = React.useState('')
  const [startDate, setStartDate] = React.useState('')
  const [department, setDepartment] = React.useState('')
  const [street, setStreet] = React.useState('')
  const [city, setCity] = React.useState('')
  const [state, setState] = React.useState('')
  const [zipCode, setZipCode] = React.useState('')

  const resetFormFields = () => {
    setFirstName('')
    setLastName('')
    setDateOfBirth('')
    setStartDate('')
    setDepartment('')
    setStreet('')
    setCity('')
    setState('')
    setZipCode('')
  }

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    dateOfBirth,
    setDateOfBirth,
    startDate,
    setStartDate,
    department,
    setDepartment,
    street,
    setStreet,
    city,
    setCity,
    state,
    setState,
    zipCode,
    setZipCode,
    resetFormFields,
  }
}

export default useFormFields
