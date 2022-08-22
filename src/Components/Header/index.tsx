import * as S from './styles';

interface HeaderProps {
	leftElement?: React.ReactNode;
	rightElement?: React.ReactNode;
}

export const Header = ({leftElement, rightElement}: HeaderProps) => (
	<S.Container>
		<S.LeftSection>
			{leftElement}
		</S.LeftSection>
		<S.RightSection>
			{rightElement}
		</S.RightSection>
	</S.Container>
);
