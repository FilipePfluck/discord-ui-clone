import {FaDiscord} from 'react-icons/fa';
import {StatusBadge} from '../StatusBadge';
import * as S from './styles';

interface AvatarProps {
	src?: string;
	alt: string;
	status?: 'online' | 'doNotDisturb' | 'away' | 'invisible';
	size?: number;
	showStatus?: boolean;
}

export const Avatar = ({src, alt, status = 'invisible', size = 32, showStatus = true, ...props}: AvatarProps) => (
	<S.Container {...props}>
		<S.Image style={{height: size, width: size}} src={src} alt={alt}/>
		<S.Fallback style={{height: size, width: size}}>
			<FaDiscord size={20} color='#FFF'/>
		</S.Fallback>
		{showStatus && <StatusBadge status={status}/>}
	</S.Container>
);
