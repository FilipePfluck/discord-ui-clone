import {styled} from '../../../stitches.config';

export const Container = styled('button', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '6px 8px',
	marginBottom: 2,
	borderRadius: 4,
	color: '$unimportant',
	fontWeight: 500,

	variants: {
		isSelected: {
			true: {
				background: '$grayLighter',
				p: {
					filter: 'brightness(1.4)',
				},
			},
			false: {
				background: 'transparent',
				'&:hover': {
					background: '$grayLight',
					p: {
						filter: 'brightness(1.4)',
					},
				},
			},
		},
	},
});

export const LeftContent = styled('div', {
	display: 'flex',
	maxWidth: '100%',
	alignItems: 'center',

	p: {
		display: 'block',
		marginLeft: 8,
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		fontSize: 14,
	},

	svg: {
		minHeight: 20,
		minWidth: 20,
	},
});

export const RightContent = styled('div', {
	display: 'flex',
	alignItems: 'center',
	svg: {
		marginLeft: 8,
		fontSize: 16,
		color: '$unimportant',
	},
});
