import React from 'react'
import { memo } from 'react'

import { Close } from '@mui/icons-material'
import { Drawer, Box, IconButton } from '@mui/material'

import { colors } from '~/styles/colors'
import { fontSize } from '~/styles/theme'

import NavbarMobile from '../../NavbarMobile'

import useStyle from './style'

interface Props {
  children: React.ReactNode
  handleClickToggle: () => void
  open: boolean
}

const MobileSidebar = ({ children, open, handleClickToggle }: Props) => {
  const { classes } = useStyle()
  return (
    <>
      <NavbarMobile handleClickExpandMenu={handleClickToggle} />
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        id="main-menu-drawer-mobile"
        open={open}
        onClose={handleClickToggle}
      >
        <Box alignItems="center" display="flex">
          <Box color={colors.White} flexGrow={1} fontSize={fontSize[18]} fontWeight="bold" ml={3}>
            Menu
          </Box>
          <IconButton aria-label="burger-menu-btn" onClick={handleClickToggle}>
            <Box fontSize={fontSize[40]}>
              <Close fontSize="inherit" htmlColor={colors.White} />
            </Box>
          </IconButton>
        </Box>
        <Box>{children}</Box>
      </Drawer>
    </>
  )
}

export default memo(MobileSidebar)
