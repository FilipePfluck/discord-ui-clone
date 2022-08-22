import {styled} from '../../../stitches.config';

export const Container = styled('button', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	background: '$grayNeutral',
	height: 48,
	width: 48,
	borderRadius: '50%',
	'&:hover': {
		borderRadius: 16,
	},
	transition: '0.2s',
	marginBottom: 8,

	img: {
		height: '100%',
		objectFit: 'cover',
		borderRadius: 'inherit',
	},

	variants: {
		type: {
			main: {
				backgroundColor: '$grayDark',
				'&:hover': {
					backgroundColor: '$primary',
				},
			},
			default: {},
		},
	},
});
