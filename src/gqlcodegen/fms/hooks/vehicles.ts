import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../types'

const defaultOptions = {}
export type VehicleDataFragmentFragment = Pick<
  Types.VehicleData,
  | 'tenantID'
  | 'deviceID'
  | 'fleetModels'
  | 'licensePlate'
  | 'active'
  | 'vinNO'
  | 'driverID'
  | 'driver'
  | 'fleetName'
  | 'ID'
  | 'status'
> & {
  properties?: Types.Maybe<Array<Pick<Types.Properties, 'field' | 'value'>>>
  tags?: Types.Maybe<Array<Pick<Types.Properties, 'field' | 'value'>>>
}

export type VehiclePositionFragmentFragment = Pick<
  Types.PositionData,
  | 'protocol'
  | 'imei'
  | 'status'
  | 'serverTime'
  | 'deviceTime'
  | 'positioningTime'
  | 'latitude'
  | 'longitude'
  | 'altitude'
  | 'ignition'
  | 'movement'
  | 'speed'
  | 'course'
> & {
  properties?: Types.Maybe<Array<Pick<Types.Properties, 'field' | 'value'>>>
}

export type LastPositionListQueryVariables = Types.Exact<{
  filterBy?: Types.Maybe<Types.LastPositionFilterType>
  orgID?: Types.Maybe<Types.Scalars['String']>
  pagination: Types.PaginationParam
  search: Types.Scalars['String']
}>

