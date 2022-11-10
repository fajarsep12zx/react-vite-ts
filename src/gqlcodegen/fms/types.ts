export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Upload: any
}

export enum AccessControl {
  C = 'C',
  R = 'R',
  U = 'U',
  D = 'D',
}

export type AssignDevicesParam = {
  ID: Scalars['String']
  fleetID: Scalars['String']
}

export type AssignDevicesResponse = {
  ID: Scalars['String']
}

export type CommandParam = {
  Id: Scalars['String']
  Type: CommandType
}

export type CommandResponse = {
  Id: Scalars['String']
  Type: CommandType
}

export type CommandsMutation = {
  sendCommand: CommandResponse
}

export type CommandsMutationSendCommandArgs = {
  param: CommandParam
}

export enum CommandType {
  SupersocoLock = 'SUPERSOCO_LOCK',
  SupersocoUnlock = 'SUPERSOCO_UNLOCK',
  SupersocoPoweron = 'SUPERSOCO_POWERON',
  SupersocoOpenseat = 'SUPERSOCO_OPENSEAT',
}

export type CrudResponse = {
  id: Scalars['String']
  message: Scalars['String']
  success: Scalars['Boolean']
}

export type DeviceModelsData = {
  ID: Scalars['String']
  active: Scalars['Boolean']
  brand: Scalars['String']
  model: Scalars['String']
  protocol: Scalars['String']
}

export type DeviceModelsListResponse = {
  pagination?: Maybe<PaginationResult>
  data: Array<DeviceModelsData>
}

export type Devices = {
  detailDevices: DevicesDetailResponse
  listDeviceModel: DeviceModelsListResponse
  listDevices: DevicesListResponse
}

export type DevicesDetailDevicesArgs = {
  id: Scalars['String']
}

export type DevicesListDeviceModelArgs = {
  param?: Maybe<ListParam>
}

export type DevicesListDevicesArgs = {
  param?: Maybe<DevicesListParam>
}

export type DevicesData = {
  ID: Scalars['String']
  active: Scalars['Boolean']
  bluetoothName: Scalars['String']
  imei: Scalars['String']
  model: Scalars['String']
  properties?: Maybe<Array<Properties>>
  sim: Scalars['String']
  status: Scalars['String']
  tags?: Maybe<Array<Properties>>
  vinNO: Scalars['String']
}

export type DevicesDeleteResponse = {
  ID: Scalars['String']
}

export type DevicesDetailResponse = {
  device?: Maybe<DevicesData>
  vehicle?: Maybe<VehicleData>
}

export enum DevicesFilterType {
  None = 'NONE',
  Assigned = 'ASSIGNED',
  Unassigned = 'UNASSIGNED',
}

export type DevicesListParam = {
  search?: Maybe<Scalars['String']>
  filterBy?: Maybe<DevicesFilterType>
  QCFilter?: Maybe<QcFilterType>
  pagination?: Maybe<PaginationParam>
}

export type DevicesListResponse = {
  pagination?: Maybe<PaginationResult>
  lastUpdate: Scalars['String']
  data: Array<DevicesData>
}

export type DevicesMutation = {
  deleteDevices: CrudResponse
  updateDevice: CrudResponse
  assignDevices: AssignDevicesResponse
  singleUpload: File
}

export type DevicesMutationDeleteDevicesArgs = {
  id: Scalars['String']
}

export type DevicesMutationUpdateDeviceArgs = {
  id: Scalars['String']
  param: DevicesParam
}

export type DevicesMutationAssignDevicesArgs = {
  param?: Maybe<AssignDevicesParam>
}

export type DevicesMutationSingleUploadArgs = {
  in: Scalars['Upload']
}

export type DevicesParam = {
  bluetoothName: Scalars['String']
  sim: Scalars['String']
}

export type Field = {
  name: Scalars['String']
  value: Scalars['String']
}

export type FieldInput = {
  name: Scalars['String']
  value: Scalars['String']
}

export type File = {
  name: Scalars['String']
  success: Scalars['Boolean']
}

