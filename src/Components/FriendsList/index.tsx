import { MdAdd } from 'react-icons/md'

import { TooltipIcon } from '../TooltipIcon'

import * as S from './styles'

export const FriendList = () => {
  return (
    <S.FriendListContainer>
      <S.CreateNemMd>
        <p>MENSAGENS DIRETAS</p>
        <TooltipIcon icon={MdAdd} tooltipText="Criar MD" />
      </S.CreateNemMd>
    </S.FriendListContainer>
  )
}
