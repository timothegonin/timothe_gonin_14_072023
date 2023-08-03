import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  employees: JSON.parse(localStorage.getItem('employees')) || [],
  showConfirmationModal: false,
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
    },
    showConfirmationModal: (state) => {
      state.showConfirmationModal = true
    },
    hideConfirmationModal: (state) => {
      state.showConfirmationModal = false
    },
  },
})

export const { createEmployee, showConfirmationModal, hideConfirmationModal } =
  employeesSlice.actions
export default employeesSlice.reducer
