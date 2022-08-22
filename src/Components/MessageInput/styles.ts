import {styled} from '../../../stitches.config';

export const Container = styled('div', {
	width: '100%',
	paddingBottom: 24,
	paddingRight: 16,
	paddingLeft: 16,
	marginTop: 'auto',
});

export const InputContainer = styled('div', {
	height: 44,

	display: 'flex',
	alignItems: 'center',
	borderRadius: 8,
	background: '$grayLighter',
	padding: '0 16px',

	input: {
		margin: '0 16px',
		width: '100%',
		height: '100%',
		background: 'transparent',
		border: 0,
		outline: 0,
		color: '$text',
		fontSize: 16,
		'&::placeholder': {
			color: '$unimportant',
		},
	},

	svg: {
		fontSize: 24,
		color: '$text',
	},
});

export const GifBox = styled('button', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: 20,
	width: 24,
	padding: 4,
	borderRadius: 2,
	background: '$text',

	color: '$grayLighter',
	fontSize: 12,
	fontWeight: 'bold',
});
