import {styled} from '../../../stitches.config';

export const Container = styled('div', {
	position: 'absolute',
	right: -3,
	bottom: 1,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	height: 16,
	width: 16,
	borderRadius: '50%',
	background: 'inherit'
})

export const StatusBadge = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: 10,
	width: 10,
	borderRadius: '50%',

	variants: {
		status: {
			online: {
				background: '$green',
			},
			doNotDisturb: {
				background: '$red',
			},
			away: {
				background: '$orange',
			},
			invisible: {
				background: '$grayLighter',
			},
		},
	},
});

export const DoNotDisturbSymbol = styled('div', {
	height: 2,
	width: 8,
	borderRadius: 2,
	background: '$grayDarker',
});

export const AwaySymbol = styled('div', {
	height: 8,
	width: 8,
	borderRadius: '50%',
	background: '$grayDarker',
	position: 'absolute',
	top: -2,
	left: -2,
});

export const InvisibleSymbol = styled('div', {
	height: 6,
	width: 6,
	borderRadius: '50%',
	background: '$grayDarker',
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
});
