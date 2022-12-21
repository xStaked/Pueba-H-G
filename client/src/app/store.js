import { configureStore } from '@reduxjs/toolkit';
import EmployeeReducer from '../features/employees/EmployeeSlice';
export const store = configureStore({
	reducer: {
		employee: EmployeeReducer,
	},
});
