import PropTypes from 'prop-types'
import { memo } from 'react'

import {
  Popover,
  ListItemIcon,
  MenuItem,
  Icon,
  Box,
  ListItem,
  List,
  ListItemText,
  Typography,
} from '@mui/material'
import clsx from 'classnames'

import useAuth from '~/utils/auth/useAuth'

import useCustom from './hooks'
import useStyles from './style'

const MenuPopover = ({ open }) => {
  const {
    anchorEl,
    handleClose,
    // handlePopoverShown,
    handleProfile,
    popoverShown,
  } = useCustom()
  const { classes } = useStyles({ open })
  const { handleLogout } = useAuth()

  return (
    <>
      <List>
        <ListItem button disableRipple className={classes.listItem} onClick={handleProfile}>
          <ListItemIcon className={`${classes.listItemIcon} ${classes.listItemConfigIcon}`}>
            <Icon
              className={clsx('fas fa-user', classes.logo, classes.listItemIcon)}
              fontSize="small"
            />
          </ListItemIcon>
          <ListItemText className={classes.listItemText}>
            <div className={classes.itemText}>Profile</div>
          </ListItemText>
        </ListItem>
        <ListItem button disableRipple className={classes.listItem} onClick={handleLogout}>
          <ListItemIcon className={`${classes.listItemIcon} ${classes.listItemConfigIcon}`}>
            <Icon
              className={clsx('fas fa-sign-out-alt', classes.logo, classes.listItemIcon)}
              fontSize="small"
            />
          </ListItemIcon>
          <ListItemText className={classes.listItemText}>
            <div className={classes.itemText}>Logout</div>
          </ListItemText>
        </ListItem>
      </List>
      <Typography className={classes.footerTitle} variant="subtitle2">
        Powered by Xtrips
      </Typography>
      <Popover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorEl={anchorEl}
        id={popoverShown ? 'simple-popover' : undefined}
        open={popoverShown}
        onClose={handleClose}
      >
        <Box px={2} py={3}>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Icon className="fas fa-sign-out-alt" fontSize="small" />
            </ListItemIcon>
            <span>Logout</span>
          </MenuItem>
        </Box>
      </Popover>
    </>
  )
}

MenuPopover.defaultProps = {
  open: true,
}

MenuPopover.propTypes = {
  open: PropTypes.bool,
}

export default memo(MenuPopover)
