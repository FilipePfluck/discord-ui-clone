import * as S from './styles'

interface RoleProps {
  name: string
  color?: string
}

export const Role = ({name}: RoleProps) => {
  return(
    <S.Container>
      <S.Circle/>
      <p>{name}</p>
    </S.Container>
  )
}