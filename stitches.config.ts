import type * as Stitches from '@stitches/react';
import {createStitches} from '@stitches/react';

export const {
	config,
	createTheme,
	css,
	getCssText,
	globalCss,
	styled,
	theme,
} = createStitches({
	theme: {
		colors: {
			heading: '#FFFFFF',
			text: '#DCDDDE',
			unimportant: '#96989C',
			textDisabled: '#4B5057',

			grayLighter: '#42464D',
			grayLight: '#3B3E45',
			grayNeutral: '#36393F',
			graySlightlyDark: '#32353B',
			grayDark: '#2F3136',
			grayDarker: '#292B2F',
			grayExtraDark: '#202225',
			black: '#18191C',

			primary: '#5865F2',
			primaryDark: '#434A87',

			red: '#E53F42',
			green: '#3BA55D',
			orange: '#F0A118',

			orangeDark: '#4B443B',
			orangeDarker: '#46423C',
		},
		fonts: {
			system: 'system-ui',
		},
	},
	utils: {
		marginX: (value: Stitches.PropertyValue<'margin'>) => ({
			marginLeft: value,
			marginRight: value,
		}),
		marginY: (value: Stitches.PropertyValue<'margin'>) => ({
			marginTop: value,
			marginBottom: value,
		}),
		paddingX: (value: Stitches.PropertyValue<'padding'>) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
		paddingY: (value: Stitches.PropertyValue<'padding'>) => ({
			paddingTop: value,
			paddingBottom: value,
		}),
	},
	media: {
		bp1: '(min-width: 520px)',
		bp2: '(min-width: 900px)',
	},
});

export const GlobalStyles = globalCss({
	'*': {margin: 0, padding: 0, boxSizing: 'border-box'},
	body: {
		backgroundColor: '$grayNeutral',
		height: '100vh',
		width: '100vw',
		color: '$text',
		fontFamily: 'Roboto Slab, sans-serif',
	},
	button: {
		cursor: 'pointer',
		border: 0,
		background: 'transparent',
	},
	li: {
		listStyle: 'none',
	},
});
