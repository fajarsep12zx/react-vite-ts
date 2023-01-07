import { makeStyles } from 'tss-react/mui'

import { colors } from '~/styles/theme'

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
  }
})

export default style
