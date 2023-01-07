import { makeStyles } from 'tss-react/mui'

import { colors, fontSize } from '~/styles/theme'

interface IProps {
  open: boolean
}

const style = makeStyles<IProps>()((theme, { open }) => ({
  logo: {
    color: colors.White,
    paddingTop: 1,
  },
  listItem: {
    minHeight: 48,
    justifyContent: open ? 'initial' : 'center',
    maxWidth: open ? '90%' : '80%',
    padding: 0,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: colors.PigeonPost,
    marginLeft: open ? theme.spacing(2) : theme.spacing(2),
    marginRight: open ? theme.spacing(2) : theme.spacing(2),
    '&:hover': {
      backgroundColor: colors.Denim2,
      borderRadius: '6px',
      color: colors.White,
      justifyContent: 'center',
    },
  },
  listItemIcon: {
    minWidth: 0,
    marginRight: 0,
    justifyContent: 'center',
    color: 'inherit',
  },
  listItemConfigIcon: {
    marginRight: open ? theme.spacing(3) : 0,
  },
  listItemText: {
    display: open ? 'block' : 'none',
  },
  footerTitle: {
    display: open ? 'block' : 'none',
    color: colors.White,
    fontWeight: theme.typography.fontWeightLight,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    marginBottom: theme.spacing(5),
  },
  itemText: {
    fontSize: fontSize[16],
  },
  itemDesc: {
    fontSize: fontSize[12],
  },
}))

export default style
