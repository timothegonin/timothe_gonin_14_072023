import React from 'react'

/**
 * A custom hook to manage form fields.
 *
 * This hook returns states and update functions for each form field,
 * as well as a function to reset all fields to their default values.
 *
 * @returns {Object} An object containing form field states and update functions.
 * @property {string} firstName - The first name.
 * @property {function} setFirstName - The function to update the first name.
 * @property {string} lastName - The last name.
 * @property {function} setLastName - The function to update the last name.
 * @property {string} dateOfBirth - The date of birth.
 * @property {function} setDateOfBirth - The function to update the date of birth.
 * @property {string} startDate - The start date.
 * @property {function} setStartDate - The function to update the start date.
 * @property {string} department - The department.
 * @property {function} setDepartment - The function to update the department.
 * @property {string} street - The street.
 * @property {function} setStreet - The function to update the street.
 * @property {string} city - The city.
 * @property {function} setCity - The function to update the city.
 * @property {string} state - The state.
 * @property {function} setState - The function to update the state.
 * @property {string} zipCode - The zip code.
 * @property {function} setZipCode - The function to update the zip code.
 * @property {function} resetFormFields - The function to reset all fields to their default values.
 */

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
