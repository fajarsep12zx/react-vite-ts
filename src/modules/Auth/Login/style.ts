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
  container: {
    backgroundColor: colors.White,
    display: 'flex',
    height: '100%',
    position: 'relative',
    textAlign: 'center',
  },
  errorMessage: {
    color: colors.AlizarinCrimson,
    fontSize: fontSize[20],
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  errorTitle: {
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing(1),
  },
  formContainer: {
    alignItems: 'center',
    display: 'flex',
    flexBasis: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: '20%',
  },
  formSection: {
    '& > div:not(:last-child)': {
      marginBottom: theme.spacing(3),
    },
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(3),
  },
  iconStyle: {
    color: colors.DodgerBlue2,
    marginRight: theme.spacing(2),
  },
  logo: {
    width: '10.417vw',
  },
  resetPass: {
    color: colors.DodgerBlue2,
    marginLeft: theme.spacing(2),
  },
  subTitle: {
    color: colors.Nobel,
    fontSize: fontSize[16],
    fontWeight: theme.typography.fontWeightRegular,
    marginBottom: theme.spacing(7),
  },
  title: {
    color: colors.Charcoal,
    fontSize: fontSize[20],
    fontWeight: 600,
    marginBottom: theme.spacing(3),
  },

  whiteCardBox: {
    backgroundColor: colors.White,
    borderRadius: '8px',
    boxShadow: '1px 2px 8px 0px #D7E1F6',
    padding: theme.spacing(6),
  },
}))

export default style
