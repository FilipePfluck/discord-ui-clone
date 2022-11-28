import { Avatar } from '../../../../Components/Avatar'
import { MemberPopover } from '../MemberPopover'
import * as S from './styles'

interface MemberProps {
  src: string
  status?: 'online' | 'doNotDisturb' | 'away' | 'invisible'
  nick?: string
  tag: string
  description?: string
}

export const Member = ({
  src,
  status = 'invisible',
  nick,
  tag,
  description,
}: MemberProps) => {
  const [tagName] = tag.split('#')

  return (
    <MemberPopover
      tag={tag}
      nick={nick}
      status={status}
      avatarUrl={src}
      description={description}
    >
      <S.Container>
        <Avatar src={src} status={status} alt={nick || tagName} />
        <p>{nick || tagName}</p>
      </S.Container>
    </MemberPopover>
  )
}
