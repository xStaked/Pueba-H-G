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
