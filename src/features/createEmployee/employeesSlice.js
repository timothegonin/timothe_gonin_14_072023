import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { data } from '../../MOCK/example-data'

const initialState = {
  // currentEmployees: JSON.parse(localStorage.getItem('employees')) || [],
  currentEmployees: [...data],
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
      state.employees.push(newEmployee)
      localStorage.setItem('employees', JSON.stringify(state.employees))
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
