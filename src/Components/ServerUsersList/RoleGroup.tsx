import * as S from './RoleGroup.style';
import {User} from './User';

interface RoleGroupsProps {
	roleName: string;
	numberOfOnlineMembers: number;
}

export const RoleGroup = ({roleName, numberOfOnlineMembers}: RoleGroupsProps) => (
	<S.Container>
		<p>{roleName} - {numberOfOnlineMembers}</p>
		<ul>
			<li>
				<User status='doNotDisturb' name='jooj' src='https://cdn.discordapp.com/avatars/360850272685260811/89321f8bf75b1ad114e39efd29cfb26a.png?size=2048'/>
			</li>
			<li>
				<User status='doNotDisturb' name='Pfluck' src='https://cdn.discordapp.com/avatars/399545888885702668/c07a783c590c93c2efaa1f52281f9ecb.png?size=2048'/>
			</li>
			<li>
				<User status='online' name='Ruan' src='https://cdn.discordapp.com/avatars/359810278432571392/d707d6f01cc279eec07b127cd0ccf88b.png?size=2048'/>
			</li>
			<li>
				<User status='online' name='Fabritcho' src='https://cdn.discordapp.com/avatars/824723269474320405/c1c706ba6e7e6ad3ca249ae9cfbed428.png?size=2048'/>
			</li>
		</ul>
	</S.Container>
);
