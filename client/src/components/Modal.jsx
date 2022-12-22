/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { AiFillEdit } from 'react-icons/ai';
export const ModalComponent = ({
	show = false,
	handleOpen,
	handleChange,
	handleEdit,
	userName,
	userLastName,
	userId,
	userType,
}) => {
	return (
		<>
			<Button variant='primary' onClick={() => handleOpen(userId)}>
				<div className='flex flex-row items-center'>
					<AiFillEdit className='mx-1' />
					Editar
				</div>
			</Button>

			<Modal show={show} onHide={() => handleOpen(userId)}>
				<Modal.Header closeButton>
					<Modal.Title>Editar Empleado</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form >
						{userType === 'admin' ? (
							<Form.Group onChange={handleChange} className='mb-3' controlId='formBasicEmail'>
								<Form.Label>Nombre</Form.Label>
								<Form.Control
									name='name'
									type='text'
									placeholder={userName}
									autoComplete='off'
								/>
							</Form.Group>
						) : (
							<Form.Group onChange={handleChange} className='mb-3' controlId='formBasicPassword'>
								<Form.Label>Estado</Form.Label>
								<Form.Select name="state">
									<option >Seleccionar</option>
									<option value='Activo'>Activo</option>
									<option value='Inactivo'>Inactivo</option>
								</Form.Select>
							</Form.Group>
						)}
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={() => handleOpen(userId)}>
						Cerrar
					</Button>
					<Button variant='success' onClick={() => handleEdit(userId)}>
						Guardar Cambios
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

Modal.propTypes = {
	show: PropTypes.bool.isRequired,
	handleOpen: PropTypes.func,
	handleChange: PropTypes.func,
	handleEdit: PropTypes.func,
	userName: PropTypes.string,
	userLastName: PropTypes.string,
	userId: PropTypes.number,
	userType: PropTypes.string,
};
