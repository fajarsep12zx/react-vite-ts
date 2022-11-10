import { client as zxAuthClient, cookies as zxAuthCookies } from '@zebraxid/frontend-kit-auth/auth'

import { GRAPHQL_SERVER_HOST } from '~/config'

// Login using zx auth client
export const authLogin = (username: string, password: string) =>
  zxAuthClient
    .getRequestToken(GRAPHQL_SERVER_HOST.IDM, {
      username,
      password,
    })
    .catch((e: any) => JSON.parse(e.message))

// Logout using zx auth client
export const authLogout = async () => {
  const { token } = zxAuthCookies.getToken()
  const response = await zxAuthClient.doLogoutToken(GRAPHQL_SERVER_HOST.IDM, token)

  return response
}

// refresh token using zx auth client
export const authRefresh = async () => {
  const { refreshToken } = zxAuthCookies.getToken()
  const data = await zxAuthClient.getRefreshToken(GRAPHQL_SERVER_HOST.IDM, refreshToken)

  const token = data?.data?.token?.refreshToken?.token
  const newRefreshToken = data?.data?.token?.refreshToken?.refreshToken
  if (token) {
    zxAuthCookies.setToken(token, newRefreshToken)
  } else {
    zxAuthCookies.removeToken()

    window.location.assign('/')
  }

  window.location.reload()
}

// get profile user using zx auth client
export const fetchProfileData = async () => {
  const data = await zxAuthClient.getProfileData(GRAPHQL_SERVER_HOST.IDM)
  return data?.data?.auth?.getProfile
}

// get user websocket channels from JWT token
export const decodeJWTToken = (token: string) => {
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
export const decodeJWTToUserData = async (token: string) => {
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
