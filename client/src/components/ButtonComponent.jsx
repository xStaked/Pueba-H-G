import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { AiFillDelete } from 'react-icons/ai';
import { MdOutlineDownloadDone } from 'react-icons/md';
// eslint-disable-next-line react/prop-types
export const ButtonComponent = ({ onClick, type = 'success', text }) => {
	return (
		<>
			<Button variant={type} onClick={onClick}>
				<div className='flex flex-row items-center'>
					{type === 'danger' ? <AiFillDelete className='mx-1' /> : null}
          {type === 'success' ? <MdOutlineDownloadDone className='mx-1' /> : null}
					<span>{text} </span>
				</div>
			</Button>
		</>
	);
};

Button.propTypes = {
	onClick: PropTypes.func,
	type: PropTypes.string,
	text: PropTypes.string,
};
