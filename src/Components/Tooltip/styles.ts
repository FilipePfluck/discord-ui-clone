import {keyframes} from '@stitches/react';
import * as Tooltip from '@radix-ui/react-tooltip';
import {styled} from '../../../stitches.config';

const fadeIn = keyframes({
	'0%': {opacity: 0, transform: 'scale(0.8)'},
	'100%': {opacity: 1, transform: 'scale(1)'},
});

const fadeOut = keyframes({
	'0%': {opacity: 1, transform: 'scale(1)'},
	'100%': {opacity: 0, transform: 'scale(0.8)'},
});

export const Container = styled(Tooltip.Root, {});

export const Trigger = styled(Tooltip.Trigger, {});

export const Portal = styled(Tooltip.Portal, {});

export const Content = styled(Tooltip.Content, {
	background: '$black',
	padding: 8,
	borderRadius: 4,
	fontSize: 14,
	boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
	zIndex: 5,

	'@media (prefers-reduced-motion: no-preference)': {
		animationDuration: '400ms',
		animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
		willChange: 'transform, opacity',
		'&[data-state="delayed-open"]': {
			animationName: fadeIn,
		},
		'&[data-state="closed"]': {
			animationName: fadeOut,
		},
	},
});

export const Arrow = styled(Tooltip.Arrow, {
	fill: '$black',
});
