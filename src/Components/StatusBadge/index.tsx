import * as S from './styles';

interface StatusBadgeProps {
	status: 'online' | 'doNotDisturb' | 'away' | 'invisible';
}

export const StatusBadge = ({status}: StatusBadgeProps) => (
	<S.StatusBadge status={status}>
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
);
