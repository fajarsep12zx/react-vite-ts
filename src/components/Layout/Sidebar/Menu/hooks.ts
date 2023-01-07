import { useMemo } from 'react'

import { idmHost } from '~/config'
import useAuth from '~/utils/auth/useAuth'

const useCustom = () => {
  const { userData, handleLogout } = useAuth()
  const handleDirectProfile = () => {
    window.location.href = `${idmHost}/settings/profile`
  }

  const profileName = useMemo(() => userData?.userName || '', [userData])

  return {
    profileName,
    handleDirectProfile,
    handleLogout,
  }
}

export default useCustom