export type LastPositionListQuery = {
  vehicles: {
    lastPositionList: {
      data: Array<
        Pick<Types.LastPositionData, 'ID'> & {
          data?: Types.Maybe<{
            position: VehiclePositionFragmentFragment
            vehicle: Pick<Types.VehicleData, 'fleetTypeID' | 'fleetModelsID'> &
              VehicleDataFragmentFragment
          }>
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

export type LastPositionAssetOptionsQueryVariables = Types.Exact<{
  orgID?: Types.Maybe<Types.Scalars['String']>
}>

export type LastPositionAssetOptionsQuery = {
  vehicles: {
    lastPositionList: {
      data: Array<{
        data?: Types.Maybe<{ vehicle: Pick<Types.VehicleData, 'ID' | 'vinNO'> }>
      }>
    }
  }
}

export type TripHistoryQueryVariables = Types.Exact<{
  ID: Types.Scalars['String']
  endDate: Types.Scalars['String']
  startDate: Types.Scalars['String']
}>

export type TripHistoryQuery = {
  vehicles: {
    tripHistory?: Types.Maybe<
      Array<
        Pick<
          Types.TripHistoryResponse,
          | 'startTime'
          | 'distance'
          | 'duration'
          | 'endTime'
          | 'startCapacity'
          | 'endCapacity'
          | 'batteryConsumption'
        > & { positions: Array<VehiclePositionFragmentFragment> }
      >
    >
  }
}

export type DetailVehicleQueryVariables = Types.Exact<{
  id: Types.Scalars['String']
}>

export type DetailVehicleQuery = {
  vehicles: {
    lastPosition: Pick<Types.LastPositionData, 'ID'> & {
      data?: Types.Maybe<{
        position: Pick<
          Types.PositionData,
          | 'course'
          | 'status'
          | 'speed'
          | 'positioningTime'
          | 'latitude'
          | 'longitude'
          | 'ignition'
          | 'imei'
        > & {
          properties?: Types.Maybe<Array<Pick<Types.Properties, 'field' | 'value'>>>
        }
        vehicle: Pick<
          Types.VehicleData,
          | 'active'
          | 'deviceID'
          | 'driver'
          | 'driverID'
          | 'fleetModels'
          | 'fleetName'
          | 'ID'
          | 'licensePlate'
          | 'status'
          | 'tenantID'
          | 'vinNO'
        > & {
          properties?: Types.Maybe<Array<Pick<Types.Properties, 'field' | 'value'>>>
          tags?: Types.Maybe<Array<Pick<Types.Properties, 'field' | 'value'>>>
        }
      }>
    }
  }
}

export type GetReportQueryVariables = Types.Exact<{
  filename: Types.Scalars['String']
}>

export type GetReportQuery = {
  vehicles: {
    getReport: Array<
      Pick<
        Types.TripData,
        'startTime' | 'endTime' | 'startCoordinate' | 'endCoordinate' | 'duration' | 'distance'
      >
    >
  }
}

export type ListReportQueryVariables = Types.Exact<{
  pagination: Types.PaginationParam
  search: Types.Scalars['String']
}>

export type ListReportQuery = {
  vehicles: {
    listReport: {
      data: Array<
        Pick<
          Types.ReportData,
          'ID' | 'date' | 'type' | 'fleetID' | 'fleetName' | 'status' | 'fileUrl' | 'requestedAt'
        >
      >
      pagination?: Types.Maybe<
        Pick<
          Types.PaginationResult,
          'totalPage' | 'totalRecord' | 'next' | 'last' | 'current' | 'before' | 'first' | 'perPage'
        >
      >
    }
  }
}

export type ListVehiclesQueryVariables = Types.Exact<{
  filterBy: Types.VehicleFilterType
  pagination: Types.PaginationParam
  search: Types.Scalars['String']
}>

export type ListVehiclesQuery = {
  vehicles: {
    listVehicles: {
      data: Array<
        Pick<
          Types.VehicleData,
          | 'ID'
          | 'tenantID'
          | 'deviceID'
          | 'fleetModels'
          | 'licensePlate'
          | 'active'
          | 'vinNO'
          | 'driverID'
          | 'driver'
          | 'fleetName'
          | 'status'
        > & {
          properties?: Types.Maybe<Array<Pick<Types.Properties, 'field' | 'value'>>>
          tags?: Types.Maybe<Array<Pick<Types.Properties, 'field' | 'value'>>>
        }
      >
    }
  }
}

export type RequestReportMutationVariables = Types.Exact<{
  date: Types.Scalars['String']
  fleetID: Types.Scalars['String']
  type: Types.Scalars['String']
}>

export type RequestReportMutation = {
  vehicles: {
    requestReport: Pick<
      Types.ReportData,
      'status' | 'requestedAt' | 'ID' | 'type' | 'fleetID' | 'fileUrl' | 'date'
    >
  }
}

export type ListVehicleModelsQueryVariables = Types.Exact<{
  param?: Types.Maybe<Types.ModelListParam>
}>

export type ListVehicleModelsQuery = {
  vehicles: {
    listVehicleModels: {
      data: Array<Pick<Types.VehicleModelData, 'model' | 'ID'>>
    }
  }
}

export type ListVehicleTypesQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type ListVehicleTypesQuery = {
  vehicles: {
    listVehicleTypes: {
      data: Array<Pick<Types.VehicleTypesData, 'ID' | 'name'>>
    }
  }
}

export type VehicleSingleUploadMutationVariables = Types.Exact<{
  in: Types.Scalars['Upload']
}>

export type VehicleSingleUploadMutation = {
  vehicles: { singleUpload: Pick<Types.File, 'success' | 'name'> }
}

export type UpdateVehiclesMutationVariables = Types.Exact<{
  id: Types.Scalars['String']
  param: Types.VehicleParam
}>

export type UpdateVehiclesMutation = {
  vehicles: { updateVehicles: Pick<Types.CrudResponse, 'message' | 'success'> }
}

export type DeleteVehiclesMutationVariables = Types.Exact<{
  id: Types.Scalars['String']
}>

export type DeleteVehiclesMutation = {
  vehicles: { deleteVehicles: Pick<Types.CrudResponse, 'message' | 'success'> }
}

export type AddVehicleToGroupMutationVariables = Types.Exact<{
  id: Types.Scalars['String']
  orgid: Types.Scalars['String']
}>

export type AddVehicleToGroupMutation = {
  vehicles: {
    addVehicleToGroup: Pick<Types.CrudResponse, 'message' | 'success'>
  }
}

export const VehicleDataFragmentFragmentDoc = gql`
  fragment vehicleDataFragment on VehicleData {
    tenantID
    deviceID
    fleetModels
    tags {
      field
      value
    }
    licensePlate
    properties {
      field
      value
    }
    active
    vinNO
    driverID
    driver
    fleetName
    ID
    status
  }
`
export const VehiclePositionFragmentFragmentDoc = gql`
  fragment vehiclePositionFragment on PositionData {
    protocol
    imei
    status
    serverTime
    deviceTime
    positioningTime
    latitude
    longitude
    altitude
    ignition
    movement
    speed
    course
    properties {
      field
      value
    }
  }
`
export const LastPositionListDocument = gql`
  query lastPositionList(
    $search: String!
    $pagination: PaginationParam!
    $filterBy: LastPositionFilterType
    $orgID: String
  ) {
    vehicles {
      lastPositionList(
        param: { search: $search, pagination: $pagination, filterBy: $filterBy, orgID: $orgID }
      ) {
        data {
          ID
          data {
            vehicle {
              ...vehicleDataFragment
              fleetTypeID
              fleetModelsID
            }
            position {
              ...vehiclePositionFragment
            }
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
      }
    }
  }
  ${VehicleDataFragmentFragmentDoc}
  ${VehiclePositionFragmentFragmentDoc}
`

/**
 * __useLastPositionListQuery__
 *
 * To run a query within a React component, call `useLastPositionListQuery` and pass it any options that fit your needs.
 * When your component renders, `useLastPositionListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLastPositionListQuery({
 *   variables: {
 *      search: // value for 'search'
 *      pagination: // value for 'pagination'
 *      filterBy: // value for 'filterBy'
 *      orgID: // value for 'orgID'
 *   },
 * });
 */
export function useLastPositionListQuery(
  baseOptions: Apollo.QueryHookOptions<LastPositionListQuery, LastPositionListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<LastPositionListQuery, LastPositionListQueryVariables>(
    LastPositionListDocument,
    options,
  )
}
export function useLastPositionListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LastPositionListQuery, LastPositionListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<LastPositionListQuery, LastPositionListQueryVariables>(
    LastPositionListDocument,
    options,
  )
}
export type LastPositionListQueryHookResult = ReturnType<typeof useLastPositionListQuery>
export type LastPositionListLazyQueryHookResult = ReturnType<typeof useLastPositionListLazyQuery>
export const LastPositionAssetOptionsDocument = gql`
  query lastPositionAssetOptions($orgID: String) {
    vehicles {
      lastPositionList(param: { pagination: { active: false }, orgID: $orgID }) {
        data {
          data {
            vehicle {
              ID
              vinNO
            }
          }
        }
      }
    }
  }
`

/**
 * __useLastPositionAssetOptionsQuery__
 *
 * To run a query within a React component, call `useLastPositionAssetOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLastPositionAssetOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLastPositionAssetOptionsQuery({
 *   variables: {
 *      orgID: // value for 'orgID'
 *   },
 * });
 */
export function useLastPositionAssetOptionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    LastPositionAssetOptionsQuery,
    LastPositionAssetOptionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<LastPositionAssetOptionsQuery, LastPositionAssetOptionsQueryVariables>(
    LastPositionAssetOptionsDocument,
    options,
  )
}
export function useLastPositionAssetOptionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LastPositionAssetOptionsQuery,
    LastPositionAssetOptionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<LastPositionAssetOptionsQuery, LastPositionAssetOptionsQueryVariables>(
    LastPositionAssetOptionsDocument,
    options,
  )
}
export type LastPositionAssetOptionsQueryHookResult = ReturnType<
  typeof useLastPositionAssetOptionsQuery
>
export type LastPositionAssetOptionsLazyQueryHookResult = ReturnType<
  typeof useLastPositionAssetOptionsLazyQuery
>
export const TripHistoryDocument = gql`
  query tripHistory($ID: String!, $startDate: String!, $endDate: String!) {
    vehicles {
      tripHistory(param: { ID: $ID, startDate: $startDate, endDate: $endDate }) {
        startTime
        distance
        duration
        endTime
        startCapacity
        endCapacity
        batteryConsumption
        positions {
          ...vehiclePositionFragment
        }
      }
    }
  }
  ${VehiclePositionFragmentFragmentDoc}
`

/**
 * __useTripHistoryQuery__
 *
 * To run a query within a React component, call `useTripHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useTripHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTripHistoryQuery({
 *   variables: {
 *      ID: // value for 'ID'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useTripHistoryQuery(
  baseOptions: Apollo.QueryHookOptions<TripHistoryQuery, TripHistoryQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TripHistoryQuery, TripHistoryQueryVariables>(TripHistoryDocument, options)
}
export function useTripHistoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TripHistoryQuery, TripHistoryQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TripHistoryQuery, TripHistoryQueryVariables>(
    TripHistoryDocument,
    options,
  )
}
export type TripHistoryQueryHookResult = ReturnType<typeof useTripHistoryQuery>
export type TripHistoryLazyQueryHookResult = ReturnType<typeof useTripHistoryLazyQuery>
export const DetailVehicleDocument = gql`
  query detailVehicle($id: String!) {
    vehicles {
      lastPosition(id: $id) {
        ID
        data {
          position {
            course
            status
            speed
            positioningTime
            latitude
            longitude
            ignition
            imei
            properties {
              field
              value
            }
          }
          vehicle {
            active
            deviceID
            driver
            driverID
            fleetModels
            fleetName
            ID
            licensePlate
            properties {
              field
              value
            }
            status
            tags {
              field
              value
            }
            tenantID
            vinNO
          }
        }
      }
    }
  }
`

/**
 * __useDetailVehicleQuery__
 *
 * To run a query within a React component, call `useDetailVehicleQuery` and pass it any options that fit your needs.
 * When your component renders, `useDetailVehicleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDetailVehicleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDetailVehicleQuery(
  baseOptions: Apollo.QueryHookOptions<DetailVehicleQuery, DetailVehicleQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<DetailVehicleQuery, DetailVehicleQueryVariables>(
    DetailVehicleDocument,
    options,
  )
}
export function useDetailVehicleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<DetailVehicleQuery, DetailVehicleQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<DetailVehicleQuery, DetailVehicleQueryVariables>(
    DetailVehicleDocument,
    options,
  )
}
export type DetailVehicleQueryHookResult = ReturnType<typeof useDetailVehicleQuery>
export type DetailVehicleLazyQueryHookResult = ReturnType<typeof useDetailVehicleLazyQuery>
export const GetReportDocument = gql`
  query getReport($filename: String!) {
    vehicles {
      getReport(filename: $filename) {
        startTime
        endTime
        startCoordinate
        endCoordinate
        duration
        distance
      }
    }
  }
`

/**
 * __useGetReportQuery__
 *
 * To run a query within a React component, call `useGetReportQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReportQuery({
 *   variables: {
 *      filename: // value for 'filename'
 *   },
 * });
 */
export function useGetReportQuery(
  baseOptions: Apollo.QueryHookOptions<GetReportQuery, GetReportQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetReportQuery, GetReportQueryVariables>(GetReportDocument, options)
}
export function useGetReportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetReportQuery, GetReportQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetReportQuery, GetReportQueryVariables>(GetReportDocument, options)
}
export type GetReportQueryHookResult = ReturnType<typeof useGetReportQuery>
export type GetReportLazyQueryHookResult = ReturnType<typeof useGetReportLazyQuery>
export const ListReportDocument = gql`
  query listReport($search: String!, $pagination: PaginationParam!) {
    vehicles {
      listReport(param: { search: $search, pagination: $pagination }) {
        data {
          ID
          date
          type
          fleetID
          fleetName
          status
          fileUrl
          requestedAt
        }
        pagination {
          totalPage
          totalRecord
          next
          last
          current
          before
          first
          perPage
        }
      }
    }
  }
`

