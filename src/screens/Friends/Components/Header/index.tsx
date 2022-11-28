import * as S from './styles'
import { MdHelp, MdInbox, MdPerson } from 'react-icons/md'

import { Header } from '../../../../Components/Header'
import { TooltipIcon } from '../../../../Components/TooltipIcon'

export const DirectHeader = () => (
  <Header
    leftElement={
      <S.SearchInputContainer>
        <S.SearchInput placeholder="Encontre ou comece uma conversa" />
      </S.SearchInputContainer>
    }
    rightElement={
      <S.RightElementsContainer>
        <S.FriendsFilterContainer>
          <strong>
            <MdPerson />
            Amigos
          </strong>
          <S.FilterOption isSelected>Disponível</S.FilterOption>
          <S.FilterOption>Todos</S.FilterOption>
          <S.FilterOption>Pendente</S.FilterOption>
          <S.FilterOption>Bloqueado</S.FilterOption>
          <S.AddFriendButton>Adicionar amigo</S.AddFriendButton>
        </S.FriendsFilterContainer>
        <S.ChatActions>
          <TooltipIcon icon={MdInbox} tooltipText="Caixa de entrada" />
          <TooltipIcon icon={MdHelp} tooltipText="Ajuda" />
        </S.ChatActions>
      </S.RightElementsContainer>
    }
  />
)
