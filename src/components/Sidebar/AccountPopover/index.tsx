import PropTypes from 'prop-types'

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
import { memo } from 'react'

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
        <ListItem className={classes.listItem} button disableRipple onClick={handleProfile}>
          <ListItemIcon className={`${classes.listItemIcon} ${classes.listItemConfigIcon}`}>
            <Icon
              fontSize="small"
              className={clsx('fas fa-user', classes.logo, classes.listItemIcon)}
            />
          </ListItemIcon>
          <ListItemText className={classes.listItemText}>
            <div className={classes.itemText}>Profile</div>
          </ListItemText>
        </ListItem>
        <ListItem className={classes.listItem} onClick={handleLogout} button disableRipple>
          <ListItemIcon className={`${classes.listItemIcon} ${classes.listItemConfigIcon}`}>
            <Icon
              fontSize="small"
              className={clsx('fas fa-sign-out-alt', classes.logo, classes.listItemIcon)}
            />
          </ListItemIcon>
          <ListItemText className={classes.listItemText}>
            <div className={classes.itemText}>Logout</div>
          </ListItemText>
        </ListItem>
      </List>
      <Typography variant="subtitle2" className={classes.footerTitle}>
        Powered by Xtrips
      </Typography>
      <Popover
        id={popoverShown ? 'simple-popover' : undefined}
        open={popoverShown}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
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
