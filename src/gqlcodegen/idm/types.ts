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
  Boolean: boolean
  Float: number
  ID: string
  Int: number
  String: string
}

export enum AccessControl {
  C = 'C',
  R = 'R',
  U = 'U',
  D = 'D',
}

export type AttributePolicyPayload = {
  ID: Scalars['String']
  attribute: Scalars['String']
  moduleCode: Scalars['String']
  name: Scalars['String']
  orgID: Scalars['String']
  productID: Scalars['String']
}

export type AttributePolicyResponse = {
  attribute: Scalars['String']
  id: Scalars['String']
  module: Scalars['String']
  name: Scalars['String']
  organization: Scalars['String']
  product: Scalars['String']
}

export type AuditListParam = {
  date: Scalars['String']
  limit: Scalars['Int']
  page: Scalars['Int']
  search: Scalars['String']
}

export type AuditListResponse = {
  auditRecords: Array<AuditRecord>
  pageInfo: PageInfo
}

export type AuditQuery = {
  listAudit: AuditListResponse
}

export type AuditQueryListAuditArgs = {
  param: AuditListParam
}

export type AuditRecord = {
  action: Scalars['String']
  auditDetails: AuditRecordDetails
  email: Scalars['String']
  id: Scalars['String']
  organization: Scalars['String']
  product: Scalars['String']
  role: Scalars['String']
  status: Scalars['String']
  timestamp: Scalars['String']
  userName: Scalars['String']
}

export type AuditRecordDetails = {
  details: Scalars['String']
}

export type Auth = {
  getProfile: ProfileResponse
  listAttributePolicy: ListResponse
  listCasbinPolicy: ListResponse
  listOrganization: ListResponse
  listPermission: ListResponse
  listProduct: ListResponse
  listProductOrganization: ListResponse
  listRole: ListResponse
  listRolePermission: ListResponse
  listSSOLink: SsoLinkResponse
  listUser: ListResponse
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
  addCasbinPolicy: Response
  bulkAddGroupMember: Response
  changePassword: Response
  createAttributePolicy: Response
  createOrganization: Response
  createPermission: Response
  createProduct: ProductResponse
  createProductOrganization: ProductResponse
  createRole: Response
  createRolePermission: Response
  createUser: Response
  deleteAttributePolicy: Response
  deleteGroup: Response
  deleteOrganization: Response
  deletePermission: Response
  deleteProduct: ProductResponse
  deleteProductOrganization: ProductResponse
  deleteRole: Response
  deleteRolePermission: Response
  deleteUser: Response
  oneTimePassword: Response
  removeCasbinPolicy: Response
  resetPassword: Response
  updateAttributePolicy: Response
  updateOrganization: Response
  updatePermission: Response
  updateProduct: ProductResponse
  updateProductOrganization: ProductResponse
  updateProfile: Response
  updateRole: Response
  updateRolePermission: Response
  updateUser: Response
  validateCasbinPolicy: Response
}

export type AuthMutationCreateProductArgs = {
  data?: Maybe<ProductPayload>
}

export type AuthMutationUpdateProductArgs = {
  changes: Scalars['String']
  data?: Maybe<ProductPayload>
  id: Scalars['String']
}

export type AuthMutationDeleteProductArgs = {
  changes: Scalars['String']
  id: Scalars['String']
}

export type AuthMutationCreateProductOrganizationArgs = {
  data?: Maybe<ProductOrganizationPayload>
}

export type AuthMutationUpdateProductOrganizationArgs = {
  changes: Scalars['String']
  data?: Maybe<ProductOrganizationPayload>
  id: Scalars['String']
}

export type AuthMutationDeleteProductOrganizationArgs = {
  changes: Scalars['String']
  id?: Maybe<ProductOrganizationPayload>
}

export type AuthMutationCreateOrganizationArgs = {
  data?: Maybe<OrganizationPayload>
}

export type AuthMutationUpdateOrganizationArgs = {
  changes: Scalars['String']
  data?: Maybe<OrganizationPayload>
  id: Scalars['String']
}

export type AuthMutationDeleteOrganizationArgs = {
  changes: Scalars['String']
  id: Scalars['String']
}

export type AuthMutationBulkAddGroupMemberArgs = {
  data?: Maybe<BulkAddGroupMemberPayload>
}

export type AuthMutationDeleteGroupArgs = {
  changes: Scalars['String']
  id: Scalars['String']
}

export type AuthMutationCreatePermissionArgs = {
  data?: Maybe<PermissionPayload>
}

export type AuthMutationUpdatePermissionArgs = {
  changes: Scalars['String']
  data?: Maybe<PermissionPayload>
  id: Scalars['String']
}

export type AuthMutationDeletePermissionArgs = {
  changes: Scalars['String']
  id: Scalars['String']
}

