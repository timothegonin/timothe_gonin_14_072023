import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  employees: JSON.parse(localStorage.getItem('employees')) || [],
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
  },
})

export const { createEmployee } = employeesSlice.actions
export default employeesSlice.reducer
