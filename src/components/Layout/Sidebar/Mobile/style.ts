import { makeStyles } from 'tss-react/mui'

import { colors } from '~/styles/theme'

const style = makeStyles()(() => ({
  drawerPaper: {
    backgroundColor: colors.GulfBlue,
    width: 250,
  },
}))

export default style
