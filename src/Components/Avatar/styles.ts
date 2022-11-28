import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../../stitches.config'

export const Container = styled(Avatar.Root, {
  borderRadius: '50%',
  position: 'relative',
  background: 'inherit',
  marginTop: 'auto',
  marginBottom: 'auto',
})

export const Image = styled(Avatar.Image, {
  borderRadius: '50%',
  objectFit: 'contain',
})

export const Fallback = styled(Avatar.Fallback, {
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$green',
})

export const StatusBadge = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  right: -3,
  bottom: 0,
  height: 16,
  width: 16,
  borderRadius: '50%',
  border: '3px solid $grayDarker',

  variants: {
    status: {
      online: {
        background: '$green',
      },
      doNotDisturb: {
        background: '$red',
      },
      away: {
        background: '$orange',
      },
      invisible: {
        background: '$offline',
      },
    },
  },
})

export const DoNotDisturbSymbol = styled('div', {
  height: 2,
  width: 8,
  borderRadius: 2,
  background: '$grayDarker',
})

export const AwaySymbol = styled('div', {
  height: 8,
  width: 8,
  borderRadius: '50%',
  background: '$grayDarker',
  position: 'absolute',
  top: -2,
  left: -2,
})

export const InvisibleSymbol = styled('div', {
  height: 6,
  width: 6,
  borderRadius: '50%',
  background: '$grayDarker',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})
