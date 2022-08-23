import {Avatar} from '../Avatar';
import { UserPopover } from '../UserPopover';
import * as S from './User.style';

interface UserProps {
	src: string;
	status?: 'online' | 'doNotDisturb' | 'away' | 'invisible';
	nick?: string
	tag: string
	description?: string
}

export const User = ({src, status = 'invisible', nick, tag, description}: UserProps) => {
	const [tagName] = tag.split('#')

	return (
		<UserPopover tag={tag} nick={nick} status={status} avatarUrl={src} description={description}>
			<S.Container>
				<Avatar src={src} status={status} alt={nick || tagName}/>
				<p>{nick || tagName}</p>
			</S.Container>
		</UserPopover>
	)
};
