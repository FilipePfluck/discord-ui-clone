import * as Popover from '@radix-ui/react-popover';
import { styled } from "../../../stitches.config";
import { keyframes } from '@stitches/react';
import { Avatar } from '../Avatar';

const slideRightAndFade = keyframes({
  '0%': { transform: 'translateX(-8px)' },
  '100%': { transform: 'translateX(0)' },
});

export const Container = styled(Popover.Root, {

})

export const Trigger = styled(Popover.Trigger, {

})

export const Portal = styled(Popover.Portal, {

})

export const PopupContent = styled(Popover.Content, {
  width: 300,
  borderRadius: 8,
  background: '$black',
  boxShadow: '0 0 8px #202225',
  
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animationDuration: '800ms',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      willChange: 'transform',
      animationName: slideRightAndFade
    }
  }
})

export const Header = styled('header', {
  height: 60,
  width: '100%',
  backgroundColor: '#BE7F98',
  borderRadius: '8px 8px 0 0'
})

export const PopoverAvatar = styled(Avatar, {
  width: 92,
  height: 92,
  border: '6px solid $black',
  position: 'absolute',
  top: 20,
  left: 16
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  padding: 16,
  paddingTop: 64,
})

export const OnlyTagContainer = styled('div', {
  display: 'flex',
  fontSize: 20,
  color: '#FFF',
  marginBottom: 24,
  
  'p': {
    fontWeight: 'bold',
    color: '$unimportant'
  }
})

export const NickAndTagContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 24,
  
  'p':  {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 600
  },

  'span': {
    color: '$unimportant',
    fontSize: 14,
    marginTop: 2
  }
})

export const SubdivisionTitle = styled('strong', {
  fontSize: 12,
  marginBottom: 8,
  color: '$text'
})

export const SubdivisionContent = styled('div', {
  marginBottom: 16,

  'p': {
    fontSize: 14,
    color: '$unimportant'
  }
})

export const RoleList = styled('ul', {
  display: 'flex',
  width: '100%'
})

export const NoteInput = styled('input', {
  background: 'transparent',
  border: 0,
  width: '100%',
  outline: 0,
  '&::placeholder': {
    color: '$unimportant',
    fontSize: 12
  },
  color: '$text',
  height: 32
})

export const SendMessageInput = styled('input', {
  background: '$grayDarker',
  padding: 10,
  borderRadius: 4,
  marginTop: 16,
  border: 0,
  outline: 0,
  color: '$text'
})