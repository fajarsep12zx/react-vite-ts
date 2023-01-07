import { makeStyles } from 'tss-react/mui'

import { colors } from '~/styles/colors'

const style = makeStyles()(() => ({
  appBar: {
    background: `${colors.GulfBlue} !important`,
  },
  imgLogo: {
    width: 80,
    height: '100%',
  },
}))

export default style
