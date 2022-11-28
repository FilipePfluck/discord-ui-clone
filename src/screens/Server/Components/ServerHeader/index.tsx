import {
  MdExpandMore,
  MdTag,
  MdNotifications,
  MdPushPin,
  MdGroup,
  MdInbox,
  MdHelp,
} from 'react-icons/md'

import { ChatSearchbar } from '../../../../Components/ChatSearchbar'
import { TooltipIcon } from '../../../../Components/TooltipIcon'
import { Header } from '../../../../Components/Header'

import * as S from './styles'

export const ServerHeader = () => (
  <Header
    leftElement={
      <S.ServerNameContainer>
        <strong>Beat do Gorillar</strong>
        <MdExpandMore size={24} />
      </S.ServerNameContainer>
    }
    rightElement={
      <S.RightElementsContainer>
        <S.ChatNameContainer>
          <MdTag size={24} />
          <strong>geral</strong>
        </S.ChatNameContainer>

        <S.ChatActions>
          <TooltipIcon icon={MdTag} tooltipText="Tópicos" />
          <TooltipIcon
            icon={MdNotifications}
            tooltipText="Config. de notificação"
          />
          <TooltipIcon
            icon={MdPushPin}
            tooltipText="Mensagens fixadas"
            style={{ transform: 'rotate(45deg)' }}
          />
          <TooltipIcon icon={MdGroup} tooltipText="Ocultar lista de membros" />
          <ChatSearchbar />
          <TooltipIcon icon={MdInbox} tooltipText="Caixa de entrada" />
          <TooltipIcon icon={MdHelp} tooltipText="Ajuda" />
        </S.ChatActions>
      </S.RightElementsContainer>
    }
  />
)
