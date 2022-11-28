import { MdAdd } from 'react-icons/md'
import { TooltipIcon } from '../../../../Components/TooltipIcon'
import { Friend } from '../Friend'

import * as S from './styles'

export const FriendList = () => {
  return (
    <S.FriendListContainer>
      <S.Heading>
        <p>MENSAGENS DIRETAS</p>
        <TooltipIcon icon={MdAdd} tooltipText="Criar MD" />
      </S.Heading>
      <Friend
        isSelected
        name="Sllayer"
        status="invisible"
        imgUrl="https://cdn.discordapp.com/avatars/360850272685260811/89321f8bf75b1ad114e39efd29cfb26a.png?size=2048"
      />
      <Friend
        name="Sllayer"
        status="invisible"
        imgUrl="https://cdn.discordapp.com/avatars/360850272685260811/89321f8bf75b1ad114e39efd29cfb26a.png?size=2048"
      />
      <Friend
        name="Sllayer"
        status="invisible"
        imgUrl="https://cdn.discordapp.com/avatars/360850272685260811/89321f8bf75b1ad114e39efd29cfb26a.png?size=2048"
      />
      <Friend
        name="Sllayer"
        status="invisible"
        imgUrl="https://cdn.discordapp.com/avatars/360850272685260811/89321f8bf75b1ad114e39efd29cfb26a.png?size=2048"
      />
    </S.FriendListContainer>
  )
}
