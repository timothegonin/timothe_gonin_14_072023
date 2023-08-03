import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  employees: JSON.parse(localStorage.getItem('employees')) || [],
  displayConfirmationModal: false,
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
      state.displayConfirmationModal = true
    },
    hideConfirmationModal: (state) => {
      state.displayConfirmationModal = false
    },
  },
})

export const { createEmployee, showConfirmationModal, hideConfirmationModal } =
  employeesSlice.actions
export default employeesSlice.reducer
