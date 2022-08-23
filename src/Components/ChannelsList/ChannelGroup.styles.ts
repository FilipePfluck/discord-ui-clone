import {MdChevronRight} from 'react-icons/md';
import * as Accordion from '@radix-ui/react-accordion';
import {styled} from '../../../stitches.config';

export const Item = styled(Accordion.Item, {
	display: 'flex',
	flexDirection: 'column',
	color: '$text',
	marginBottom: 16,
	transition: 'o.2s',
});

export const Header = styled(Accordion.Header, {
	marginBottom: 2,
});

export const Trigger = styled(Accordion.Trigger, {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	fontSize: 12,
	fontWeight: 600,
	width: '100%',
	transition: '0.2s',
	color: '$unimportant',
	'&:hover': {
		color: '$text',
	},

	'>div': {
		display: 'flex',
		alignItems: 'center',
	},
});

export const AddButton = styled('div', {
	color: '$unimportant',
	marginRight: 8,
	'svg': {
		color: '$unimportant',
		'&:hover': {
			color: '$text',
		},
	}
});

export const Content = styled(Accordion.Content, {
	display: 'flex',
	flexDirection: 'column',
});

export const AccordionChevron = styled(MdChevronRight, {
	marginRight: 4,
	transition: 'transform 300ms',
	'[data-state=open] &': {transform: 'rotate(90deg)'},
});
