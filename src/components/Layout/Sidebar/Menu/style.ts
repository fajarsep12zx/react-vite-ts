import { makeStyles } from 'tss-react/mui'

import { colors, fontSize } from '~/styles/theme'

interface IProps {
  open: boolean
}
const drawerWidth = 220
const closedDrawerWidth = 60

const style = makeStyles<IProps>()((theme, { open }) => ({
  activeItem: {
    backgroundColor: colors.Denim2,
    borderRadius: '6px',
    color: colors.White,
    justifyContent: 'center',
  },
  drawerBody: {
    padding: theme.spacing(0, 1),
    [theme.breakpoints.down('sm')]: {
      height: '65vh',
      overflowY: 'auto',
      paddingBottom: 10,
    },
    [theme.breakpoints.up('md')]: {
      height: '65vh',
      overflowY: 'auto',
      marginBottom: 150,
    },
  },
  drawerFoot: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: open ? 'flex-start' : 'center',
    padding: theme.spacing(0, 1),
    position: 'fixed',
    width: open ? drawerWidth : closedDrawerWidth,
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
}))

export default style
