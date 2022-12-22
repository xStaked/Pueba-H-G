import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const employeeSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {
		getEmployees: (state, action) => {
			// const filterEmployes = state?.employee?.employees?.filter( (employee) => employee.status === 'Activo' || employee.status === 'Inactivo' );
			// console.log(filterEmployes);
			state.employees = action.payload;
		},
		editEmployeeOpenModal: (state, action) => {
			const employee = state.employees.find(
				(employee) => employee.id === action.payload
			);
			employee.openModal = employee.openModal === 1 ? 0 : 1;
		},
	},
});

export const { getEmployees, editEmployeeOpenModal } = employeeSlice.actions;

export default employeeSlice.reducer;
