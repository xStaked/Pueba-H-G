import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsAdmin } from '../features/utils/UtilsSlice';
import { ButtonComponent } from '../components/ButtonComponent';
import { FadeIn } from 'react-slide-fade-in';

export const RolSelector = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick = (admin) => {
		navigate('/employees');
		dispatch(setIsAdmin(admin));
	};

	return (
		<section className='h-screen flex justify-center items-center'>
			<FadeIn
				from='bottom'
				positionOffset={400}
				triggerOffset={200}
				delayInMilliseconds={400}
			>
				<section className='flex flex-col items-center'>
					<h1 className='my-8 font-semibold'>Selecciona tu rol</h1>
					<div className='flex flex-row justify-evenly w-[300px]'>
						<div>
							<ButtonComponent
								onClick={() => handleClick(true)}
								type='success'
								text='Administrador'
							/>
						</div>
						<div>
							<ButtonComponent
								type='success'
								text='Empleado'
								onClick={() => handleClick(false)}
							/>
						</div>
					</div>
				</section>
			</FadeIn>
		</section>
	);
};
