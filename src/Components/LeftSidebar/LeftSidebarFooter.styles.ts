import {styled} from '../../../stitches.config';

export const Container = styled('footer', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	height: 52,
	position: 'absolute',
	bottom: 0,
	left: 0,
	right: 0,
	padding: '0 8px',
	background: '$grayDarker',
});

export const NameAndImageContainer = styled('div', {
	display: 'flex',
	alignItems: 'center',
	background: 'inherit'
});

export const NameAndTag = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	marginLeft: 8,

	p: {
		fontSize: 14,
		color: '#FFF',
		fontWeight: 'bold',
	},

	span: {
		fontSize: 12,
		color: '$text',
	},
});

export const ConfigurationButtons = styled('div', {
	display: 'flex',
	alignItems: 'center',
});

export const IconButton = styled('button', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'relative',

	background: 'transparent',
	height: 32,
	width: 32,
	borderRadius: 4,
	transition: '0.2s',

	'&:hover': {
		background: '$grayNeutral',
	},
});

export const DiagonalLine = styled('div', {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'rotate(-45deg) translate(-6px, -10px)',

	width: 24,
	height: 6,
	borderRadius: 2,
	border: '2px solid $grayDarker',
	background: '$red',
});
