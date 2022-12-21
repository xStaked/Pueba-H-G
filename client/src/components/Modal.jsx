/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
export const ModalComponent = ({ show = false, handleClose, handleShow }) => {
	return (
		<>
			<Button variant='primary' onClick={handleShow}>
				Editar
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Editar Empleado</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label>Nombre</Form.Label>
							<Form.Control type='text' placeholder='Nombre' />
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Label>Apellido</Form.Label>
							<Form.Control type='text' placeholder='Apellido' />
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Label>Estado</Form.Label>
							<Form.Select>
								<option value='1'>Activo</option>
								<option value='0'>Inactivo</option>
							</Form.Select>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Cerrar
					</Button>
					<Button variant='success' onClick={handleClose}>
						Guardar Cambios
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

Modal.propTypes = {
	show: PropTypes.bool.isRequired,
	handleClose: PropTypes.func,
	handleShow: PropTypes.func,
};
