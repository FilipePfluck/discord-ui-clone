import {styled} from '../../../stitches.config';

export const Container = styled('ul', {
	width: '100%',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	paddingBottom: '16px',
});

export const ScrollContainer = styled('div', {
	paddingBottom: '16px',
	width: '100%',
	height: '100%',
	maxHeight: '100%',
	display: 'flex',
	overflowY: 'auto',
	'&::-webkit-scrollbar': {
		width: 16,
		border: '2px solid transparent',
	},
	'&::-webkit-scrollbar-track': {
		background: '$grayDark',
		borderRadius: 16,
		border: '4px solid $grayNeutral',
	},
	'&::-webkit-scrollbar-thumb': {
		background: '$grayDarker',
		borderRadius: 16,
		border: '4px solid $grayNeutral',
		borderTop: '4px solid $grayDark',
		borderBottom: '4px solid $grayDark',
	},
});
