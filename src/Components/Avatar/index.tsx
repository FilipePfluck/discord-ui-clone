import { FaDiscord } from 'react-icons/fa'
import { StatusBadge } from '../StatusBadge'
import * as S from './styles'

interface AvatarProps {
  src?: string
  alt: string
  status?: 'online' | 'doNotDisturb' | 'away' | 'invisible'
  size?: number
  showStatus?: boolean
}

export const Avatar = ({
  src,
  alt,
  status = 'invisible',
  size = 32,
  showStatus = true,
  ...props
}: AvatarProps) => {
  return (
    <S.Container {...props}>
      <S.Image style={{ height: size, width: size }} src={src} alt={alt} />
      <S.Fallback style={{ height: size, width: size }}>
        <FaDiscord size={size / 1.6} color="#FFF" />
      </S.Fallback>
      {showStatus && <StatusBadge isBig={size > 48} status={status} />}
    </S.Container>
  )
}
