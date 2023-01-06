import { css } from '@emotion/react'

import { colors } from './colors'
import theme from './theme'

const globalCss = css({
  '*': {
    fontFamily: 'Inter, sans-serif',
  },
  '#root': {
    height: '100%',
  },
  'html, body': {
    margin: 0,
    padding: 0,
  },
  '*::-webkit-scrollbar': {
    width: 6,
    height: 10,
    border: `1px solid ${colors.Solitude}`,
    marginRight: theme.spacing(3),
  },
  '*::-webkit-scrollbar-track': {
    '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
  },
  '*::-webkit-scrollbar-thumb': {
    backgroundColor: colors.Malibu,
    borderRadius: 16,
    borderColor: 'none',
    cursor: 'pointer',
  },
})

export default globalCss
