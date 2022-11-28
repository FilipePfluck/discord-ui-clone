import { styled } from '../../../../../stitches.config'

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

export const SearchInputContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  padding: 10,
})

export const SearchInput = styled('input', {
  height: '100%',
  width: '100%',

  padding: 4,
  borderRadius: 4,
  backgroundColor: '$grayExtraDark',
  color: '$text',
  border: 0,

  '&::placeholder': {
    color: '$placeholder',
  },
})

export const FriendsFilterContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,

  strong: {
    paddingRight: 16,
    borderRight: '1px solid $grayLighter',
    color: '#FFF',
    display: 'flex',
    alignItems: 'center',

    svg: {
      color: '$unimportant',
      height: 24,
      width: 24,
      marginRight: 4,
    },
  },
})

export const FilterOption = styled('button', {
  padding: '4px 8px',
  borderRadius: 4,
  fontSize: 15,
  transition: '0.2s',

  backgroundColor: 'transparent',
  color: '$text',

  '&:hover': {
    background: '$grayLight',
  },

  variants: {
    isSelected: {
      true: {
        backgroundColor: '$grayLighter',
        color: '#FFF',
      },
    },
  },
})

export const AddFriendButton = styled('button', {
  padding: '4px 8px',
  borderRadius: 4,
  fontSize: 15,

  backgroundColor: '$green',
  color: '#fff',
})
