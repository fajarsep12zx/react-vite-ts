import React, { useState } from 'react'

import { cookies as zxAuthCookies } from '@zebraxid/frontend-kit-auth/auth'

import { LOCAL_STORAGE_KEY_USER } from '~/config/constants'
import * as Storage from '~/utils/localStorage'

interface AuthContextProps {
  isLoggedIn: boolean
  permissions: any
  setIsLoggedIn: (isLoggin: boolean) => void
  setPermissions: (permissions: any) => void
  setUserData: (userData: any) => void
  userData: any
}

export const AuthContext = React.createContext<Partial<AuthContextProps>>({})

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(zxAuthCookies.getToken()?.token))
  const [userData, setUserData] = useState(Storage.load(LOCAL_STORAGE_KEY_USER))
  const [permissions, setPermissions] = useState([])

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        permissions,
        setIsLoggedIn,
        setPermissions,
        setUserData,
        userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
