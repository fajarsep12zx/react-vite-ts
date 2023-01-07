import { makeStyles } from 'tss-react/mui'

import { colors, fontSize } from '~/styles/theme'

interface IProps {
  open: boolean
}

const style = makeStyles<IProps>()((theme, { open }) => {
  const footerTitle = () => {
    const base = {
      color: colors.White,
      fontWeight: theme.typography.fontWeightLight,
      marginBottom: theme.spacing(5),
      paddingLeft: theme.spacing(3),
    }

    if (open) {
      return {
        ...base,
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      }
    }

    return base
  }

  return {
    footerTitle: footerTitle(),
    itemDesc: {
      fontSize: fontSize[12],
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
      minHeight: 48,
      padding: 0,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    listItemConfigIcon: {
      marginRight: open ? theme.spacing(3) : 0,
    },
    listItemIcon: {
      color: 'inherit',
      justifyContent: 'center',
      marginRight: 0,
      minWidth: 0,
    },
    listItemText: {
      display: open ? 'block' : 'none',
    },
    logo: {
      color: colors.White,
      paddingTop: 1,
    },
  }
})

export default style