/**
 * __useListReportQuery__
 *
 * To run a query within a React component, call `useListReportQuery` and pass it any options that fit your needs.
 * When your component renders, `useListReportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListReportQuery({
 *   variables: {
 *      search: // value for 'search'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useListReportQuery(
  baseOptions: Apollo.QueryHookOptions<ListReportQuery, ListReportQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListReportQuery, ListReportQueryVariables>(ListReportDocument, options)
}
export function useListReportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListReportQuery, ListReportQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListReportQuery, ListReportQueryVariables>(ListReportDocument, options)
}
export type ListReportQueryHookResult = ReturnType<typeof useListReportQuery>
export type ListReportLazyQueryHookResult = ReturnType<typeof useListReportLazyQuery>
export const ListVehiclesDocument = gql`
  query listVehicles(
    $search: String!
    $filterBy: VehicleFilterType!
    $pagination: PaginationParam!
  ) {
    vehicles {
      listVehicles(param: { search: $search, filterBy: $filterBy, pagination: $pagination }) {
        data {
          ID
          tenantID
          deviceID
          fleetModels
          tags {
            field
            value
          }
          licensePlate
          properties {
            field
            value
          }
          active
          vinNO
          driverID
          driver
          fleetName
          status
        }
      }
    }
  }
`

/**
 * __useListVehiclesQuery__
 *
 * To run a query within a React component, call `useListVehiclesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListVehiclesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListVehiclesQuery({
 *   variables: {
 *      search: // value for 'search'
 *      filterBy: // value for 'filterBy'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useListVehiclesQuery(
  baseOptions: Apollo.QueryHookOptions<ListVehiclesQuery, ListVehiclesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListVehiclesQuery, ListVehiclesQueryVariables>(
    ListVehiclesDocument,
    options,
  )
}
export function useListVehiclesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListVehiclesQuery, ListVehiclesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListVehiclesQuery, ListVehiclesQueryVariables>(
    ListVehiclesDocument,
    options,
  )
}
export type ListVehiclesQueryHookResult = ReturnType<typeof useListVehiclesQuery>
export type ListVehiclesLazyQueryHookResult = ReturnType<typeof useListVehiclesLazyQuery>
export const RequestReportDocument = gql`
  mutation requestReport($fleetID: String!, $type: String!, $date: String!) {
    vehicles {
      requestReport(param: { fleetID: $fleetID, type: $type, date: $date }) {
        status
        requestedAt
        ID
        type
        fleetID
        status
        fileUrl
        date
      }
    }
  }
`

/**
 * __useRequestReportMutation__
 *
 * To run a mutation, you first call `useRequestReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestReportMutation, { data, loading, error }] = useRequestReportMutation({
 *   variables: {
 *      fleetID: // value for 'fleetID'
 *      type: // value for 'type'
 *      date: // value for 'date'
 *   },
 * });
 */