export type AuthMutationCreateRoleArgs = {
  data?: Maybe<RolePayload>
}

export type AuthMutationUpdateRoleArgs = {
  changes: Scalars['String']
  data?: Maybe<RolePayload>
  id: Scalars['String']
}

export type AuthMutationDeleteRoleArgs = {
  changes: Scalars['String']
  id: Scalars['String']
}

export type AuthMutationCreateRolePermissionArgs = {
  data?: Maybe<RolePermissionPayload>
}

export type AuthMutationUpdateRolePermissionArgs = {
  changes: Scalars['String']
  data?: Maybe<RolePermissionPayload>
  permissionid: Scalars['String']
  roleid: Scalars['String']
}

export type AuthMutationDeleteRolePermissionArgs = {
  changes: Scalars['String']
  permissionid: Scalars['String']
  roleid: Scalars['String']
}

export type AuthMutationCreateUserArgs = {
  data?: Maybe<UserPayload>
}

export type AuthMutationUpdateUserArgs = {
  changes: Scalars['String']
  data?: Maybe<UserInfoPayload>
  id: Scalars['String']
}

export type AuthMutationDeleteUserArgs = {
  changes: Scalars['String']
  id: Scalars['String']
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
  changes: Scalars['String']
  data?: Maybe<UpdateProfilePayload>
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
  changes: Scalars['String']
  data?: Maybe<AttributePolicyPayload>
}

export type AuthMutationDeleteAttributePolicyArgs = {
  changes: Scalars['String']
  data?: Maybe<AttributePolicyPayload>
}

export type BulkAddGroupMemberPayload = {
  groupID: Scalars['String']
  userID: Array<Scalars['String']>
}

export type CasbinPolicyPayload = {
  act: Scalars['String']
  app: Scalars['String']
  attr: Scalars['String']
  module: Scalars['String']
  objID: Scalars['String']
  subject: Scalars['String']
}

export type CasbinPolicyResponse = {
  act: Scalars['String']
  attribute: Scalars['String']
  id: Scalars['String']
  module: Scalars['String']
  name: Scalars['String']
  objID: Scalars['String']
  product: Scalars['String']
  subject: Scalars['String']
  userData: UserResponse
}

export type ChangePasswordPayload = {
  newPass: Scalars['String']
  oldPass: Scalars['String']
  userID: Scalars['String']
}

export type ChildOrganizationResponse = {
  orgCode: Scalars['String']
  orgID: Scalars['String']
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
  message: Scalars['String']
  status: Scalars['Int']
}

export type EditNotificationPermissionParam = {
  id: Scalars['String']
  notificationType: Scalars['String']
  productID: Scalars['String']
  recipients: NotificationPermissionRecipientsParam
  serviceType: Array<Maybe<NotificationServiceTypePermissionParam>>
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
  groupID: Scalars['String']
  groupName: Scalars['String']
  limit: Scalars['Int']
  page: Scalars['Int']
}

export type InAppMessage = {
  content: Scalars['String']
  createdat: Scalars['String']
  createdby: Scalars['String']
  id: Scalars['String']
  product: Scalars['String']
  read: Scalars['Boolean']
  recipient: Scalars['String']
  sender: Scalars['String']
  subject: Scalars['String']
}

export type InappMessageParam = {
  date: Scalars['String']
  id: Scalars['String']
  limit: Scalars['Int']
  page: Scalars['Int']
  product: Scalars['String']
  subject: Scalars['String']
}

export type InappMutation = {
  readMessage: InappNotifResponse
}

export type InappMutationReadMessageArgs = {
  param: InappReadMessageParam
}

export type InappNotifResponse = {
  messages: Array<InAppMessage>
  pageInfo: PageInfo
  sendMessageResponse: CrudResponse
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
  objID?: Maybe<Scalars['String']>
  subject: Scalars['String']
}

export type ListOrganizationParam = {
  isChild: Scalars['Boolean']
  search?: Maybe<SearchParam>
}

export type ListResponse = {
  listAttributePolicy: Array<AttributePolicyResponse>
  listCasbinPolicy: Array<CasbinPolicyResponse>
  listOrganizationResponse: Array<OrganizationResponse>
  listPermissionResponse: Array<PermissionResponse>
  listProductOrganizationResponse: ProductResponse
  listProductResponse: ProductResponse
  listRolePermissionResponse: Array<RolePermissionResponse>
  listRoleResponse: Array<RoleResponse>
  listUserResponse: Array<UserResponse>
  pageInfo: PageInfo
}

export type LogListDateRange = {
  from: Scalars['String']
  to: Scalars['String']
}

export type LogListParam = {
  channel: Scalars['String']
  content: Scalars['String']
  daterange: LogListDateRange
  product: Scalars['String']
}

