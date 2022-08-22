import {Footer} from './LeftSidebarFooter';
import * as S from './styles';

interface LeftSidebarProps {
	children: React.ReactNode;
}

export const LeftSidebar = ({children}: LeftSidebarProps) => (
	<S.Container>
		{children}
		<Footer/>
	</S.Container>
);
