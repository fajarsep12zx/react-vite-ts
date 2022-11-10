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
}

export enum AccessControl {
  C = 'C',
  R = 'R',
  U = 'U',
  D = 'D',
}

export type AttributePolicyPayload = {
  ID: Scalars['String']
  name: Scalars['String']
  productID: Scalars['String']
  orgID: Scalars['String']
  moduleCode: Scalars['String']
  attribute: Scalars['String']
}

export type AttributePolicyResponse = {
  id: Scalars['String']
  name: Scalars['String']
  product: Scalars['String']
  organization: Scalars['String']
  module: Scalars['String']
  attribute: Scalars['String']
}

export type AuditListParam = {
  search: Scalars['String']
  date: Scalars['String']
  limit: Scalars['Int']
  page: Scalars['Int']
}

export type AuditListResponse = {
  pageInfo: PageInfo
  auditRecords: Array<AuditRecord>
}

export type AuditQuery = {
  listAudit: AuditListResponse
}

export type AuditQueryListAuditArgs = {
  param: AuditListParam
}

export type AuditRecord = {
  id: Scalars['String']
  timestamp: Scalars['String']
  userName: Scalars['String']
  email: Scalars['String']
  role: Scalars['String']
  action: Scalars['String']
  status: Scalars['String']
  product: Scalars['String']
  organization: Scalars['String']
  auditDetails: AuditRecordDetails
}

export type AuditRecordDetails = {
  details: Scalars['String']
}

export type Auth = {
  listSSOLink: SsoLinkResponse
  listProduct: ListResponse
  listProductOrganization: ListResponse
  listOrganization: ListResponse
  listPermission: ListResponse
  listRole: ListResponse
  listRolePermission: ListResponse
  listUser: ListResponse
  getProfile: ProfileResponse
  listAttributePolicy: ListResponse
  listCasbinPolicy: ListResponse
}

export type AuthListProductArgs = {
  param?: Maybe<SearchParam>
}

export type AuthListProductOrganizationArgs = {
  param?: Maybe<SearchParam>
}

export type AuthListOrganizationArgs = {
  param?: Maybe<ListOrganizationParam>
}

export type AuthListPermissionArgs = {
  param?: Maybe<SearchParam>
}

export type AuthListRoleArgs = {
  param?: Maybe<SearchParam>
}

export type AuthListRolePermissionArgs = {
  param?: Maybe<SearchParam>
}

export type AuthListUserArgs = {
  param?: Maybe<SearchParam>
}

export type AuthListAttributePolicyArgs = {
  param?: Maybe<SearchParam>
}

export type AuthListCasbinPolicyArgs = {
  param?: Maybe<ListCasbinPolicyParam>
}

export enum Auth_Provider {
  Internal = 'Internal',
  Microsoft = 'Microsoft',
  Google = 'Google',
}

export type AuthMutation = {
  createProduct: ProductResponse
  updateProduct: ProductResponse
  deleteProduct: ProductResponse
  createProductOrganization: ProductResponse
  updateProductOrganization: ProductResponse
  deleteProductOrganization: ProductResponse
  createOrganization: Response
  updateOrganization: Response
  deleteOrganization: Response
  bulkAddGroupMember: Response
  deleteGroup: Response
  createPermission: Response
  updatePermission: Response
  deletePermission: Response
  createRole: Response
  updateRole: Response
  deleteRole: Response
  createRolePermission: Response
  updateRolePermission: Response
  deleteRolePermission: Response
  createUser: Response
  updateUser: Response
  deleteUser: Response
  changePassword: Response
  resetPassword: Response
  oneTimePassword: Response
  updateProfile: Response
  addCasbinPolicy: Response
  removeCasbinPolicy: Response
  validateCasbinPolicy: Response
  createAttributePolicy: Response
  updateAttributePolicy: Response
  deleteAttributePolicy: Response
}

export type AuthMutationCreateProductArgs = {
  data?: Maybe<ProductPayload>
}

export type AuthMutationUpdateProductArgs = {
  id: Scalars['String']
  data?: Maybe<ProductPayload>
  changes: Scalars['String']
}

