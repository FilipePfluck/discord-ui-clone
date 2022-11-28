import { styled } from '../../../../../stitches.config'

export const Container = styled('button', {
  padding: '4px 8px',
  marginTop: 2,
  borderRadius: 4,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  background: 'inherit',
  transition: '0.2s',
  '&:hover': {
    background: '$grayLight',
  },
  color: '#E5C419',

  p: {
    marginLeft: 16,
  },
})
