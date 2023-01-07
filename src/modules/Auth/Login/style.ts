import { makeStyles } from 'tss-react/mui'

import { colors, fontSize } from '~/styles/theme'

const style = makeStyles()((theme) => ({
  background: {
    background: "url('/images/login-bg.png')",
    backgroundColor: '#F2F6FF',
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    flexBasis: '100%',
    height: '100%',
    maxWidth: '100%',
  },
  errorMessage: {
    color: theme.palette.error.main,
    fontSize: fontSize[20],
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  errorTitle: {
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing(1),
  },
  formSection: {
    '& > div:not(:last-child)': {
      marginBottom: theme.spacing(3),
    },
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(3),
  },
  resetPass: {
    color: colors.blue[400],
    marginLeft: theme.spacing(2),
    textDecoration: 'none',
  },
  subTitle: {
    color: theme.palette.text.secondary,
    fontSize: fontSize[16],
    fontWeight: theme.typography.fontWeightRegular,
    marginBottom: theme.spacing(7),
  },
  title: {
    fontSize: fontSize[20],
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3),
  },
  whiteCardBox: {
    backgroundColor: theme.palette.common.white,
    borderRadius: '8px',
    boxShadow: '1px 2px 8px 0px #D7E1F6',
    padding: theme.spacing(6),
  },
}))

export default style
