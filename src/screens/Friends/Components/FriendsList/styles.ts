import { styled } from '../../../../../stitches.config'

export const FriendListContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: 12,
  marginTop: 92,
  background: 'inherit',
})

export const Heading = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: 4,

  fontSize: 12,
  color: '$unimportant',
  fontWeight: 'bold',

  svg: {
    color: '#FFF',
    height: 18,
    width: 18,
  },
})