export function useRequestReportMutation(
  baseOptions?: Apollo.MutationHookOptions<RequestReportMutation, RequestReportMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RequestReportMutation, RequestReportMutationVariables>(
    RequestReportDocument,
    options,
  )
}
export type RequestReportMutationHookResult = ReturnType<typeof useRequestReportMutation>
export const ListVehicleModelsDocument = gql`
  query listVehicleModels($param: ModelListParam) {
    vehicles {
      listVehicleModels(param: $param) {
        data {
          model
          ID
        }
      }
    }
  }
`

/**
 * __useListVehicleModelsQuery__
 *
 * To run a query within a React component, call `useListVehicleModelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListVehicleModelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListVehicleModelsQuery({
 *   variables: {
 *      param: // value for 'param'
 *   },
 * });
 */
export function useListVehicleModelsQuery(
  baseOptions?: Apollo.QueryHookOptions<ListVehicleModelsQuery, ListVehicleModelsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListVehicleModelsQuery, ListVehicleModelsQueryVariables>(
    ListVehicleModelsDocument,
    options,
  )
}
export function useListVehicleModelsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListVehicleModelsQuery,
    ListVehicleModelsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListVehicleModelsQuery, ListVehicleModelsQueryVariables>(
    ListVehicleModelsDocument,
    options,
  )
}
export type ListVehicleModelsQueryHookResult = ReturnType<typeof useListVehicleModelsQuery>
export type ListVehicleModelsLazyQueryHookResult = ReturnType<typeof useListVehicleModelsLazyQuery>
export const ListVehicleTypesDocument = gql`
  query listVehicleTypes {
    vehicles {
      listVehicleTypes {
        data {
          ID
          name
        }
      }
    }
  }
`

