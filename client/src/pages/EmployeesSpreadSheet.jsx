import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonComponent } from '../components/ButtonComponent';
import { ModalComponent } from '../components/Modal';
import {
	fetchEmployees,
	editEmployees,
	deleteEmployees,
} from '../features/employees/thunk';
import { editEmployeeOpenModal } from '../features/employees/EmployeeSlice';
import Swal from 'sweetalert2';
export const EmployeesSpreadSheet = () => {
	const employees = useSelector((state) => state.employee);
	const isAdmin = useSelector((state) => state.utils.isAdmin);
	const [data, setData] = useState({});
	const dispatch = useDispatch();

	const handleOpen = (id) => {
		dispatch(editEmployeeOpenModal(id));
	};

	const handleEdit = (id) => {
		dispatch(editEmployeeOpenModal(id));
		const edit = dispatch(editEmployees(id, data));
		dispatch(fetchEmployees());
		edit
			? Swal.fire('¡Editado!', 'Usuario editado', 'success')
			: Swal.fire('¡Error!', 'No se pudo editar el usuario', 'error');
	};

	useEffect(() => {
		dispatch(fetchEmployees());
	}, []);

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
			type: isAdmin ? 'admin' : 'employee',
		});
	};

	const handleDelete = (id) => {
		const deleteEmployee = dispatch(deleteEmployees(id));
		dispatch(fetchEmployees());
		deleteEmployee
			? Swal.fire('¡Eliminado!', 'Usuario eliminado', 'success')
			: Swal.fire('¡Error!', 'No se pudo eliminar el usuario', 'error');
	};

	return (
		<>
			<section className=' text-white w-screen h-screen flex flex-col justify-center items-center'>
				<h2 className='max-md:mt-[400px] top-5 font-bold'>
					Todos los empleados
				</h2>
				{employees
					? employees.employees
							?.filter((employee) => employee.state !== 'Eliminado')
							.map((employee, ind) => {
								return (
									<div
										key={employee.id}
										className={`w-[90%] h-full flex flex-row justify-evenly ${
											ind === 0 ? 'mt-[200px]' : null
										} border rounded-lg m-2 p-2 items-center text-base  font-semibold max-md:flex-wrap max-md:flex-col  max-md:h-[500px]`}
									>
										<div className='w-full flex  justify-around items-center font-bold text-base max-md:flex-col max-md:text-center'>
											<div>
												<h4 className='font-semibold'>Nombre</h4>
												<div className='flex flex-row'>
													<img src='src/assets/Avatar.png' alt='userImage' />
													<span className='mx-2'>{employee.name}</span>
												</div>
											</div>{' '}
											<div>
												<h4 className='font-semibold'>Apellido</h4>
												<span>{employee.lastName}</span>
											</div>{' '}
											<div>
												<h4 className='font-semibold'>Estado</h4>
												<span>{employee.state}</span>
											</div>{' '}
											<div>
												<h4 className='font-semibold'>Fecha de registro</h4>
												<span>{employee.regDate}</span>
											</div>{' '}
											<div className=''>
												<h4 className='font-semibold'>Acciones</h4>
												<div className='w-[250px] flex flex-row justify-around items-center'>
													<ModalComponent
														show={employee.openModal === 1}
														handleOpen={handleOpen}
														handleChange={handleChange}
														handleEdit={handleEdit}
														userName={employee.name}
														userLastName={employee.lastName}
														userId={employee.id}
														userType={isAdmin ? 'admin' : 'employee'}
													/>
													{isAdmin ? (
														<ButtonComponent
															onClick={() => handleDelete(employee.id)}
															type='danger'
															text='Eliminar'
														/>
													) : null}
												</div>{' '}
											</div>
										</div>
									</div>
								);
							})
					: null}
			</section>
		</>
	);
};
