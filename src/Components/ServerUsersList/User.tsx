import {Avatar} from '../Avatar';
import * as S from './User.style';

interface UserProps {
	name: string;
	src: string;
	status?: 'online' | 'doNotDisturb' | 'away' | 'invisible';
}

export const User = ({name, src, status = 'invisible'}: UserProps) => (
	<S.Container>
		<Avatar src={src} status={status} alt={name}/>
		<p>{name}</p>
	</S.Container>
);
