import { ApolloClient, InMemoryCache, HttpLink, from, split } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

import { GRAPHQL_SERVER_HOST } from '~/config'

import { authMiddleWare, expiredTokenMiddleware } from './middleware'

const cache = new InMemoryCache()

export const graphqlDefaultOptions = {
  notifyOnNetworkStatusChange: true,
  pollInterval: 1000 * 60 * 30, // 30 Minutes
}

const queryHttpLinkFMS = new HttpLink({
  uri: GRAPHQL_SERVER_HOST.FMS,
})

const queryHttpLinkIDM = new HttpLink({
  uri: GRAPHQL_SERVER_HOST.IDM,
})

const splittedHTTPLinks = split(
  (operation) => operation.getContext().clientName === GRAPHQL_SERVER_HOST.IDM,
  queryHttpLinkIDM,
  queryHttpLinkFMS,
)

export const client = new ApolloClient({
  cache,
  link: from([expiredTokenMiddleware, authMiddleWare, splittedHTTPLinks]),
})

export const clientUpload = new ApolloClient({
  cache,
  link: from([
    expiredTokenMiddleware,
    authMiddleWare,
    createUploadLink({ uri: GRAPHQL_SERVER_HOST.FMS }),
  ]),
})

export default client
