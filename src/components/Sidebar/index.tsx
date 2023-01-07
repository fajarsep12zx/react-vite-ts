import { memo } from 'react'

import {
  Box,
  Drawer,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import clsx from 'classnames'

import MenuPopover from './AccountPopover'
import useCustom from './hooks'
import useStyles from './style'

interface Props {
  routes: any
}

const Sidebar = ({ routes }: Props) => {
  const { data, methods } = useCustom()
  const { classes } = useStyles({ open: data.open })

  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      open={data.open}
      variant="permanent"
    >
      <div className={classes.drawerHead}>
        <Box style={{ display: data.open ? 'block' : 'none' }}>
          <img alt="landing" className={classes.logo} src="/images/sidebar_logo.png" />
        </Box>
        <IconButton className={classes.expandButton} onClick={methods.handleDrawer}>
          {data.open ? (
            <Icon
              className={clsx('fas fa-angle-double-left', classes.iconStyle)}
              fontSize="small"
            />
          ) : (
            <Icon
              className={clsx('fas fa-angle-double-right', classes.iconStyle)}
              fontSize="small"
            />
          )}
        </IconButton>
      </div>
      <List>
        {routes.map(({ id, title, icon, path, defaultPath }) => (
          <ListItem
            button
            disableRipple
            className={clsx(classes.listItem, {
              [classes.activeItem]: data.currentPath === path || data.firstPath === id,
            })}
            key={id}
            onClick={() => {
              if (defaultPath) {
                methods.pushHistory(defaultPath)
              } else {
                methods.pushHistory(path)
              }
            }}
          >
            <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
            <ListItemText className={classes.listItemText}>
              <div className={classes.itemText}>{title}</div>
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <div className={classes.drawerFoot}>
        <MenuPopover open={data.open} />
      </div>
    </Drawer>
  )
}

export default memo(Sidebar)
