type Props = {
	text: string;
	type: 'button' | 'submit' | 'reset';
};

function Button({text, type}: Props) {
	return (
		<button className='button' type={type}>{text}</button>
	);
}

export {Button};
