import { memo } from 'react'

import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import classnames from 'classnames'
import { ReactSVG } from 'react-svg'

import useScreenMobile from '~/utils/hooks/useScreenMobile'

import useCustom from './hooks'
import useStyles from './style'

interface Props {
  open: boolean
}

const Bottom = ({ open }: Props) => {
  const { classes } = useStyles({ open })
  const { profileName, handleDirectProfile, handleLogout } = useCustom()
  const isMobile = useScreenMobile()

  return (
    <>
      <Box mr={1}>
        <List>
          <ListItemButton className={classes.listItem} onClick={handleDirectProfile}>
            <ListItemIcon className={`${classes.listItemIcon} ${classes.listItemConfigIcon}`}>
              <ReactSVG src="/icons/menu-icon/profile.svg" />
            </ListItemIcon>
            <ListItemText className={classnames({ [classes.listItemText]: !isMobile })}>
              <div className={classes.itemText}>{profileName}</div>
            </ListItemText>
          </ListItemButton>
          <ListItemButton className={classes.listItem} onClick={handleLogout}>
            <ListItemIcon className={`${classes.listItemIcon} ${classes.listItemConfigIcon}`}>
              <ReactSVG src="/icons/menu-icon/logout.svg" />
            </ListItemIcon>
            <ListItemText className={classnames({ [classes.listItemText]: !isMobile })}>
              <div className={classes.itemText}>Logout</div>
            </ListItemText>
          </ListItemButton>
        </List>
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
