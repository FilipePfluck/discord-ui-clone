import {RoleGroup} from './RoleGroup';
import * as S from './styles';

export const ServerUsersList = () => (
	<S.Container>
		<S.Scroll>
			<RoleGroup roleName='FALADOR' numberOfOnlineMembers={4}/>
			<RoleGroup roleName='FALADOR' numberOfOnlineMembers={4}/>
			<RoleGroup roleName='FALADOR' numberOfOnlineMembers={4}/>
			<RoleGroup roleName='FALADOR' numberOfOnlineMembers={4}/>
			<RoleGroup roleName='FALADOR' numberOfOnlineMembers={4}/>
		</S.Scroll>
	</S.Container>
);
