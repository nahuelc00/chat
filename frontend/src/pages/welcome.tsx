import {useState, type FormEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from '../components/button';

function Welcome() {
	const navigate = useNavigate();
	const [errorUsername, setErrorUsername] = useState<boolean>();

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();

		const {username} = (e.target as HTMLFormElement);

		const isUsernameEmpty = username.value === '';

		if (isUsernameEmpty) {
			setErrorUsername(true);
			return;
		}

		localStorage.setItem('username', username.value as string);

		navigate('/chat');
	}

	return (
		<>
			<main className='welcome'>
				<h1 className='welcome__title'>Welcome</h1>
				<form onSubmit={handleSubmit} className='welcome__form'>
					<label className='welcome__username-label'>Username</label>
					<input className='welcome__username-input' name='username' type='text' />
					<span className='welcome__username-error'>{errorUsername && 'Username empty'}</span>
					<Button text='Init' type='submit'></Button>
				</form>
			</main>
		</>
	);
}

export {Welcome};
