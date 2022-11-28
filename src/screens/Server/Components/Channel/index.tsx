import { useState } from 'react'
import { MdTag, MdVolumeUp, MdPersonAdd, MdSettings } from 'react-icons/md'
import { TooltipIcon } from '../../../../Components/TooltipIcon'

import * as S from './styles'

export interface ChannelProps {
  type: 'voice' | 'text'
  name: string
  isSelected: boolean
  onClick: (a: any) => any
}

export const Channel = ({ type, name, isSelected, onClick }: ChannelProps) => {
  const [isRightContentVisible, setIsRightContentVisible] = useState(false)

  const makeRightContentVisible = () => {
    setIsRightContentVisible(true)
  }
  const makeRightContentInvisible = () => {
    setIsRightContentVisible(false)
  }

  return (
    <S.Container
      isSelected={isSelected}
      onClick={type === 'text' ? onClick : () => {}}
      onMouseEnter={makeRightContentVisible}
      onMouseLeave={makeRightContentInvisible}
      onFocus={makeRightContentVisible}
      onBlur={makeRightContentInvisible}
    >
      <S.LeftContent>
        {type === 'text' ? <MdTag size={20} /> : <MdVolumeUp size={20} />}
        <p>{name}</p>
      </S.LeftContent>
      {(isSelected || isRightContentVisible) && (
        <S.RightContent>
          <TooltipIcon
            icon={MdPersonAdd}
            label="Criar convite"
            tooltipText="Criar convite"
          />
          <MdSettings />
        </S.RightContent>
      )}
    </S.Container>
  )
}
