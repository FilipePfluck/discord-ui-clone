import { RoleMembers } from '../RoleMembers'
import * as S from './styles'

export const ServerMembersList = () => (
  <S.Container>
    <S.Scroll>
      <RoleMembers roleName="FALADOR" numberOfOnlineMembers={4} />
      <RoleMembers roleName="FALADOR" numberOfOnlineMembers={4} />
      <RoleMembers roleName="FALADOR" numberOfOnlineMembers={4} />
      <RoleMembers roleName="FALADOR" numberOfOnlineMembers={4} />
      <RoleMembers roleName="FALADOR" numberOfOnlineMembers={4} />
    </S.Scroll>
  </S.Container>
)
