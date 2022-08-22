import {IconBaseProps} from 'react-icons';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import {Tooltip, TooltipProps} from '../Tooltip';

interface TooltipIconProps extends IconBaseProps {
	label?: string;
	tooltipText: string;
	icon: React.FunctionComponent<IconBaseProps>;
	onClick?: (props: any) => any;
	padding?: number;
	tooltipProps?: Partial<TooltipProps>;
}

export const TooltipIcon = ({
	icon: Icon,
	tooltipText,
	tooltipProps,
	label = tooltipText,
	onClick,
	padding,
	...props
}: TooltipIconProps) => (
	<AccessibleIcon.Root label={label} >
		<Tooltip text={tooltipText} {...tooltipProps}>
			{onClick ? (
				<button onClick={onClick} style={{padding}}>
					<Icon {...props}/>
				</button>
			) : (
				<Icon {...props}/>
			)}
		</Tooltip>
	</AccessibleIcon.Root>
);
