import axios from 'axios';
import { getEmployees } from './EmployeeSlice';

export const fetchEmployees = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get('http://localhost:4000/api/employees');
			dispatch(getEmployees(response.data));
			return true;
		} catch (error) {
			console.log(error);
		}
	};
};

export const editEmployees = (id,data) => {
	return async (dispatch) => {
		try {
			await axios.put(`http://localhost:4000/api/employees/${id}`, data);
			dispatch(fetchEmployees());
			return true;
		} catch (error) {
			console.log(error);
		}
	};
}

export const deleteEmployees = (id) => {
	return async (dispatch) => {
		try {
			await axios.delete(`http://localhost:4000/api/employees/${id}`);
			dispatch(fetchEmployees());
			return true;
		} catch (error) {
			console.log(error);
		}
	};
}