export type AuthMutationDeleteProductArgs = {
  id: Scalars['String']
  changes: Scalars['String']
}

export type AuthMutationCreateProductOrganizationArgs = {
  data?: Maybe<ProductOrganizationPayload>
}

export type AuthMutationUpdateProductOrganizationArgs = {
  id: Scalars['String']
  data?: Maybe<ProductOrganizationPayload>
  changes: Scalars['String']
}

export type AuthMutationDeleteProductOrganizationArgs = {
  id?: Maybe<ProductOrganizationPayload>
  changes: Scalars['String']
}

export type AuthMutationCreateOrganizationArgs = {
  data?: Maybe<OrganizationPayload>
}

export type AuthMutationUpdateOrganizationArgs = {
  id: Scalars['String']
  data?: Maybe<OrganizationPayload>
  changes: Scalars['String']
}

export type AuthMutationDeleteOrganizationArgs = {
  id: Scalars['String']
  changes: Scalars['String']
}

export type AuthMutationBulkAddGroupMemberArgs = {
  data?: Maybe<BulkAddGroupMemberPayload>
}

export type AuthMutationDeleteGroupArgs = {
  id: Scalars['String']
  changes: Scalars['String']
}

export type AuthMutationCreatePermissionArgs = {
  data?: Maybe<PermissionPayload>
}

export type AuthMutationUpdatePermissionArgs = {
  id: Scalars['String']
  data?: Maybe<PermissionPayload>
  changes: Scalars['String']
}

export type AuthMutationDeletePermissionArgs = {
  id: Scalars['String']
  changes: Scalars['String']
}

export type AuthMutationCreateRoleArgs = {
  data?: Maybe<RolePayload>
}

export type AuthMutationUpdateRoleArgs = {
  id: Scalars['String']
  data?: Maybe<RolePayload>
  changes: Scalars['String']
}

export type AuthMutationDeleteRoleArgs = {
  id: Scalars['String']
  changes: Scalars['String']
}

export type AuthMutationCreateRolePermissionArgs = {
  data?: Maybe<RolePermissionPayload>
}

export type AuthMutationUpdateRolePermissionArgs = {
  roleid: Scalars['String']
  permissionid: Scalars['String']
  data?: Maybe<RolePermissionPayload>
  changes: Scalars['String']
}

export type AuthMutationDeleteRolePermissionArgs = {
  roleid: Scalars['String']
  permissionid: Scalars['String']
  changes: Scalars['String']
}

export type AuthMutationCreateUserArgs = {
  data?: Maybe<UserPayload>
}

export type AuthMutationUpdateUserArgs = {
  id: Scalars['String']
  data?: Maybe<UserInfoPayload>
  changes: Scalars['String']
}

export type AuthMutationDeleteUserArgs = {
  id: Scalars['String']
  changes: Scalars['String']
}

export type AuthMutationChangePasswordArgs = {
  data?: Maybe<ChangePasswordPayload>
}

export type AuthMutationResetPasswordArgs = {
  data?: Maybe<ResetPasswordPayload>
}

export type AuthMutationOneTimePasswordArgs = {
  data?: Maybe<OneTimePasswordPayload>
}

export type AuthMutationUpdateProfileArgs = {
  data?: Maybe<UpdateProfilePayload>
  changes: Scalars['String']
}

export type AuthMutationAddCasbinPolicyArgs = {
  data?: Maybe<CasbinPolicyPayload>
}

export type AuthMutationRemoveCasbinPolicyArgs = {
  data?: Maybe<CasbinPolicyPayload>
}

export type AuthMutationValidateCasbinPolicyArgs = {
  data?: Maybe<CasbinPolicyPayload>
}

export type AuthMutationCreateAttributePolicyArgs = {
  data?: Maybe<AttributePolicyPayload>
}

export type AuthMutationUpdateAttributePolicyArgs = {
  data?: Maybe<AttributePolicyPayload>
  changes: Scalars['String']
}

export type AuthMutationDeleteAttributePolicyArgs = {
  data?: Maybe<AttributePolicyPayload>
  changes: Scalars['String']
}

