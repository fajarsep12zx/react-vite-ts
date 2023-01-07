import { makeStyles } from 'tss-react/mui'

import { colors, fontSize } from '~/styles/theme'

import { drawerWidth, closedDrawerWidth } from '../helper'

interface IProps {
  open: boolean
}

const style = makeStyles<IProps>()((theme, { open }) => ({
  activeItem: {
    backgroundColor: colors.blue[60],
    borderRadius: '6px',
    color: colors.White,
    justifyContent: 'center',
  },
  drawerBody: {
    padding: theme.spacing(0, 3),
  },
  drawerFoot: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: open ? 'flex-start' : 'center',
    padding: theme.spacing(0, 1),
    position: 'fixed',
    width: open ? drawerWidth : closedDrawerWidth,
  },
  drawerWrapper: {
    overflowX: 'hidden',
    overflowY: 'auto',
    height: '65vh',
  },
  itemText: {
    fontSize: fontSize[16],
  },
  itemTextSm: {
    fontSize: fontSize[14],
  },
  listItem: {
    '&:hover': {
      backgroundColor: colors.Denim2,
      borderRadius: '6px',
      color: colors.White,
      justifyContent: 'center',
    },
    color: colors.PigeonPost,
    justifyContent: open ? 'initial' : 'center',
    marginBottom: theme.spacing(1),
    minHeight: 48,
    padding: 0,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  listItemIcon: {
    color: 'inherit',
    justifyContent: 'center',
    marginRight: open ? theme.spacing(2) : 0,
    minWidth: 0,
  },
  listItemText: {
    display: open ? 'block' : 'none',
    fontSize: fontSize[16],
  },
  listSubHeader: {
    color: colors.neutral[100],
    fontSize: fontSize[12],
    marginBottom: theme.spacing(4),
  },
}))

export default style