export type Mutation = {
  auth: AuthMutation
  inapp: InappMutation
  notification: NotificationMutation
  token: TokenMutation
}

export type NotificationContentRequest = {
  key: Scalars['String']
  value: Scalars['String']
}

export type NotificationGroupList = {
  description: Scalars['String']
  id: Scalars['String']
  name: Scalars['String']
}

export type NotificationGroupMemberList = {
  email: Scalars['String']
  groupID: Scalars['String']
  id: Scalars['String']
  name: Scalars['String']
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
  description: Scalars['String']
  name: Scalars['String']
}

export type NotificationListParam = {
  companyId: Scalars['String']
  content: Scalars['String']
  isReadAt: Scalars['String']
  recipientId: Scalars['String']
  senderId: Scalars['String']
  serviceType: Scalars['String']
}

export type NotificationListResponse = {
  group: Array<NotificationGroupList>
  groupMember: Array<NotificationGroupMemberList>
  log: Array<NotificationLogList>
  pageInfo: PageInfo
  permission: Array<NotificationPermissionList>
}

export type NotificationLogList = {
  content: Scalars['String']
  createdAt: Scalars['String']
  id: Scalars['String']
  notificationType: Scalars['String']
  product: Scalars['String']
  recipient: Scalars['String']
  serviceType: Scalars['String']
  status: Scalars['String']
}

export type NotificationMutation = {
  createNotificationGroup: NotificationResponse
  createNotificationGroupMember: NotificationResponse
  deleteNotificationGroup: NotificationResponse
  deleteNotificationGroupMember: NotificationResponse
  editNotificationPermission: NotificationResponse
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
  product: NotificationProductPermission
  recipients: NotificationPermissionRecipients
  serviceType: Array<Maybe<NotificationServiceTypePermission>>
}

export type NotificationPermissionRecipients = {
  group: NotificationPermissionRecipientUsers
  users: Array<NotificationPermissionRecipientUsers>
}

export type NotificationPermissionRecipientsParam = {
  group: Scalars['String']
  users: Array<Scalars['String']>
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
  listNotificationGroup: NotificationListResponse
  listNotificationGroupMember: NotificationListResponse
  listNotificationLog: NotificationListResponse
  listNotificationPermission: NotificationListResponse
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
  cc?: Maybe<Array<Scalars['String']>>
  contentType: ContentType
  keyValContent?: Maybe<Array<NotificationContentRequest>>
  notificationType: Scalars['String']
  plainContent?: Maybe<Scalars['String']>
  productID: Scalars['String']
  serviceType: Scalars['String']
  to: Array<Scalars['String']>
}

export type NotificationResponse = {
  response: CrudResponse
}

export type NotificationRetryParam = {
  ccId: Scalars['String']
  companyId: Scalars['String']
  content: Scalars['String']
  recipientId: Scalars['String']
  retryCount: Scalars['Int']
  senderId: Scalars['String']
  serviceType: Scalars['String']
}

export type NotificationServiceTypePermission = {
  isMandatory: Scalars['Boolean']
  type: Scalars['String']
}

export type NotificationServiceTypePermissionParam = {
  isMandatory: Scalars['Boolean']
  type: Scalars['String']
}

export type NotificationTemplateParam = {
  notificationType: Scalars['String']
  serviceType: Scalars['String']
  subject: Scalars['String']
  template: Scalars['String']
}

export type OneTimePasswordPayload = {
  id: Scalars['String']
  otp: Scalars['String']
  otpAction: Scalars['String']
  to: Scalars['String']
}

export type OrganizationPayload = {
  address: Scalars['String']
  authProvider: Auth_Provider
  code: Scalars['String']
  info: Scalars['String']
  isChild: Scalars['Boolean']
  name: Scalars['String']
  phone: Scalars['String']
  web: Scalars['String']
}

export type OrganizationResponse = {
  authProvider: Scalars['String']
  childOrg: Array<ChildOrganizationResponse>
  clientAdminRoleID: Scalars['String']
  isChild: Scalars['Boolean']
  orgAddress: Scalars['String']
  orgCode: Scalars['String']
  orgID: Scalars['String']
  orgInfo: Scalars['String']
  orgName: Scalars['String']
  orgPhone: Scalars['String']
  orgWeb: Scalars['String']
}

export type PageInfo = {
  limit: Scalars['Int']
  page: Scalars['Int']
  total: Scalars['Int']
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
  orgId: Scalars['String']
  organizationName: Scalars['String']
  productDescription: Scalars['String']
  productId: Scalars['String']
  productName: Scalars['String']
}

export type ProductOrganizationPayload = {
  orgId: Scalars['String']
  productId: Scalars['String']
}

