import { EmployeesSpreadSheet } from './pages/EmployeesSpreadSheet';
import { RolSelector } from './pages/RolSelector';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<RolSelector />} />
				<Route path='/employees' element={<EmployeesSpreadSheet />} />
			</Routes>
		</BrowserRouter>
	);
};
