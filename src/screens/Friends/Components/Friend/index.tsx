import { AccessibleIcon } from '@radix-ui/react-accessible-icon'
import { Avatar } from '../../../../Components/Avatar'
import { MdClose } from 'react-icons/md'

import * as S from './styles'

interface FriendProps {
  name: string
  imgUrl?: string
  status: 'online' | 'doNotDisturb' | 'away' | 'invisible'
  isSelected?: boolean
}

export const Friend = ({
  name,
  status,
  imgUrl,
  isSelected = false,
}: FriendProps) => {
  return (
    <S.Container isSelected={isSelected}>
      <S.NameAndAvatar>
        <Avatar src={imgUrl} alt={name} status={status} size={32} />
      </S.NameAndAvatar>
      <S.CloseButton>
        <AccessibleIcon label="Remover conversa">
          <MdClose size={20} />
        </AccessibleIcon>
      </S.CloseButton>
    </S.Container>
  )
}