export type ProductPayload = {
  description: Scalars['String']
  name: Scalars['String']
  path: Scalars['String']
}

export type ProductProduct = {
  description: Scalars['String']
  id: Scalars['String']
  modules: Array<ProductModule>
  name: Scalars['String']
  path: Scalars['String']
}

export type ProductResponse = {
  product: Array<ProductProduct>
  productOrganization: Array<ProductOrganization>
  response: Response
}

export type ProfileResponse = {
  authProvider: Scalars['String']
  enabled: Scalars['Boolean']
  id: Scalars['String']
  isPublic: Scalars['Boolean']
  location: Scalars['String']
  mustChangePwd: Scalars['Boolean']
  phone: Scalars['String']
  userAccess: UserAccess
  userID: Scalars['String']
  userName: Scalars['String']
  userOrg: UserOrg
  userProd: Array<ProdOrg>
}

export type Query = {
  audit: AuditQuery
  auth: Auth
  inapp: InappQuery
  notification: NotificationQuery
}

export type RequestPayload = {
  password: Scalars['String']
  token: Scalars['String']
  userID: Scalars['String']
}

export type ResetPasswordPayload = {
  email: Scalars['String']
  newPass: Scalars['String']
  resetCode: Scalars['String']
}

export type Response = {
  id: Scalars['String']
  message: Scalars['String']
  status: Scalars['Int']
}

export type RolePayload = {
  name: Scalars['String']
  permissionID: Array<Scalars['String']>
  type: RoleType
}

export type RolePermissionPayload = {
  permissionID: Scalars['String']
  roleID: Scalars['String']
}

export type RolePermissionResponse = {
  permissionID: Scalars['String']
  permissionName: Scalars['String']
  productID: Scalars['String']
  productName: Scalars['String']
  roleID: Scalars['String']
  roleName: Scalars['String']
}

export type RoleResponse = {
  info: Scalars['String']
  roleID: Scalars['String']
  roleName: Scalars['String']
  type: Scalars['String']
}

export enum RoleType {
  ClientAdmin = 'CLIENT_ADMIN',
  SysAdmin = 'SYS_ADMIN',
  User = 'USER',
}

export type SearchField = {
  comparison: Comparison
  fieldName: FieldName
  value: Scalars['String']
}

export type SearchParam = {
  limit: Scalars['Int']
  page: Scalars['Int']
  search: SearchField
}

export type SsoLink = {
  link: Scalars['String']
  name: Scalars['String']
}

export type SsoLinkResponse = {
  links: Array<SsoLink>
}

export type Subscription = {
  inapp: InappSubcription
}

export type TokenMutation = {
  logoutToken: TokenResponse
  refreshToken: TokenResponse
  requestToken: TokenResponse
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
  enabled: Scalars['Boolean']
  expireAt: Scalars['Int']
  id: Scalars['String']
  isPublic: Scalars['Boolean']
  issuedAt: Scalars['Int']
  issuer: Scalars['String']
  message: Scalars['String']
  refreshToken: Scalars['String']
  token: Scalars['String']
  userAccess: UserAccess
  userID: Scalars['String']
  userName: Scalars['String']
  userOrg: UserOrg
  userProd: Array<ProdOrg>
}

export type UpdateProfilePayload = {
  location: Scalars['String']
  name: Scalars['String']
  phone: Scalars['String']
}

export type UserAccess = {
  permission: Array<Scalars['String']>
  roleID: Scalars['String']
  roleName: Scalars['String']
  roleType: Scalars['String']
}

export type UserInfoPayload = {
  enabled: Scalars['Boolean']
  id: Scalars['String']
  location: Scalars['String']
  name: Scalars['String']
  orgid: Scalars['String']
  phone: Scalars['String']
  roleid: Scalars['String']
}

export type UserOrg = {
  orgCode: Scalars['String']
  orgID: Scalars['String']
  orgName: Scalars['String']
  parentOrgCode: Scalars['String']
  parentOrgID: Scalars['String']
  parentOrgName: Scalars['String']
  prodOrg: Array<ProdOrg>
}

export type UserPayload = {
  enabled: Scalars['Boolean']
  id: Scalars['String']
  location: Scalars['String']
  name: Scalars['String']
  orgid: Scalars['String']
  password: Scalars['String']
  phone: Scalars['String']
  roleid: Scalars['String']
}

export type UserResponse = {
  ID: Scalars['String']
  enabled: Scalars['Boolean']
  lastActivityUser: Scalars['Int']
  location: Scalars['String']
  name: Scalars['String']
  organization: OrganizationResponse
  password: Scalars['String']
  phone: Scalars['String']
  product: Array<ProductProduct>
  role: RoleResponse
  userId: Scalars['String']
}
