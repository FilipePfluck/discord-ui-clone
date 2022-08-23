import {styled} from '../../../stitches.config';

export const Container = styled('div', {
	width: 240,
	background: '$grayDark',
	height: '100%',
	maxHeight: '100%',
	marginLeft: 'auto',
	paddingRight: 2,
	paddingBottom: 2,
	paddingTop: 2,
});

export const Scroll = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	padding: '8px',
	background: 'inherit',

	width: '100%',
	height: '100%',
	maxHeight: '100%',
	overflowY: 'auto',
	'&::-webkit-scrollbar': {
		width: 4,
	},
	'&::-webkit-scrollbar-track': {
		background: 'transparent',
		margin: 1,
	},
	'&::-webkit-scrollbar-thumb': {
		background: '$grayExtraDark',
		borderRadius: 4,
	},
});
