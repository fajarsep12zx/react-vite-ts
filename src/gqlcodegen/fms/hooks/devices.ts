import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../types'

const defaultOptions = {}
export type ListDevicesQueryVariables = Types.Exact<{
  QCFilter: Types.QcFilterType
  filterBy: Types.DevicesFilterType
  pagination: Types.PaginationParam
  search: Types.Scalars['String']
}>

export type ListDevicesQuery = {
  devices: {
    listDevices: Pick<Types.DevicesListResponse, 'lastUpdate'> & {
      data: Array<
        Pick<
          Types.DevicesData,
          'ID' | 'active' | 'bluetoothName' | 'imei' | 'sim' | 'model' | 'status' | 'vinNO'
        > & {
          properties?: Types.Maybe<Array<Pick<Types.Properties, 'field' | 'value'>>>
          tags?: Types.Maybe<Array<Pick<Types.Properties, 'field' | 'value'>>>
        }
      >
      pagination?: Types.Maybe<
        Pick<
          Types.PaginationResult,
          'first' | 'before' | 'current' | 'next' | 'last' | 'perPage' | 'totalPage' | 'totalRecord'
        >
      >
    }
  }
}

export type DetailDevicesQueryVariables = Types.Exact<{
  id: Types.Scalars['String']
}>

export type DetailDevicesQuery = {
  devices: {
    detailDevices: {
      device?: Types.Maybe<
        Pick<
          Types.DevicesData,
          'ID' | 'sim' | 'active' | 'bluetoothName' | 'imei' | 'model' | 'status'
        > & {
          properties?: Types.Maybe<Array<Pick<Types.Properties, 'field' | 'value'>>>
          tags?: Types.Maybe<Array<Pick<Types.Properties, 'field' | 'value'>>>
        }
      >
      vehicle?: Types.Maybe<
        Pick<Types.VehicleData, 'vinNO' | 'licensePlate' | 'fleetName' | 'fleetModels'> & {
          properties?: Types.Maybe<Array<Pick<Types.Properties, 'field' | 'value'>>>
        }
      >
    }
  }
}

export type DevicesSingleUploadMutationVariables = Types.Exact<{
  in: Types.Scalars['Upload']
}>

export type DevicesSingleUploadMutation = {
  devices: { singleUpload: Pick<Types.File, 'success' | 'name'> }
}

export type AssignDevicesMutationVariables = Types.Exact<{
  ID: Types.Scalars['String']
  fleetID: Types.Scalars['String']
}>

export type AssignDevicesMutation = {
  devices: { assignDevices: Pick<Types.AssignDevicesResponse, 'ID'> }
}

export type DeleteDevicesMutationVariables = Types.Exact<{
  id: Types.Scalars['String']
}>

export type DeleteDevicesMutation = {
  devices: {
    deleteDevices: Pick<Types.CrudResponse, 'id' | 'success' | 'message'>
  }
}

export type UpdateDevicesMutationVariables = Types.Exact<{
  bluetoothName: Types.Scalars['String']
  id: Types.Scalars['String']
  sim: Types.Scalars['String']
}>

export type UpdateDevicesMutation = {
  devices: {
    updateDevice: Pick<Types.CrudResponse, 'id' | 'success' | 'message'>
  }
}

export const ListDevicesDocument = gql`
  query listDevices(
    $search: String!
    $pagination: PaginationParam!
    $filterBy: DevicesFilterType!
    $QCFilter: QCFilterType!
  ) {
    devices {
      listDevices(
        param: {
          search: $search
          pagination: $pagination
          filterBy: $filterBy
          QCFilter: $QCFilter
        }
      ) {
        data {
          ID
          active
          bluetoothName
          imei
          sim
          model
          status
          vinNO
          properties {
            field
            value
          }
          tags {
            field
            value
          }
        }
        pagination {
          first
          before
          current
          next
          last
          perPage
          totalPage
          totalRecord
        }
        lastUpdate
      }
    }
  }
`

/**
 * __useListDevicesQuery__
 *
 * To run a query within a React component, call `useListDevicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListDevicesQuery({
 *   variables: {
 *      search: // value for 'search'
 *      pagination: // value for 'pagination'
 *      filterBy: // value for 'filterBy'
 *      QCFilter: // value for 'QCFilter'
 *   },
 * });
 */
export function useListDevicesQuery(
  baseOptions: Apollo.QueryHookOptions<ListDevicesQuery, ListDevicesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListDevicesQuery, ListDevicesQueryVariables>(ListDevicesDocument, options)
}
export function useListDevicesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListDevicesQuery, ListDevicesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListDevicesQuery, ListDevicesQueryVariables>(
    ListDevicesDocument,
    options,
  )
}
export type ListDevicesQueryHookResult = ReturnType<typeof useListDevicesQuery>
export type ListDevicesLazyQueryHookResult = ReturnType<typeof useListDevicesLazyQuery>
export const DetailDevicesDocument = gql`
  query detailDevices($id: String!) {
    devices {
      detailDevices(id: $id) {
        vehicle {
          vinNO
          licensePlate
          fleetName
          fleetModels
          properties {
            field
            value
          }
        }
        device {
          ID
          sim
          active
          bluetoothName
          imei
          model
          status
          properties {
            field
            value
          }
          tags {
            field
            value
          }
        }
      }
    }
  }
`

