import { styled } from "../../../stitches.config";

export const Container = styled('div', {
  borderRadius: 4,
  padding: '4px 8px',
  background: '$grayDarker',
  display: 'flex',
  alignItems: 'center',
  marginBottom: 4,
  marginRight: 4,

  'p': {
    fontSize: 12,
    color: '#FFF'
  }
})

export const Circle = styled('div', {
  height: 12,
  width: 12,
  borderRadius: '50%',
  background: '#F1C40F',
  marginRight: 8
})