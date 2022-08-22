import {styled} from '../../../stitches.config';

export const Container = styled('label', {
	display: 'flex',
	alignItems: 'center',
	height: 24,
	width: 144,
	padding: 4,
	borderRadius: 4,
	backgroundColor: '$grayExtraDark',
	transition: '0.2s',

	input: {
		background: 'transparent',
		width: '100%',
		border: 0,
		outline: 0,
		color: '$text',
		'&::placeholder': {
			color: '$unimportant',
		},
	},

	'&:focus-within': {
		width: 240,
	},
});