/**
 * __useListVehicleTypesQuery__
 *
 * To run a query within a React component, call `useListVehicleTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListVehicleTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListVehicleTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListVehicleTypesQuery(
  baseOptions?: Apollo.QueryHookOptions<ListVehicleTypesQuery, ListVehicleTypesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListVehicleTypesQuery, ListVehicleTypesQueryVariables>(
    ListVehicleTypesDocument,
    options,
  )
}
export function useListVehicleTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListVehicleTypesQuery, ListVehicleTypesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListVehicleTypesQuery, ListVehicleTypesQueryVariables>(
    ListVehicleTypesDocument,
    options,
  )
}
export type ListVehicleTypesQueryHookResult = ReturnType<typeof useListVehicleTypesQuery>
export type ListVehicleTypesLazyQueryHookResult = ReturnType<typeof useListVehicleTypesLazyQuery>
export const VehicleSingleUploadDocument = gql`
  mutation vehicleSingleUpload($in: Upload!) {
    vehicles {
      singleUpload(in: $in) {
        success
        name
      }
    }
  }
`

/**
 * __useVehicleSingleUploadMutation__
 *
 * To run a mutation, you first call `useVehicleSingleUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVehicleSingleUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [vehicleSingleUploadMutation, { data, loading, error }] = useVehicleSingleUploadMutation({
 *   variables: {
 *      in: // value for 'in'
 *   },
 * });
 */
