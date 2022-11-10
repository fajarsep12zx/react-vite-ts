import { ApolloLink, Observable } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { cookies as zxAuthCookies } from '@zebraxid/frontend-kit-auth/auth'

import { authRefresh } from '../auth/loginHelper'

const authRefreshObservable = ({ forward, headers, operation }) =>
  new Observable((subscriber) => {
    authRefresh().then(
      (value) => {
        if (subscriber.closed) return
        subscriber.next(value)
        subscriber.complete()
      },
      (err) => subscriber.error(err),
    )
  }).flatMap((token) => {
    if (token) {
      operation.setContext({
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      })
      return forward(operation)
    }
    return Observable.of()
  })

export const expiredTokenMiddleware = onError(({ graphQLErrors, operation, forward }: any) => {
  if (graphQLErrors) {
    const systemErrorExpired = graphQLErrors?.find((err) => err.message === 'internal system error')
    const unauthorized = graphQLErrors?.find((err) => err.message === 'Unauthorized')
    if (unauthorized || systemErrorExpired) {
      const { headers } = operation.getContext()
      return authRefreshObservable({ forward, headers, operation })
    }
  }

  return forward(operation)
})

export const authMiddleWare = new ApolloLink((operation, forward) => {
  operation.setContext(() => {
    const { token } = zxAuthCookies.getToken()

    return {
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  return forward(operation)
})