export type BulkAddGroupMemberPayload = {
  groupID: Scalars['String']
  userID: Array<Scalars['String']>
}

export type CasbinPolicyPayload = {
  app: Scalars['String']
  module: Scalars['String']
  subject: Scalars['String']
  attr: Scalars['String']
  objID: Scalars['String']
  act: Scalars['String']
}

export type CasbinPolicyResponse = {
  id: Scalars['String']
  name: Scalars['String']
  product: Scalars['String']
  module: Scalars['String']
  attribute: Scalars['String']
  act: Scalars['String']
  objID: Scalars['String']
  subject: Scalars['String']
  userData: UserResponse
}

export type ChangePasswordPayload = {
  userID: Scalars['String']
  oldPass: Scalars['String']
  newPass: Scalars['String']
}

export type ChildOrganizationResponse = {
  orgID: Scalars['String']
  orgCode: Scalars['String']
  orgName: Scalars['String']
}

export enum Comparison {
  Equal = 'EQUAL',
  Less = 'LESS',
  Gerater = 'GERATER',
  Lessequal = 'LESSEQUAL',
  Greaterequal = 'GREATEREQUAL',
  Like = 'LIKE',
}

export enum ContentType {
  KeyValueText = 'KEY_VALUE_TEXT',
  PlainText = 'PLAIN_TEXT',
  HtmlText = 'HTML_TEXT',
}

export type CrudResponse = {
  status: Scalars['Int']
  message: Scalars['String']
}

export type EditNotificationPermissionParam = {
  id: Scalars['String']
  notificationType: Scalars['String']
  serviceType: Array<Maybe<NotificationServiceTypePermissionParam>>
  productID: Scalars['String']
  recipients: NotificationPermissionRecipientsParam
}

export enum FieldName {
  Id = 'ID',
  Name = 'NAME',
  Pid = 'PID',
  ProdId = 'PROD_ID',
  OrgId = 'ORG_ID',
  RoleId = 'ROLE_ID',
}

export type GroupListParam = {
  page: Scalars['Int']
  limit: Scalars['Int']
  groupID: Scalars['String']
  groupName: Scalars['String']
}

export type InAppMessage = {
  id: Scalars['String']
  product: Scalars['String']
  sender: Scalars['String']
  recipient: Scalars['String']
  subject: Scalars['String']
  content: Scalars['String']
  read: Scalars['Boolean']
  createdby: Scalars['String']
  createdat: Scalars['String']
}

export type InappMessageParam = {
  product: Scalars['String']
  date: Scalars['String']
  page: Scalars['Int']
  limit: Scalars['Int']
  subject: Scalars['String']
  id: Scalars['String']
}

export type InappMutation = {
  readMessage: InappNotifResponse
}

export type InappMutationReadMessageArgs = {
  param: InappReadMessageParam
}

export type InappNotifResponse = {
  sendMessageResponse: CrudResponse
  messages: Array<InAppMessage>
  pageInfo: PageInfo
}

export type InappQuery = {
  getMessage: InappNotifResponse
}

export type InappQueryGetMessageArgs = {
  param: InappMessageParam
}

export type InAppReadMessage = {
  id: Scalars['String']
  read: Scalars['Boolean']
}

export type InappReadMessageParam = {
  readMessage: Array<InAppReadMessage>
}

export type InappSubcription = {
  getMessage: InappNotifResponse
}

export type InappSubcriptionGetMessageArgs = {
  param: InappMessageParam
}

export type ListCasbinPolicyParam = {
  app?: Maybe<Scalars['String']>
  module?: Maybe<Scalars['String']>
  subject: Scalars['String']
  objID?: Maybe<Scalars['String']>
}

export type ListOrganizationParam = {
  search?: Maybe<SearchParam>
  isChild: Scalars['Boolean']
}

export type ListResponse = {
  pageInfo: PageInfo
  listProductResponse: ProductResponse
  listProductOrganizationResponse: ProductResponse
  listOrganizationResponse: Array<OrganizationResponse>
  listPermissionResponse: Array<PermissionResponse>
  listRoleResponse: Array<RoleResponse>
  listRolePermissionResponse: Array<RolePermissionResponse>
  listUserResponse: Array<UserResponse>
  listAttributePolicy: Array<AttributePolicyResponse>
  listCasbinPolicy: Array<CasbinPolicyResponse>
}

