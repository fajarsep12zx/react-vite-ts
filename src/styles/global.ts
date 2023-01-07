/* eslint-disable sort-keys */
import { css } from '@emotion/react'

import { colors } from './colors'
import theme from './theme'

const globalCss = css({
  '#root': {
    height: '100%',
  },
  '*': {
    fontFamily: 'Inter, sans-serif',
  },
  '*::-webkit-scrollbar': {
    border: `1px solid ${colors.Solitude}`,
    height: 10,
    marginRight: theme.spacing(3),
    width: 6,
  },
  '*::-webkit-scrollbar-thumb': {
    backgroundColor: colors.Malibu,
    borderColor: 'none',
    borderRadius: 16,
    cursor: 'pointer',
  },
  '*::-webkit-scrollbar-track': {
    '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
  },
  'html, body': {
    margin: 0,
    padding: 0,
  },
  'hide-on-mobile': {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      'content-visibility': 'none',
    },
  },
})

export default globalCss
