import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
// import { data } from '../../MOCK/example-data'

/**
 * Redux module for managing employee data and confirmation dialog display.
 * @module employeesSlice
 */

const initialState = {
  /**
   * List of currently registered employees.
   * @type {Array<Object>}
   */
  currentEmployees: JSON.parse(localStorage.getItem('employees')) || [],
  // currentEmployees: [...data],
  /**
   * Indicates whether the confirmation dialog should be displayed.
   * @type {boolean}
   */
  confirmationModalDisplayed: false,
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    createEmployee: (state, action) => {
      const newEmployee = {
        id: uuidv4(),
        ...action.payload,
      }
      state.currentEmployees.push(newEmployee)
      localStorage.setItem('employees', JSON.stringify(state.currentEmployees))
      employeesSlice.caseReducers.showConfirmationModal(state, action)
    },
    showConfirmationModal: (state) => {
      state.confirmationModalDisplayed = true
    },
    hideConfirmationModal: (state) => {
      state.confirmationModalDisplayed = false
    },
  },
})

export const { createEmployee, showConfirmationModal, hideConfirmationModal } =
  employeesSlice.actions
export default employeesSlice.reducer