export type LogListDateRange = {
  from: Scalars['String']
  to: Scalars['String']
}

export type LogListParam = {
  product: Scalars['String']
  channel: Scalars['String']
  content: Scalars['String']
  daterange: LogListDateRange
}

export type Mutation = {
  auth: AuthMutation
  token: TokenMutation
  notification: NotificationMutation
  inapp: InappMutation
}

export type NotificationContentRequest = {
  key: Scalars['String']
  value: Scalars['String']
}

export type NotificationGroupList = {
  id: Scalars['String']
  name: Scalars['String']
  description: Scalars['String']
}

export type NotificationGroupMemberList = {
  id: Scalars['String']
  groupID: Scalars['String']
  name: Scalars['String']
  email: Scalars['String']
}

export type NotificationGroupMemberPayload = {
  groupID: Scalars['String']
  userID: Array<Scalars['String']>
}

export type NotificationGroupParam = {
  group: NotificationGroupPayload
  member: NotificationGroupMemberPayload
}

export type NotificationGroupPayload = {
  name: Scalars['String']
  description: Scalars['String']
}

export type NotificationListParam = {
  serviceType: Scalars['String']
  content: Scalars['String']
  isReadAt: Scalars['String']
  senderId: Scalars['String']
  recipientId: Scalars['String']
  companyId: Scalars['String']
}

export type NotificationListResponse = {
  pageInfo: PageInfo
  permission: Array<NotificationPermissionList>
  log: Array<NotificationLogList>
  group: Array<NotificationGroupList>
  groupMember: Array<NotificationGroupMemberList>
}

export type NotificationLogList = {
  id: Scalars['String']
  createdAt: Scalars['String']
  product: Scalars['String']
  recipient: Scalars['String']
  content: Scalars['String']
  notificationType: Scalars['String']
  serviceType: Scalars['String']
  status: Scalars['String']
}

export type NotificationMutation = {
  createNotificationGroup: NotificationResponse
  createNotificationGroupMember: NotificationResponse
  editNotificationPermission: NotificationResponse
  deleteNotificationGroup: NotificationResponse
  deleteNotificationGroupMember: NotificationResponse
}

export type NotificationMutationCreateNotificationGroupArgs = {
  param: NotificationGroupParam
}

export type NotificationMutationCreateNotificationGroupMemberArgs = {
  param: NotificationGroupParam
}

export type NotificationMutationEditNotificationPermissionArgs = {
  param: EditNotificationPermissionParam
}

export type NotificationMutationDeleteNotificationGroupArgs = {
  groupID: Scalars['String']
}

export type NotificationMutationDeleteNotificationGroupMemberArgs = {
  groupID: Scalars['String']
  memberID: Scalars['String']
}

export type NotificationPermissionList = {
  id: Scalars['String']
  notificationType: Scalars['String']
  serviceType: Array<Maybe<NotificationServiceTypePermission>>
  product: NotificationProductPermission
  recipients: NotificationPermissionRecipients
}

export type NotificationPermissionRecipients = {
  users: Array<NotificationPermissionRecipientUsers>
  group: NotificationPermissionRecipientUsers
}

export type NotificationPermissionRecipientsParam = {
  users: Array<Scalars['String']>
  group: Scalars['String']
}

export type NotificationPermissionRecipientUsers = {
  id: Scalars['String']
  name: Scalars['String']
}

export type NotificationProductPermission = {
  productId: Scalars['String']
  productName: Scalars['String']
}

export type NotificationQuery = {
  listNotificationPermission: NotificationListResponse
  listNotificationLog: NotificationListResponse
  listNotificationGroup: NotificationListResponse
  listNotificationGroupMember: NotificationListResponse
}

export type NotificationQueryListNotificationPermissionArgs = {
  param: PermissionListParam
}

export type NotificationQueryListNotificationLogArgs = {
  param: LogListParam
}

export type NotificationQueryListNotificationGroupArgs = {
  param: GroupListParam
}

