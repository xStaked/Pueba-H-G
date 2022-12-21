import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAdmin: false,
};

export const utilsSlice = createSlice({
	name: 'utils',
	initialState,
	reducers: {
		setIsAdmin: (state, action) => {
			state.isAdmin = action.payload;
		},
	},
});

export const { setIsAdmin } = utilsSlice.actions;

export default utilsSlice.reducer;
