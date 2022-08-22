import {TooltipProps as RadixTooltipProps} from '@radix-ui/react-tooltip';

import * as S from './styles';

export interface TooltipProps extends RadixTooltipProps {
	children: React.ReactNode;
	text: string;
}

export const Tooltip = ({children, text, ...props}: TooltipProps) => (
	<S.Container {...props}>
		<S.Trigger>
			{children}
		</S.Trigger>
		<S.Portal>
			<S.Content>
				{text}
				<S.Arrow/>
			</S.Content>
		</S.Portal>
	</S.Container>
);
