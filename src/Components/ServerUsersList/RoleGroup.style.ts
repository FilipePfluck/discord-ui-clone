import {styled} from '../../../stitches.config';

export const Container = styled('div', {
	margin: '16px 0',
	background: 'inherit',
	'ul': {
		background: 'inherit',
		'li': {
			background: 'inherit'
		}
	},

	'>p': {
		fontSize: 12,
		color: '$unimportant',
		fontWeight: 600,
		marginLeft: 8,
	},
});
