import {styled} from '../../../stitches.config';

export const Container = styled('aside', {
	height: '100%',
	width: 72,
	background: '$grayExtraDark',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: 16,
	paddingTop: 12,
});

export const Separator = styled('div', {
	height: 2,
	width: 32,
	borderBottom: '2px solid $grayDark',
	marginBottom: 8,
});
