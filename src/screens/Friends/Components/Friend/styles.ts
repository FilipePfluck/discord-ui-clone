import { styled } from '../../../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '2px 4px',
  marginBottom: 2,
  borderRadius: 4,
  transition: '0.2s',
  color: '$unimportant',
  width: '100%',
  cursor: 'pointer',

  button: {
    visibility: 'hidden',
  },

  '&:hover': {
    button: {
      visibility: 'visible',
    },
    background: '$grayLight',
  },

  variants: {
    isSelected: {
      true: {
        background: '$grayLighter',
        p: {
          color: '$text',
        },
      },
      false: {
        background: '$grayDark',
        '&:hover': {
          p: {
            color: '$text',
          },
        },
      },
    },
  },
})

export const NameAndAvatar = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  background: 'inherit',
})

export const CloseButton = styled('button', {
  color: '$text',
  transition: '0.2s',
  '&:hover': {
    color: '#FFF',
  },
})
