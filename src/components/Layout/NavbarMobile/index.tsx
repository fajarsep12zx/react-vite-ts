import { memo } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Toolbar, Box, IconButton } from '@mui/material'

import { colors } from '~/styles/colors'
import { fontSize } from '~/styles/theme'

import useStyle from './style'

interface Props {
  handleClickExpandMenu: () => void
}

const NavbarMobile = ({ handleClickExpandMenu }: Props) => {
  const { classes } = useStyle()

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <Box alignItems="center" display="flex">
          {/* Expand button */}
          <IconButton
            aria-label="burger-menu-btn"
            id="account-navbar-btn"
            onClick={handleClickExpandMenu}
          >
            <Box fontSize={fontSize[40]}>
              <MenuIcon fontSize="inherit" htmlColor={colors.White} />
            </Box>
          </IconButton>

          {/* Image logo */}
          <img alt="logo" className={classes.imgLogo} src="/public/brands/logo-fleeto-white.svg" />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default memo(NavbarMobile)
