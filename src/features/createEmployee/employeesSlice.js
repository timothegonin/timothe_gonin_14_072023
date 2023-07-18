import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    createEmployee: (state, action) => {
      console.log('createEmployee action')
    },
  },
})

export const { createEmployee } = employeesSlice.actions
export default employeesSlice.reducer
