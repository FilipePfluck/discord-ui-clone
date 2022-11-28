import { ReactNode } from 'react'
import * as S from './styles'

interface HeaderProps {
  leftElement?: ReactNode
  rightElement?: ReactNode
}

export const Header = ({ leftElement, rightElement }: HeaderProps) => (
  <S.Container>
    <S.LeftSection>{leftElement}</S.LeftSection>
    <S.RightSection>{rightElement}</S.RightSection>
  </S.Container>
)
