import { client as zxAuthClient, cookies as zxAuthCookies } from '@zebraxid/frontend-kit-auth/auth'

import { ALLOWED_DOMAINS, GRAPHQL_SERVER_HOST } from '~/config'
import { LOCAL_STORAGE_KEY_USER } from '~/config/constants'
import * as LS from '~/utils/localStorage'

// Login using zx auth client
export const authLogin = (username, password) =>
  zxAuthClient
    .getRequestToken(GRAPHQL_SERVER_HOST.IDM, {
      username,
      password,
    })
    .catch((e) => JSON.parse(e.message))

// Logout using zx auth client
export const authLogout = async () => {
  const { token } = zxAuthCookies.getToken()
  const response = await zxAuthClient.doLogoutToken(GRAPHQL_SERVER_HOST.IDM, token)

  return response
}

// get profile user using zx auth client
export const fetchProfileData = async () => {
  const data = await zxAuthClient.getProfileData(GRAPHQL_SERVER_HOST.IDM)
  return data?.data?.auth?.getProfile
}

// get user websocket channels from JWT token
export const decodeJWTToken = (token) => {
  if (token) {
    const userTokenData = zxAuthClient.decodeJWT(token)

    const { channels } = userTokenData

    if (userTokenData) {
      return {
        channels,
      }
    }
  }

  return null
}

// get profile user using zx auth client JWT
export const decodeJWTToUserData = async (token) => {
  if (token) {
    const profileData = await fetchProfileData()
    const userTokenData = decodeJWTToken(token)
    if (profileData && userTokenData) {
      return {
        ...userTokenData,
        ID: profileData?.id,
        userID: profileData?.userID,
        userName: profileData?.userName,
        userAccess: profileData?.userAccess,
        userOrg: profileData?.userOrg,
        userProd: profileData?.userProd,
        enabled: profileData?.enabled,
        location: profileData?.location,
        mustChangePwd: profileData?.mustChangePwd,
        phone: profileData?.phone,
        authProvider: profileData?.authProvider,
      }
    }
  }

  return null
}

// refresh token using zx auth client
export const authRefresh = async () => {
  const { token } = await zxAuthClient.doRefreshToken(GRAPHQL_SERVER_HOST.IDM, ALLOWED_DOMAINS)

  if (token) {
    const profileData = await decodeJWTToUserData(token)
    LS.set(LOCAL_STORAGE_KEY_USER, profileData)
  } else {
    LS.remove(LOCAL_STORAGE_KEY_USER)
    window.location.assign('/')
    return null
  }

  return token
}
