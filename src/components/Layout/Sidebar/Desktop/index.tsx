import React, { memo } from 'react'

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import { Box, Drawer, IconButton } from '@mui/material'
import { ReactSVG } from 'react-svg'

import useStyles from './style'

interface Props {
  children: React.ReactNode
  handleDrawer: () => void
  open: boolean
}

const DesktopSidebar = ({ children, handleDrawer, open }: Props) => {
  const { classes } = useStyles({ open })

  return (
    <Box className="hide-on-mobile">
      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        open={open}
        variant="permanent"
      >
        <div className={classes.drawerHead}>
          <Box hidden={!open}>
            <ReactSVG className={classes.logo} src="/public/brands/logo-fleeto-white.svg" />
          </Box>
          <IconButton className={classes.expandButton} onClick={handleDrawer}>
            {open ? (
              <KeyboardDoubleArrowLeftIcon className={classes.iconClose} />
            ) : (
              <KeyboardDoubleArrowLeftIcon />
            )}
          </IconButton>
        </div>
        {children}
      </Drawer>
    </Box>
  )
}

export default memo(DesktopSidebar)