export type HistoryParam = {
  ID: Scalars['String']
  startDate: Scalars['String']
  endDate: Scalars['String']
}

export type InputData = {
  name: Scalars['String']
  fields: Array<FieldInput>
}

export type LastPositionData = {
  ID: Scalars['String']
  data?: Maybe<VehicleLastPositionData>
}

export enum LastPositionFilterType {
  None = 'NONE',
  Stop = 'STOP',
  Idle = 'IDLE',
  Moving = 'MOVING',
  Offline = 'OFFLINE',
}

export type LastPositionListParam = {
  search?: Maybe<Scalars['String']>
  filterBy?: Maybe<LastPositionFilterType>
  orgID?: Maybe<Scalars['String']>
  pagination?: Maybe<PaginationParam>
}

export type LastPositionResponse = {
  data: Array<LastPositionData>
  pagination?: Maybe<PaginationResult>
}

export type ListParam = {
  search?: Maybe<Scalars['String']>
  pagination?: Maybe<PaginationParam>
}

export type ModelListParam = {
  search?: Maybe<Scalars['String']>
  fleetTypeID?: Maybe<Scalars['String']>
  pagination?: Maybe<PaginationParam>
}

export type Mutation = {
  commands: CommandsMutation
  vehicles: VehiclesMutation
  devices: DevicesMutation
}

export type OutputData = {
  name: Scalars['String']
  fields: Array<Field>
}

export type PaginationParam = {
  active?: Maybe<Scalars['Boolean']>
  limit?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
}

export type PaginationResult = {
  first: Scalars['Int']
  before: Scalars['Int']
  current: Scalars['Int']
  next: Scalars['Int']
  last: Scalars['Int']
  perPage: Scalars['Int']
  totalPage: Scalars['Int']
  totalRecord: Scalars['Int']
}

export type PositionData = {
  altitude: Scalars['Float']
  course: Scalars['Int']
  deviceTime: Scalars['String']
  ignition: Scalars['Boolean']
  latitude: Scalars['Float']
  longitude: Scalars['Float']
  movement: Scalars['Boolean']
  positioningTime: Scalars['String']
  properties?: Maybe<Array<Properties>>
  protocol: Scalars['String']
  serverTime: Scalars['String']
  speed: Scalars['Int']
  imei: Scalars['String']
  status: Scalars['String']
}

