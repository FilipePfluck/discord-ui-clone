import { styled } from '../../../../../stitches.config'

export const ServerNameContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
  padding: 16,
  background: 'transparent',
  fontSize: 18,
  color: '$text',

  '&:hover': {
    background: '$grayLight',
  },
})

export const RightElementsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
})

export const ChatNameContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  strong: {
    marginLeft: 8,
    fontSize: 16,
  },

  svg: {
    color: '$unimportant',
  },
})

export const ChatActions = styled('div', {
  display: 'flex',
  alignItems: 'center',

  '>*': {
    marginLeft: 16,
  },

  svg: {
    fontSize: 24,
    color: '$unimportant',
  },
})
