import { useEffect, useState, useMemo, useCallback } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'

import useAuth from '~/utils/auth/useAuth'
import useBoolean from '~/utils/hooks/useBoolean'
import useScreenMobile from '~/utils/hooks/useScreenMobile'

const useCustom = () => {
  const { isPermissionGranted } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const { detail, id } = useParams<any>()
  const isMobile = useScreenMobile()

  const [open, setOpen] = useState(true)
  const toggleMobileDrawer = useBoolean()

  const [currentPath, setPath] = useState('')

  const handleDrawer = () => {
    setOpen(!open)
  }
  const pushHistory = useCallback(
    (path) => {
      navigate(path)

      if (isMobile) {
        toggleMobileDrawer.toggle()
      }
    },
    [navigate, isMobile, toggleMobileDrawer],
  )

  const firstPath = useMemo(() => location.pathname.split('/')[1], [location])

  useEffect(() => {
    setPath(location.pathname)
  }, [location])

  return {
    data: {
      currentPath,
      detail,
      firstPath,
      id,
      open,
      toggleMobileDrawer,
    },
    methods: {
      handleDrawer,
      isPermissionGranted,
      pushHistory,
    },
  }
}

export default useCustom
