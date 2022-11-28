import * as Tooltip from '@radix-ui/react-tooltip'

import { LeftSidebar } from '../../Components/LeftSidebar'
import { ServersListSidebar } from '../../Components/ServersListSidebar/indexs'
import { DirectHeader } from './Components/Header'
import { FriendList } from './Components/FriendsList'

import * as S from './styles'

export const Friends = () => {
  return (
    <Tooltip.Provider>
      <S.Container>
        <ServersListSidebar />
        <S.Content>
          <DirectHeader />
          <S.BelowHeaderContent>
            <LeftSidebar>
              <FriendList />
            </LeftSidebar>
          </S.BelowHeaderContent>
        </S.Content>
      </S.Container>
    </Tooltip.Provider>
  )
}