export type NotificationQueryListNotificationGroupMemberArgs = {
  param: GroupListParam
}

export type NotificationRequest = {
  productID: Scalars['String']
  serviceType: Scalars['String']
  notificationType: Scalars['String']
  cc?: Maybe<Array<Scalars['String']>>
  to: Array<Scalars['String']>
  plainContent?: Maybe<Scalars['String']>
  keyValContent?: Maybe<Array<NotificationContentRequest>>
  contentType: ContentType
}

export type NotificationResponse = {
  response: CrudResponse
}

export type NotificationRetryParam = {
  serviceType: Scalars['String']
  content: Scalars['String']
  retryCount: Scalars['Int']
  senderId: Scalars['String']
  ccId: Scalars['String']
  recipientId: Scalars['String']
  companyId: Scalars['String']
}

export type NotificationServiceTypePermission = {
  type: Scalars['String']
  isMandatory: Scalars['Boolean']
}

export type NotificationServiceTypePermissionParam = {
  type: Scalars['String']
  isMandatory: Scalars['Boolean']
}

export type NotificationTemplateParam = {
  subject: Scalars['String']
  serviceType: Scalars['String']
  notificationType: Scalars['String']
  template: Scalars['String']
}

export type OneTimePasswordPayload = {
  id: Scalars['String']
  to: Scalars['String']
  otp: Scalars['String']
  otpAction: Scalars['String']
}

export type OrganizationPayload = {
  code: Scalars['String']
  name: Scalars['String']
  info: Scalars['String']
  address: Scalars['String']
  phone: Scalars['String']
  web: Scalars['String']
  isChild: Scalars['Boolean']
  authProvider: Auth_Provider
}

export type OrganizationResponse = {
  orgID: Scalars['String']
  orgCode: Scalars['String']
  orgName: Scalars['String']
  orgInfo: Scalars['String']
  orgAddress: Scalars['String']
  orgPhone: Scalars['String']
  orgWeb: Scalars['String']
  isChild: Scalars['Boolean']
  childOrg: Array<ChildOrganizationResponse>
  clientAdminRoleID: Scalars['String']
  authProvider: Scalars['String']
}

export type PageInfo = {
  total: Scalars['Int']
  limit: Scalars['Int']
  page: Scalars['Int']
  totalUnread: Scalars['Int']
}

export type Permission = {
  access: Scalars['String']
}

export type PermissionListParam = {
  key: Scalars['String']
}

export type PermissionPayload = {
  id: Scalars['String']
  name: Scalars['String']
}

export type PermissionResponse = {
  permissionID: Scalars['String']
  permissionName: Scalars['String']
  productID: Scalars['String']
}

export type ProdOrg = {
  prodID: Scalars['String']
  prodName: Scalars['String']
  prodPath: Scalars['String']
}

export type ProductModule = {
  code: Scalars['String']
  name: Scalars['String']
}

export type ProductOrganization = {
  productId: Scalars['String']
  productName: Scalars['String']
  orgId: Scalars['String']
  organizationName: Scalars['String']
  productDescription: Scalars['String']
}

export type ProductOrganizationPayload = {
  productId: Scalars['String']
  orgId: Scalars['String']
}

export type ProductPayload = {
  name: Scalars['String']
  description: Scalars['String']
  path: Scalars['String']
}

export type ProductProduct = {
  id: Scalars['String']
  name: Scalars['String']
  description: Scalars['String']
  path: Scalars['String']
  modules: Array<ProductModule>
}

export type ProductResponse = {
  product: Array<ProductProduct>
  productOrganization: Array<ProductOrganization>
  response: Response
}

export type ProfileResponse = {
  userID: Scalars['String']
  userName: Scalars['String']
  id: Scalars['String']
  isPublic: Scalars['Boolean']
  enabled: Scalars['Boolean']
  userAccess: UserAccess
  userOrg: UserOrg
  userProd: Array<ProdOrg>
  location: Scalars['String']
  phone: Scalars['String']
  mustChangePwd: Scalars['Boolean']
  authProvider: Scalars['String']
}

