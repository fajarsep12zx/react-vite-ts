import { makeStyles } from 'tss-react/mui'

import { colors, fontSize } from '~/styles/theme'

interface IProps {
  open: boolean
}

const drawerWidth = 220
const closedDrawerWidth = 60

const style = makeStyles<IProps>()((theme, { open }) => ({
  logo: {
    width: '6vw',
    height: '1.6vw',
    margin: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
  expandButton: {
    background: '#193B79',
    borderRadius: '24px',
  },
  drawerHead: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: open ? 'space-between' : 'center',
    padding: theme.spacing(0, 1),
    // ...theme.mixins.toolbar,
    marginBottom: theme.spacing(8),
  },
  drawerFoot: {
    width: open ? drawerWidth : closedDrawerWidth,
    alignItems: 'center',
    justifyContent: open ? 'flex-start' : 'center',
    position: 'fixed',
    bottom: 0,
  },
  drawer: open
    ? {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
      }
    : {
        width: closedDrawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
      },
  drawerPaper: open
    ? {
        width: drawerWidth,
        backgroundColor: colors.GulfBlue,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
      }
    : {
        width: closedDrawerWidth,
        backgroundColor: colors.GulfBlue,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
      },
  iconStyle: {
    color: colors.PigeonPost,
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
    marginRight: open ? theme.spacing(2) : 0,
    justifyContent: 'center',
    color: 'inherit',
  },
  listItemText: {
    display: open ? 'block' : 'none',
    fontSize: fontSize[16],
  },
  itemText: {
    fontSize: fontSize[16],
  },
  activeItem: {
    backgroundColor: colors.Denim2,
    borderRadius: '6px',
    color: colors.White,
    justifyContent: 'center',
  },
}))

export default style
