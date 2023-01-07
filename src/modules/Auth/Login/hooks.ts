import { useCallback, useEffect, useMemo, useState } from 'react'

import { blacklistedUser, GRAPHQL_SERVER_HOST } from '~/config'
import { useListSsoLinkLazyQuery } from '~/gqlcodegen/idm/hooks/auth'
import { authLogin } from '~/utils/auth/loginHelper'
import useAuth from '~/utils/auth/useAuth'

const useCustom = () => {
  const { handleLogin } = useAuth()
  const [error, setError] = useState(false)

  const [loadListSsoLink, listSsoLink] = useListSsoLinkLazyQuery({
    context: {
      clientName: GRAPHQL_SERVER_HOST.IDM,
    },
  })

  const memoSsoLink = useMemo(
    () => listSsoLink?.data?.auth?.listSSOLink?.links || [],
    [listSsoLink],
  )

  const handleSubmit = useCallback(
    async (values) => {
      setError(false)
      if (values.username) {
        const seperatedBlockedUser = blacklistedUser?.split(';')

        const anyBlockedUser = seperatedBlockedUser?.find((f) => values.username.includes(f))

        if (anyBlockedUser) {
          setError(true)
          return
        }

        const data = await authLogin(values.username, values.password)
        const token = data?.data?.token?.requestToken?.token
        const refreshToken = data?.data?.token?.requestToken?.refreshToken

        if (token) {
          handleLogin(token, refreshToken)
        } else {
          setError(true)
        }
      }
    },
    [handleLogin],
  )

  useEffect(() => {
    loadListSsoLink()
  }, [loadListSsoLink])

  return {
    data: {
      error,
      memoSsoLink,
    },
    methods: {
      handleSubmit,
    },
  }
}

export default useCustom
