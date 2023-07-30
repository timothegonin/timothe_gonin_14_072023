import { configureStore } from '@reduxjs/toolkit'
import employeesSlice from '../features/createEmployee/employeesSlice'

export const store = configureStore({
  reducer: {
    employees: employeesSlice,
  },
})
