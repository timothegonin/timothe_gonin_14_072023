import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employees: JSON.parse(localStorage.getItem('employees')) || [],
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    createEmployee: (state, action) => {
      state.employees.push(action.payload)
      localStorage.setItem('employees', JSON.stringify(state.employees))
    },
  },
})

export const { createEmployee } = employeesSlice.actions
export default employeesSlice.reducer