/**
 * __useDetailDevicesQuery__
 *
 * To run a query within a React component, call `useDetailDevicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDetailDevicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDetailDevicesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDetailDevicesQuery(
  baseOptions: Apollo.QueryHookOptions<DetailDevicesQuery, DetailDevicesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<DetailDevicesQuery, DetailDevicesQueryVariables>(
    DetailDevicesDocument,
    options,
  )
}
export function useDetailDevicesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<DetailDevicesQuery, DetailDevicesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<DetailDevicesQuery, DetailDevicesQueryVariables>(
    DetailDevicesDocument,
    options,
  )
}
export type DetailDevicesQueryHookResult = ReturnType<typeof useDetailDevicesQuery>
export type DetailDevicesLazyQueryHookResult = ReturnType<typeof useDetailDevicesLazyQuery>
export const DevicesSingleUploadDocument = gql`
  mutation devicesSingleUpload($in: Upload!) {
    devices {
      singleUpload(in: $in) {
        success
        name
      }
    }
  }
`

/**
 * __useDevicesSingleUploadMutation__
 *
 * To run a mutation, you first call `useDevicesSingleUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDevicesSingleUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [devicesSingleUploadMutation, { data, loading, error }] = useDevicesSingleUploadMutation({
 *   variables: {
 *      in: // value for 'in'
 *   },
 * });
 */
export function useDevicesSingleUploadMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DevicesSingleUploadMutation,
    DevicesSingleUploadMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DevicesSingleUploadMutation, DevicesSingleUploadMutationVariables>(
    DevicesSingleUploadDocument,
    options,
  )
}
export type DevicesSingleUploadMutationHookResult = ReturnType<
  typeof useDevicesSingleUploadMutation
>
export const AssignDevicesDocument = gql`
  mutation assignDevices($ID: String!, $fleetID: String!) {
    devices {
      assignDevices(param: { ID: $ID, fleetID: $fleetID }) {
        ID
      }
    }
  }
`

/**
 * __useAssignDevicesMutation__
 *
 * To run a mutation, you first call `useAssignDevicesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAssignDevicesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [assignDevicesMutation, { data, loading, error }] = useAssignDevicesMutation({
 *   variables: {
 *      ID: // value for 'ID'
 *      fleetID: // value for 'fleetID'
 *   },
 * });
 */
export function useAssignDevicesMutation(
  baseOptions?: Apollo.MutationHookOptions<AssignDevicesMutation, AssignDevicesMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AssignDevicesMutation, AssignDevicesMutationVariables>(
    AssignDevicesDocument,
    options,
  )
}
export type AssignDevicesMutationHookResult = ReturnType<typeof useAssignDevicesMutation>
export const DeleteDevicesDocument = gql`
  mutation deleteDevices($id: String!) {
    devices {
      deleteDevices(id: $id) {
        id
        success
        message
      }
    }
  }
`

/**
 * __useDeleteDevicesMutation__
 *
 * To run a mutation, you first call `useDeleteDevicesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDevicesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDevicesMutation, { data, loading, error }] = useDeleteDevicesMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDevicesMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteDevicesMutation, DeleteDevicesMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteDevicesMutation, DeleteDevicesMutationVariables>(
    DeleteDevicesDocument,
    options,
  )
}
export type DeleteDevicesMutationHookResult = ReturnType<typeof useDeleteDevicesMutation>
export const UpdateDevicesDocument = gql`
  mutation updateDevices($id: String!, $sim: String!, $bluetoothName: String!) {
    devices {
      updateDevice(id: $id, param: { sim: $sim, bluetoothName: $bluetoothName }) {
        id
        success
        message
      }
    }
  }
`

/**
 * __useUpdateDevicesMutation__
 *
 * To run a mutation, you first call `useUpdateDevicesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDevicesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDevicesMutation, { data, loading, error }] = useUpdateDevicesMutation({
 *   variables: {
 *      id: // value for 'id'
 *      sim: // value for 'sim'
 *      bluetoothName: // value for 'bluetoothName'
 *   },
 * });
 */
export function useUpdateDevicesMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateDevicesMutation, UpdateDevicesMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateDevicesMutation, UpdateDevicesMutationVariables>(
    UpdateDevicesDocument,
    options,
  )
}
export type UpdateDevicesMutationHookResult = ReturnType<typeof useUpdateDevicesMutation>
