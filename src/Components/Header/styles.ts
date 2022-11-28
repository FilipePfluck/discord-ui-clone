import { styled } from '../../../stitches.config'

export const Container = styled('header', {
  display: 'flex',
  height: 48,
  width: '100%',
  boxShadow: '4px 0px 3px #202225',
  zIndex: 2,
})

export const LeftSection = styled('div', {
  width: 240,
  background: '$grayDark',
})

export const RightSection = styled('div', {
  display: 'flex',
  flex: 1,
  padding: '12px 16px',
})