export function useVehicleSingleUploadMutation(
  baseOptions?: Apollo.MutationHookOptions<
    VehicleSingleUploadMutation,
    VehicleSingleUploadMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<VehicleSingleUploadMutation, VehicleSingleUploadMutationVariables>(
    VehicleSingleUploadDocument,
    options,
  )
}
export type VehicleSingleUploadMutationHookResult = ReturnType<
  typeof useVehicleSingleUploadMutation
>
export const UpdateVehiclesDocument = gql`
  mutation updateVehicles($id: String!, $param: VehicleParam!) {
    vehicles {
      updateVehicles(id: $id, param: $param) {
        message
        success
      }
    }
  }
`

/**
 * __useUpdateVehiclesMutation__
 *
 * To run a mutation, you first call `useUpdateVehiclesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVehiclesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVehiclesMutation, { data, loading, error }] = useUpdateVehiclesMutation({
 *   variables: {
 *      id: // value for 'id'
 *      param: // value for 'param'
 *   },
 * });
 */
export function useUpdateVehiclesMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateVehiclesMutation, UpdateVehiclesMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateVehiclesMutation, UpdateVehiclesMutationVariables>(
    UpdateVehiclesDocument,
    options,
  )
}
export type UpdateVehiclesMutationHookResult = ReturnType<typeof useUpdateVehiclesMutation>
export const DeleteVehiclesDocument = gql`
  mutation deleteVehicles($id: String!) {
    vehicles {
      deleteVehicles(id: $id) {
        message
        success
      }
    }
  }
`

/**
 * __useDeleteVehiclesMutation__
 *
 * To run a mutation, you first call `useDeleteVehiclesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVehiclesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVehiclesMutation, { data, loading, error }] = useDeleteVehiclesMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteVehiclesMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteVehiclesMutation, DeleteVehiclesMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteVehiclesMutation, DeleteVehiclesMutationVariables>(
    DeleteVehiclesDocument,
    options,
  )
}
export type DeleteVehiclesMutationHookResult = ReturnType<typeof useDeleteVehiclesMutation>
export const AddVehicleToGroupDocument = gql`
  mutation addVehicleToGroup($id: String!, $orgid: String!) {
    vehicles {
      addVehicleToGroup(id: $id, orgid: $orgid) {
        message
        success
      }
    }
  }
`

/**
 * __useAddVehicleToGroupMutation__
 *
 * To run a mutation, you first call `useAddVehicleToGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddVehicleToGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addVehicleToGroupMutation, { data, loading, error }] = useAddVehicleToGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *      orgid: // value for 'orgid'
 *   },
 * });
 */
export function useAddVehicleToGroupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddVehicleToGroupMutation,
    AddVehicleToGroupMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddVehicleToGroupMutation, AddVehicleToGroupMutationVariables>(
    AddVehicleToGroupDocument,
    options,
  )
}
export type AddVehicleToGroupMutationHookResult = ReturnType<typeof useAddVehicleToGroupMutation>
