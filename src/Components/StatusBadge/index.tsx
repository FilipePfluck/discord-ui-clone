import * as S from './styles';

interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
	status: 'online' | 'doNotDisturb' | 'away' | 'invisible';
	isBig?: boolean
}

export const StatusBadge = ({status, isBig, style, ...props}: StatusBadgeProps) => {
	return (
		<S.Container style={isBig ? {transform: 'scale(1.5)', ...style} : {...style}}>
			<S.StatusBadge status={status} {...props}>
				{status === 'doNotDisturb' && (
					<S.DoNotDisturbSymbol/>
				)}
				{status === 'away' && (
					<S.AwaySymbol/>
				)}
				{status === 'invisible' && (
					<S.InvisibleSymbol/>
				)}
			</S.StatusBadge>
		</S.Container>
	)
};
