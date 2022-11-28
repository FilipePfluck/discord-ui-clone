import { LeftSidebar } from '../../Components/LeftSidebar'
import { ServersListSidebar } from '../../Components/ServersListSidebar/indexs'
import { MessageInput } from '../../Components/MessageInput'
import { MessageList } from '../../Components/MessageList'

import { ServerHeader } from './Components/ServerHeader'
import { ChannelsList } from './Components/ChannelsList'
import { ServerMembersList } from './Components/ServerMembersList'

import * as S from './styles'

export const Server = () => {
  return (
    <S.Container>
      <ServersListSidebar />
      <S.Content>
        <ServerHeader />
        <S.BelowHeaderContent>
          <LeftSidebar>
            <ChannelsList />
          </LeftSidebar>
          <S.Chat>
            <MessageList />
            <MessageInput />
          </S.Chat>
          <ServerMembersList />
        </S.BelowHeaderContent>
      </S.Content>
    </S.Container>
  )
}
