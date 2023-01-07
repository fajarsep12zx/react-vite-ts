import { makeStyles } from 'tss-react/mui'

import { colors } from '~/styles/theme'

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
        backgroundColor: theme.palette.secondary.main,
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          duration: theme.transitions.duration.enteringScreen,
          easing: theme.transitions.easing.sharp,
        }),
        width: drawerWidth,
      }
    : {
        backgroundColor: theme.palette.secondary.main,
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          duration: theme.transitions.duration.leavingScreen,
          easing: theme.transitions.easing.sharp,
        }),
        width: closedDrawerWidth,
      },
  expandButton: {
    background: colors.blue[150],
    borderRadius: '24px',
    color: theme.palette.common.white,
  },
  iconClose: {
    transform: 'rotate(180deg)',
  },
  logo: {
    height: '1.6vw',
    margin: theme.spacing(2),
    marginTop: theme.spacing(3),
    width: '6vw',
  },
}))

export default style