export type Properties = {
  field?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export enum QcFilterType {
  None = 'NONE',
  Pass = 'PASS',
  Fail = 'FAIL',
}

export type Query = {
  rules: Rules
  vehicles: Vehicles
  devices: Devices
}

export type ReportData = {
  ID: Scalars['String']
  date: Scalars['String']
  fileUrl: Scalars['String']
  fleetID: Scalars['String']
  fleetName: Scalars['String']
  requestedAt: Scalars['String']
  status: Scalars['String']
  type: Scalars['String']
}

export type ReportListResponse = {
  pagination?: Maybe<PaginationResult>
  data: Array<ReportData>
}

export type ReportParam = {
  date: Scalars['String']
  fleetID: Scalars['String']
  type: Scalars['String']
}

export type Rules = {
  processRules: RulesResponse
}

export type RulesProcessRulesArgs = {
  param: InputData
}

export type RulesResponse = {
  data: OutputData
  success: Scalars['Boolean']
}

export type TripData = {
  startTime: Scalars['String']
  endTime: Scalars['String']
  startCoordinate: Scalars['String']
  endCoordinate: Scalars['String']
  duration: Scalars['String']
  distance: Scalars['String']
}

export type TripHistoryResponse = {
  startTime: Scalars['String']
  endTime: Scalars['String']
  duration: Scalars['String']
  distance: Scalars['Float']
  startCapacity: Scalars['Int']
  endCapacity: Scalars['Int']
  batteryConsumption: Scalars['Int']
  positions: Array<PositionData>
}

export type UserResponse = {
  message: Scalars['String']
  success: Scalars['Boolean']
}

export type VehicleData = {
  ID: Scalars['String']
  active: Scalars['Boolean']
  deviceID: Scalars['String']
  driver: Scalars['String']
  driverID: Scalars['String']
  fleetModels: Scalars['String']
  fleetModelsID: Scalars['String']
  fleetName: Scalars['String']
  fleetType: Scalars['String']
  fleetTypeID?: Maybe<Scalars['String']>
  licensePlate: Scalars['String']
  properties?: Maybe<Array<Properties>>
  status: Scalars['String']
  tags?: Maybe<Array<Properties>>
  tenantID: Scalars['String']
  vinNO: Scalars['String']
}

export enum VehicleFilterType {
  None = 'NONE',
  Assigned = 'ASSIGNED',
  Unassigned = 'UNASSIGNED',
}

export type VehicleLastPositionData = {
  position: PositionData
  vehicle: VehicleData
}

export type VehicleListParam = {
  search?: Maybe<Scalars['String']>
  filterBy?: Maybe<VehicleFilterType>
  pagination?: Maybe<PaginationParam>
}

export type VehicleModelData = {
  ID: Scalars['String']
  active: Scalars['Boolean']
  brand: Scalars['String']
  fleetTypeID: Scalars['String']
  model: Scalars['String']
}

export type VehicleModelsResponse = {
  data: Array<VehicleModelData>
  pagination?: Maybe<PaginationResult>
}

export type VehicleParam = {
  fleetModels: Scalars['String']
  fleetName: Scalars['String']
  licensePlate: Scalars['String']
  vinNO: Scalars['String']
  make: Scalars['String']
  year: Scalars['String']
}

export type Vehicles = {
  detailVehicles: VehiclesDetailResponse
  getReport: Array<TripData>
  lastPosition: LastPositionData
  lastPositionList: LastPositionResponse
  listReport: ReportListResponse
  listVehicleModels: VehicleModelsResponse
  listVehicleTypes: VehicleTypesResponse
  listVehicles: VehiclesListResponse
  positionHistory: Array<PositionData>
  tripHistory?: Maybe<Array<TripHistoryResponse>>
}

export type VehiclesDetailVehiclesArgs = {
  id: Scalars['String']
}

export type VehiclesGetReportArgs = {
  filename: Scalars['String']
}

export type VehiclesLastPositionArgs = {
  id: Scalars['String']
}

export type VehiclesLastPositionListArgs = {
  param?: Maybe<LastPositionListParam>
}

export type VehiclesListReportArgs = {
  param?: Maybe<ListParam>
}

export type VehiclesListVehicleModelsArgs = {
  param?: Maybe<ModelListParam>
}

export type VehiclesListVehicleTypesArgs = {
  param?: Maybe<ListParam>
}

export type VehiclesListVehiclesArgs = {
  param?: Maybe<VehicleListParam>
}

export type VehiclesPositionHistoryArgs = {
  param?: Maybe<HistoryParam>
}

export type VehiclesTripHistoryArgs = {
  param?: Maybe<HistoryParam>
}

export type VehiclesDetailResponse = {
  data?: Maybe<VehicleData>
}

export type VehiclesListResponse = {
  pagination?: Maybe<PaginationResult>
  data: Array<VehicleData>
}

export type VehiclesMutation = {
  addVehicleToGroup: CrudResponse
  deleteVehicles: CrudResponse
  requestReport: ReportData
  singleUpload: File
  updateVehicles: CrudResponse
}

export type VehiclesMutationAddVehicleToGroupArgs = {
  id: Scalars['String']
  orgid: Scalars['String']
}

export type VehiclesMutationDeleteVehiclesArgs = {
  id: Scalars['String']
}

export type VehiclesMutationRequestReportArgs = {
  param?: Maybe<ReportParam>
}

export type VehiclesMutationSingleUploadArgs = {
  in: Scalars['Upload']
}

export type VehiclesMutationUpdateVehiclesArgs = {
  id: Scalars['String']
  param: VehicleParam
}

export type VehicleTypesData = {
  ID: Scalars['String']
  name: Scalars['String']
  description: Scalars['String']
  active: Scalars['Boolean']
}

export type VehicleTypesResponse = {
  data: Array<VehicleTypesData>
  pagination?: Maybe<PaginationResult>
}
