import { memo } from 'react'

import { Box } from '@mui/material'
import { ReactSVG } from 'react-svg'

import useStyles from './style'

interface Props {
  open: boolean
}

const Bottom = ({ open }: Props) => {
  const { classes } = useStyles({ open })

  return (
    <>
      <Box mr={1}>
        <Box alignItems="center" className={classes.footerTitle} display="flex" width="100%">
          <Box hidden={!open} mr={2}>
            Powered by
          </Box>
          <Box>
            <ReactSVG src="/brands/logo-xapiens.svg" />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default memo(Bottom)
