import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const employeeSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {
		getEmployees: (state, action) => {
			state.employees = action.payload;
		},
	},
});

export const { getEmployees } = employeeSlice.actions;

export default employeeSlice.reducer;
