import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../types'

const defaultOptions = {}
export type ListSsoLinkQueryVariables = Types.Exact<{ [key: string]: never }>

export type ListSsoLinkQuery = {
  auth: { listSSOLink: { links: Array<Pick<Types.SsoLink, 'name' | 'link'>> } }
}

export type ListGroupQueryVariables = Types.Exact<{
  page: Types.Scalars['Int']
  searchParam: Types.SearchField
  limit: Types.Scalars['Int']
}>

export type ListGroupQuery = {
  auth: {
    listGroup: {
      listOrganizationResponse: Array<
        Pick<Types.OrganizationResponse, 'orgID' | 'orgCode' | 'orgName'> & {
          group: Array<{
            ID: Types.ChildOrganizationResponse['orgID']
            code: Types.ChildOrganizationResponse['orgCode']
            name: Types.ChildOrganizationResponse['orgName']
          }>
        }
      >
      pageInfo: Pick<Types.PageInfo, 'total' | 'limit' | 'page'>
    }
  }
}

export type ListUserQueryVariables = Types.Exact<{
  page: Types.Scalars['Int']
  searchParam: Types.SearchField
  limit: Types.Scalars['Int']
}>

export type ListUserQuery = {
  auth: {
    listUser: {
      listUserResponse: Array<
        Pick<Types.UserResponse, 'ID' | 'userId' | 'name'> & {
          organization: Pick<Types.OrganizationResponse, 'orgID' | 'orgName'>
        }
      >
      pageInfo: Pick<Types.PageInfo, 'total' | 'limit' | 'page'>
    }
  }
}

export type ListOrganizationQueryVariables = Types.Exact<{
  page: Types.Scalars['Int']
  searchParam: Types.SearchField
  limit: Types.Scalars['Int']
  isChild: Types.Scalars['Boolean']
}>

export type ListOrganizationQuery = {
  auth: {
    listOrganization: {
      listOrganizationResponse: Array<Pick<Types.OrganizationResponse, 'orgName'>>
    }
  }
}

export const ListSsoLinkDocument = gql`
  query listSSOLink {
    auth {
      listSSOLink {
        links {
          name
          link
        }
      }
    }
  }
`

/**
 * __useListSsoLinkQuery__
 *
 * To run a query within a React component, call `useListSsoLinkQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSsoLinkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSsoLinkQuery({
 *   variables: {
 *   },
 * });
 */
export function useListSsoLinkQuery(
  baseOptions?: Apollo.QueryHookOptions<ListSsoLinkQuery, ListSsoLinkQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListSsoLinkQuery, ListSsoLinkQueryVariables>(ListSsoLinkDocument, options)
}
export function useListSsoLinkLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListSsoLinkQuery, ListSsoLinkQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListSsoLinkQuery, ListSsoLinkQueryVariables>(
    ListSsoLinkDocument,
    options,
  )
}
export type ListSsoLinkQueryHookResult = ReturnType<typeof useListSsoLinkQuery>
export type ListSsoLinkLazyQueryHookResult = ReturnType<typeof useListSsoLinkLazyQuery>
export const ListGroupDocument = gql`
  query listGroup($page: Int!, $searchParam: SearchField!, $limit: Int!) {
    auth {
      listGroup: listOrganization(
        param: { search: { page: $page, search: $searchParam, limit: $limit }, isChild: false }
      ) {
        listOrganizationResponse {
          orgID
          orgCode
          orgName
          group: childOrg {
            ID: orgID
            code: orgCode
            name: orgName
          }
        }
        pageInfo {
          total
          limit
          page
        }
      }
    }
  }
`

/**
 * __useListGroupQuery__
 *
 * To run a query within a React component, call `useListGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useListGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListGroupQuery({
 *   variables: {
 *      page: // value for 'page'
 *      searchParam: // value for 'searchParam'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useListGroupQuery(
  baseOptions: Apollo.QueryHookOptions<ListGroupQuery, ListGroupQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListGroupQuery, ListGroupQueryVariables>(ListGroupDocument, options)
}
export function useListGroupLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListGroupQuery, ListGroupQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListGroupQuery, ListGroupQueryVariables>(ListGroupDocument, options)
}
export type ListGroupQueryHookResult = ReturnType<typeof useListGroupQuery>
export type ListGroupLazyQueryHookResult = ReturnType<typeof useListGroupLazyQuery>
export const ListUserDocument = gql`
  query listUser($page: Int!, $searchParam: SearchField!, $limit: Int!) {
    auth {
      listUser(param: { page: $page, search: $searchParam, limit: $limit }) {
        listUserResponse {
          ID
          userId
          name
          organization {
            orgID
            orgName
          }
        }
        pageInfo {
          total
          limit
          page
        }
      }
    }
  }
`

/**
 * __useListUserQuery__
 *
 * To run a query within a React component, call `useListUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListUserQuery({
 *   variables: {
 *      page: // value for 'page'
 *      searchParam: // value for 'searchParam'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useListUserQuery(
  baseOptions: Apollo.QueryHookOptions<ListUserQuery, ListUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListUserQuery, ListUserQueryVariables>(ListUserDocument, options)
}
export function useListUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListUserQuery, ListUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListUserQuery, ListUserQueryVariables>(ListUserDocument, options)
}
export type ListUserQueryHookResult = ReturnType<typeof useListUserQuery>
export type ListUserLazyQueryHookResult = ReturnType<typeof useListUserLazyQuery>
export const ListOrganizationDocument = gql`
  query listOrganization(
    $page: Int!
    $searchParam: SearchField!
    $limit: Int!
    $isChild: Boolean!
  ) {
    auth {
      listOrganization(
        param: { search: { page: $page, search: $searchParam, limit: $limit }, isChild: $isChild }
      ) {
        listOrganizationResponse {
          orgName
        }
      }
    }
  }
`

/**
 * __useListOrganizationQuery__
 *
 * To run a query within a React component, call `useListOrganizationQuery` and pass it any options that fit your needs.
 * When your component renders, `useListOrganizationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListOrganizationQuery({
 *   variables: {
 *      page: // value for 'page'
 *      searchParam: // value for 'searchParam'
 *      limit: // value for 'limit'
 *      isChild: // value for 'isChild'
 *   },
 * });
 */
export function useListOrganizationQuery(
  baseOptions: Apollo.QueryHookOptions<ListOrganizationQuery, ListOrganizationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListOrganizationQuery, ListOrganizationQueryVariables>(
    ListOrganizationDocument,
    options,
  )
}
export function useListOrganizationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListOrganizationQuery, ListOrganizationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListOrganizationQuery, ListOrganizationQueryVariables>(
    ListOrganizationDocument,
    options,
  )
}
export type ListOrganizationQueryHookResult = ReturnType<typeof useListOrganizationQuery>
export type ListOrganizationLazyQueryHookResult = ReturnType<typeof useListOrganizationLazyQuery>
