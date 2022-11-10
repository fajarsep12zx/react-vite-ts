import React, { useState } from 'react'

import { cookies as zxAuthCookies } from '@zebraxid/frontend-kit-auth/auth'

import { decodeJWTToUserData } from './loginHelper'

interface AuthContextProps {
  isLoggedIn: boolean
  permissions: any
  userData: any
  setIsLoggedIn?: (isLoggin: boolean) => void
  setPermissions?: (permissions: any) => void
  setUserData?: (userData: any) => void
}

export const AuthContext = React.createContext<Partial<AuthContextProps>>({})

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(zxAuthCookies.getToken()?.token))
  const [userData, setUserData] = useState(decodeJWTToUserData(zxAuthCookies.getToken()?.token))

  const [permissions, setPermissions] = useState([])
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        permissions,
        setPermissions,
        userData,
        setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
