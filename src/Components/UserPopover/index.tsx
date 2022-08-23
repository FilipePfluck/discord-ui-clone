import { Role } from '../Role'
import { User } from '../ServerUsersList/User'
import * as S from './styles'

interface UserPopoverProps {
  children: React.ReactNode
  avatarUrl?: string
  tag: string
  nick?: string
  description?: string
  status?: 'online' | 'doNotDisturb' | 'away' | 'invisible'
}

export const UserPopover = ({ children, avatarUrl, description, nick, tag, status}: UserPopoverProps) => {
  const [tagName, tagNumber] = tag.split('#')

  return(
    <S.Container>
      <S.Trigger>
        {children}
      </S.Trigger>
      <S.Portal>
        <S.PopupContent side="left" sideOffset={16} align='start'>
        <S.Header/>
          <S.PopoverAvatar src={avatarUrl} size={80} alt={nick || tagName} status={status}/>
          <S.Content>
            {nick ? (
              <S.NickAndTagContainer>
                <p>{nick}</p>
                <span>{tag}</span>
              </S.NickAndTagContainer>
            ) : (
              <S.OnlyTagContainer>
                <strong>{tagName}</strong><p>#{tagNumber}</p>
              </S.OnlyTagContainer>
            )}

            {description && (
              <>
              <S.SubdivisionTitle>
                SOBRE MIM
              </S.SubdivisionTitle>
              <S.SubdivisionContent>
                <p>{description}</p>
              </S.SubdivisionContent>
              </>
            )}

            <S.SubdivisionTitle>
              CARGOS
            </S.SubdivisionTitle>
            <S.SubdivisionContent>
              <S.RoleList>
                <Role name="FALADOR"/>
                <Role name="Bonkers"/>
              </S.RoleList>
            </S.SubdivisionContent>

            <S.SubdivisionTitle>
              NOTAS
            </S.SubdivisionTitle>
            <S.SubdivisionContent>
              <S.NoteInput placeholder='Clique aqui para adicionar uma nota'/>
            </S.SubdivisionContent>

            <S.SendMessageInput placeholder={`Conversar com @${tagName}`}/>
          </S.Content>
        </S.PopupContent>
      </S.Portal>
    </S.Container>
  )
}