import { styled } from '../../../stitches.config'

export const Container = styled('main', {
  height: '100vh',
  display: 'flex',
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
})

export const BelowHeaderContent = styled('div', {
  display: 'flex',
  flex: 1,
  overflow: 'hidden',
})

export const Chat = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
})
