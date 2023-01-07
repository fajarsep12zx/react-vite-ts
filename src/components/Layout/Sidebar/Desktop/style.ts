import { makeStyles } from 'tss-react/mui'

import { colors, fontSize } from '~/styles/theme'

interface IProps {
  open: boolean
}

const drawerWidth = 220
const closedDrawerWidth = 60
const transition = (theme) =>
  theme.transitions.create('width', {
    duration: theme.transitions.duration.enteringScreen,
    easing: theme.transitions.easing.sharp,
  })

const style = makeStyles<IProps>()((theme, { open }) => ({
  activeItem: {
    backgroundColor: colors.Denim2,
    borderRadius: '6px',
    color: colors.White,
    justifyContent: 'center',
  },
  drawer: open
    ? {
        boxSizing: 'border-box',
        flexShrink: 0,
        overflowX: 'hidden',
        transition: transition(theme),
        whiteSpace: 'nowrap',
        width: drawerWidth,
      }
    : {
        boxSizing: 'border-box',
        flexShrink: 0,
        overflowX: 'hidden',
        transition: transition(theme),
        whiteSpace: 'nowrap',
        width: closedDrawerWidth,
      },
  drawerFoot: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: open ? 'flex-start' : 'center',
    position: 'fixed',
    width: open ? drawerWidth : closedDrawerWidth,
  },
  drawerHead: {
    // ...theme.mixins.toolbar,
    alignItems: 'center',
    display: 'flex',
    justifyContent: open ? 'space-between' : 'center',
    marginBottom: theme.spacing(8),
    padding: theme.spacing(0, 1),
  },
  drawerPaper: open
    ? {
        backgroundColor: colors.GulfBlue,
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          duration: theme.transitions.duration.enteringScreen,
          easing: theme.transitions.easing.sharp,
        }),
        width: drawerWidth,
      }
    : {
        backgroundColor: colors.GulfBlue,
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          duration: theme.transitions.duration.leavingScreen,
          easing: theme.transitions.easing.sharp,
        }),
        width: closedDrawerWidth,
      },
  expandButton: {
    background: '#193B79',
    borderRadius: '24px',
  },
  iconClose: {
    transform: 'rotate(180deg)',
  },
  iconStyle: {
    color: colors.PigeonPost,
  },
  itemText: {
    fontSize: fontSize[16],
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
    marginLeft: open ? theme.spacing(2) : theme.spacing(2),
    marginRight: open ? theme.spacing(2) : theme.spacing(2),
    maxWidth: open ? '90%' : '80%',
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
  logo: {
    height: '1.6vw',
    margin: theme.spacing(2),
    marginTop: theme.spacing(3),
    width: '6vw',
  },
}))

export default style
