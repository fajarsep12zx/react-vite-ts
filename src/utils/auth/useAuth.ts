import { useContext, useCallback } from 'react'

import { cookies as zxAuthCookies } from '@zebraxid/frontend-kit-auth/auth'

import { ALLOWED_DOMAINS } from '~/config'
import { LOCAL_STORAGE_KEY_USER } from '~/config/constants'
import * as LS from '~/utils/localStorage'

import graphqlClient from '../apollo/client'

import { AuthContext } from './AuthProvider'
import { authLogout, decodeJWTToUserData } from './loginHelper'

const useAuth = () => {
  const { isLoggedIn, setIsLoggedIn, userData, setUserData } = useContext(AuthContext)

  const handleFetchProfile = useCallback(async () => {
    const jwtToken = zxAuthCookies.getToken()?.token

    const userMetaData = await decodeJWTToUserData(jwtToken)

    if (userMetaData) {
      setUserData?.(userMetaData)
      LS.set(LOCAL_STORAGE_KEY_USER, userMetaData)
    }
  }, [])

  const handleLogin = useCallback(
    async (token, refreshToken) => {
      zxAuthCookies.setToken(token, refreshToken, ALLOWED_DOMAINS)
      setIsLoggedIn?.(true)

      const userMetaData = await decodeJWTToUserData(token)

      if (userMetaData) {
        setUserData?.(userMetaData)
        LS.set(LOCAL_STORAGE_KEY_USER, userMetaData)
      }
    },
    [setIsLoggedIn, setUserData],
  )

  const handleLogout = useCallback(async () => {
    await authLogout().catch()
    setIsLoggedIn?.(false)

    setUserData?.(null)
    zxAuthCookies.removeToken(ALLOWED_DOMAINS)

    LS.remove(LOCAL_STORAGE_KEY_USER)

    await graphqlClient.clearStore()
  }, [setIsLoggedIn])

  const isPermissionGranted = useCallback(
    (permission) => {
      if (permission === 'ALL') return true

      const permissions = userData?.userAccess?.permission

      return permissions?.includes(permission) || false
    },
    [userData],
  )

  return {
    handleFetchProfile,
    handleLogin,
    handleLogout,
    isLoggedIn,
    isPermissionGranted,
    setIsLoggedIn,
    setUserData,
    token: zxAuthCookies.getToken()?.token || '',
    userData,
  }
}

export default useAuth
