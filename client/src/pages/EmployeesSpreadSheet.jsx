import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonComponent } from '../components/ButtonComponent';
import { ModalComponent } from '../components/Modal';
import { fetchEmployees } from '../features/employees/thunk';

export const EmployeesSpreadSheet = () => {
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		dispatch(fetchEmployees());
	}, []);

	const employees = useSelector((state) => state.employee);
	const isAdmin = useSelector((state) => state.utils.isAdmin);
	return (
		<>
			{/* <div>EmployeesSpreadSheet</div> */}
			<section className=' w-screen h-screen flex flex-col justify-center items-center'>
				<div className='w-full flex flex-row justify-around items-center font-bold text-base'>
					<h4>Nombre</h4>
					<h4>Apellido</h4>
					<h4>Estado</h4>
					<h4>Fecha de registro</h4>
					<h4>Acciones</h4>
				</div>
				{employees
					? employees.employees?.map((employee) => {
							return (
								<div
									key={employee.id}
									className=' w-full flex flex-row justify-evenly p-2 items-center text-base  font-semibold'
								>
									<span>{employee.name}</span>
									<span>{employee.lastName}</span>
									<span>{employee.state}</span>
									<span>{employee.regDate}</span>
									{/* <button onClick={() => setOpenModal(true)}>Editar</button> */}
									<ModalComponent
										show={show}
										handleClose={handleClose}
										handleShow={handleShow}
									/>
									{isAdmin ? (
										<ButtonComponent type='danger' text='Eliminar' />
									) : null}
								</div>
							);
					  })
					: null}
			</section>
		</>
	);
};