export type Query = {
  auth: Auth
  notification: NotificationQuery
  inapp: InappQuery
  audit: AuditQuery
}

export type RequestPayload = {
  userID: Scalars['String']
  password: Scalars['String']
  token: Scalars['String']
}

export type ResetPasswordPayload = {
  email: Scalars['String']
  resetCode: Scalars['String']
  newPass: Scalars['String']
}

export type Response = {
  message: Scalars['String']
  status: Scalars['Int']
  id: Scalars['String']
}

export type RolePayload = {
  name: Scalars['String']
  type: RoleType
  permissionID: Array<Scalars['String']>
}

export type RolePermissionPayload = {
  roleID: Scalars['String']
  permissionID: Scalars['String']
}

export type RolePermissionResponse = {
  roleID: Scalars['String']
  roleName: Scalars['String']
  permissionID: Scalars['String']
  permissionName: Scalars['String']
  productID: Scalars['String']
  productName: Scalars['String']
}

export type RoleResponse = {
  roleID: Scalars['String']
  roleName: Scalars['String']
  info: Scalars['String']
  type: Scalars['String']
}

export enum RoleType {
  ClientAdmin = 'CLIENT_ADMIN',
  SysAdmin = 'SYS_ADMIN',
  User = 'USER',
}

export type SearchField = {
  fieldName: FieldName
  comparison: Comparison
  value: Scalars['String']
}

export type SearchParam = {
  search: SearchField
  limit: Scalars['Int']
  page: Scalars['Int']
}

export type SsoLink = {
  name: Scalars['String']
  link: Scalars['String']
}

export type SsoLinkResponse = {
  links: Array<SsoLink>
}

export type Subscription = {
  inapp: InappSubcription
}

export type TokenMutation = {
  requestToken: TokenResponse
  refreshToken: TokenResponse
  logoutToken: TokenResponse
}

export type TokenMutationRequestTokenArgs = {
  data: RequestPayload
}

export type TokenMutationRefreshTokenArgs = {
  data: RequestPayload
}

export type TokenMutationLogoutTokenArgs = {
  data: RequestPayload
}

export type TokenResponse = {
  userID: Scalars['String']
  userName: Scalars['String']
  id: Scalars['String']
  token: Scalars['String']
  refreshToken: Scalars['String']
  expireAt: Scalars['Int']
  issuedAt: Scalars['Int']
  issuer: Scalars['String']
  isPublic: Scalars['Boolean']
  enabled: Scalars['Boolean']
  userAccess: UserAccess
  userOrg: UserOrg
  userProd: Array<ProdOrg>
  message: Scalars['String']
}

export type UpdateProfilePayload = {
  name: Scalars['String']
  location: Scalars['String']
  phone: Scalars['String']
}

export type UserAccess = {
  roleID: Scalars['String']
  roleName: Scalars['String']
  roleType: Scalars['String']
  permission: Array<Scalars['String']>
}

export type UserInfoPayload = {
  id: Scalars['String']
  name: Scalars['String']
  roleid: Scalars['String']
  orgid: Scalars['String']
  location: Scalars['String']
  phone: Scalars['String']
  enabled: Scalars['Boolean']
}

export type UserOrg = {
  orgID: Scalars['String']
  orgCode: Scalars['String']
  orgName: Scalars['String']
  parentOrgID: Scalars['String']
  parentOrgCode: Scalars['String']
  parentOrgName: Scalars['String']
  prodOrg: Array<ProdOrg>
}

export type UserPayload = {
  id: Scalars['String']
  name: Scalars['String']
  password: Scalars['String']
  roleid: Scalars['String']
  orgid: Scalars['String']
  location: Scalars['String']
  phone: Scalars['String']
  enabled: Scalars['Boolean']
}

export type UserResponse = {
  ID: Scalars['String']
  userId: Scalars['String']
  name: Scalars['String']
  password: Scalars['String']
  role: RoleResponse
  location: Scalars['String']
  phone: Scalars['String']
  organization: OrganizationResponse
  product: Array<ProductProduct>
  enabled: Scalars['Boolean']
  lastActivityUser: Scalars['Int']
}
