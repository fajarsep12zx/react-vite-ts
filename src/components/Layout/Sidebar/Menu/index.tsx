import { memo } from 'react'

import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Divider from '@mui/material/Divider'
import classnames from 'classnames'
import { ReactSVG } from 'react-svg'

import { colors } from '~/styles/colors'
import useScreenMobile from '~/utils/hooks/useScreenMobile'

import Bottom from './Bottom'
import useCustom from './hooks'
import useStyles from './style'

interface Props {
  currentPath: string
  firstPath: string
  isPermissionGranted: (permission: string) => boolean
  open: boolean
  pushHistory: (path: string) => void
  routes: any[]
}

const MenuSidebar = ({
  currentPath,
  firstPath,
  isPermissionGranted,
  open,
  pushHistory,
  routes,
}: Props) => {
  const { classes } = useStyles({ open })
  const isMobile = useScreenMobile()
  const { profileName, handleDirectProfile, handleLogout } = useCustom()

  return (
    <div className={classes.drawerWrapper}>
      <List
        className={classes.drawerBody}
        subheader={<Box className={classes.listSubHeader}>Overview</Box>}
      >
        {routes.map(({ id, title, icon, path, defaultPath, permission }) => {
          const permitted = isPermissionGranted(permission)

          if (!permitted) return null

          return (
            <ListItemButton
              className={classnames(classes.listItem, {
                [classes.activeItem]: currentPath === path || firstPath === id,
              })}
              key={id}
              onClick={() => {
                if (defaultPath) {
                  pushHistory(defaultPath)
                } else {
                  pushHistory(path)
                }
              }}
            >
              <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
              <ListItemText className={classnames({ [classes.listItemText]: !isMobile })}>
                <div
                  className={classnames({
                    [classes.itemText]: title.length < 20,
                    [classes.itemTextSm]: title.length >= 20,
                  })}
                >
                  {title}
                </div>
              </ListItemText>
            </ListItemButton>
          )
        })}
      </List>
      <Divider
        sx={{
          my: 6,
          mx: 3,
        }}
        color={colors.neutral[500]}
      />
      <List
        className={classes.drawerBody}
        subheader={<Box className={classes.listSubHeader}>Account</Box>}
      >
        <ListItemButton className={classes.listItem} onClick={handleDirectProfile}>
          <ListItemIcon className={classes.listItemIcon}>
            <ReactSVG src="/icons/menu-icon/profile.svg" />
          </ListItemIcon>
          <ListItemText className={classnames({ [classes.listItemText]: !isMobile })}>
            <div className={classes.itemText}>{profileName}</div>
          </ListItemText>
        </ListItemButton>
        <ListItemButton className={classes.listItem} onClick={handleLogout}>
          <ListItemIcon className={classes.listItemIcon}>
            <ReactSVG src="/icons/menu-icon/logout.svg" />
          </ListItemIcon>
          <ListItemText className={classnames({ [classes.listItemText]: !isMobile })}>
            <div className={classes.itemText}>Logout</div>
          </ListItemText>
        </ListItemButton>
      </List>
      <Divider />
      <div className={classes.drawerFoot}>
        <Bottom open={open} />
      </div>
    </div>
  )
}

export default memo(MenuSidebar)
