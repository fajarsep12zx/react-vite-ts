import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { idmHost } from '~/config'

const useCustom = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [popoverShown, setPopoverShown] = useState(false)
  const navigate = useNavigate()

  const handleClose = () => {
    setPopoverShown(false)
  }

  const handleProfile = () => {
    window.location.href = `${idmHost}/settings/profile`
  }

  const handlePopoverShown = (value) => (e) => {
    setPopoverShown(value)
    setAnchorEl(e.currentTarget)
  }

  const handleDirectMenu = (path) => {
    navigate(path)
    handleClose()
  }

  return {
    anchorEl,
    handleClose,
    handleDirectMenu,
    handlePopoverShown,
    handleProfile,
    popoverShown,
  }
}

export default useCustom
