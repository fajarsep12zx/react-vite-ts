import { useContext, useCallback, useMemo } from 'react'

import { cookies as zxAuthCookies } from '@zebraxid/frontend-kit-auth/auth'
import isEqual from 'lodash-es/isEqual'

import { LOCAL_STORAGE_KEY_USER } from '~/config/constants'
import * as LS from '~/utils/localStorage'

import graphqlClient from '../apollo/client'

import { AuthContext } from './AuthProvider'
import { authLogout, decodeJWTToken, decodeJWTToUserData } from './loginHelper'

const useAuth = () => {
  const { isLoggedIn, setIsLoggedIn, setPermissions, userData, setUserData } =
    useContext(AuthContext)

  const handleLogin = useCallback(
    (token, refreshToken) => {
      zxAuthCookies.setToken(token, refreshToken)
      setIsLoggedIn?.(true)
    },
    [setIsLoggedIn],
  )

  const handleLogout = useCallback(async () => {
    await authLogout().catch()
    setIsLoggedIn?.(false)
    zxAuthCookies.removeToken()
    LS.remove(LOCAL_STORAGE_KEY_USER)
    await graphqlClient.clearStore()
  }, [setIsLoggedIn])

  const userInfoStorage = useMemo(() => LS.load(LOCAL_STORAGE_KEY_USER), [])

  const loadUserProfileData = useCallback(async () => {
    const { token } = zxAuthCookies.getToken()
    try {
      const userMetaData = await decodeJWTToUserData(token)
      if (userMetaData) {
        setUserData?.(userMetaData)

        if (!userInfoStorage && !isEqual(userMetaData, userInfoStorage)) {
          LS.set(LOCAL_STORAGE_KEY_USER, userMetaData)
        }

        setPermissions?.(userMetaData?.userAccess?.permission || [])
      } else {
        handleLogout()
      }
    } catch (err) {
      handleLogout()
    }
  }, [setUserData, setPermissions, handleLogout])

  const getUserInformation = useCallback(() => {
    let user
    try {
      user = typeof userData === 'object' ? userData : JSON.parse(userData)
    } catch (e) {} // eslint-disable-line no-empty
    return user
  }, [userData])

  const getUserChannels = useCallback(() => {
    const { token } = zxAuthCookies.getToken()
    const userMetaData = decodeJWTToken(token)

    return userMetaData?.channels || []
  }, [])

  return {
    getUserChannels,
    getUserInformation,
    handleLogin,
    handleLogout,
    isLoggedIn,
    loadUserProfileData,
    setIsLoggedIn,
    setUserData,
    token: zxAuthCookies.getToken()?.token || '',
    userData,
    userInfoStorage,
  }
}

export default useAuth
