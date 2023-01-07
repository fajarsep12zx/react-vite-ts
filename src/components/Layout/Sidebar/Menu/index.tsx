import { memo } from 'react'

import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import classnames from 'classnames'

import useScreenMobile from '~/utils/hooks/useScreenMobile'

import Bottom from './Bottom'
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

  return (
    <>
      <List className={classes.drawerBody}>
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
      <div className={classes.drawerFoot}>
        <Bottom open={open} />
      </div>
    </>
  )
}

export default memo(MenuSidebar)
