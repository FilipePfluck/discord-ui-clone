import {styled} from '../../../stitches.config';
import {Avatar} from '../Avatar';

export const Container = styled('li', {
	width: '100%',
	paddingX: 2,
	paddingLeft: 72,
	paddingRight: 32,
	position: 'relative',
	transition: '0.2s',
	lineHeight: '22px',

	'>div': {
		display: 'flex',
		flexDirection: 'column',
	},

	variants: {
		isPingingMe: {
			true: {
				background: '$orangeDark',
				borderLeft: '2px solid $orange',

				'&:hover': {
					background: '$orangeDarker',
				},
			},
			false: {
				'&:hover': {
					background: '$graySlightlyDark',
				},
			},
		},
		isFirstMessage: {
			true: {
				marginTop: 16,
			},
		},
	},
});

export const NameAndTimeContainer = styled('div', {
	display: 'flex',
	alignItems: 'center',
	marginTop: '4px',

	strong: {
		color: '#E5C419',
		marginRight: 8,
		fontSize: 16,
		fontWeight: 500,
	},

	p: {
		fontSize: 12,
		fontWeight: 400,
		color: '$unimportant',
	},
});

export const Message = styled('p', {
	fontSize: 14,
});

export const StyledAvatar = styled(Avatar, {
	position: 'absolute',
	left: 16,
	top: 4,
});
