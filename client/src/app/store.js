import { configureStore } from '@reduxjs/toolkit';
import EmployeeReducer from '../features/employees/EmployeeSlice';
import UtilsReducer from '../features/utils/UtilsSlice';
export const store = configureStore({
	reducer: {
		employee: EmployeeReducer,
		utils: UtilsReducer,
	},
});
