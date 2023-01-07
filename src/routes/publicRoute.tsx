// import LoginPage from '~/pages/Login'
// import LoginNotAuthorizedPage from '~/pages/LoginNotAuthorized'
// import SSOLoginPage from '~/pages/SSOLogin'

import loadable from '@loadable/component'

const LoginPage = loadable(() => import('~/pages/Login'))

export default [
  {
    component: <LoginPage />,
    id: 'login-page',
    path: '/',
  },
  {
    component: <span>SSOLoginPage</span>,
    id: 'sso-login-page',
    path: '/sso/login',
  },
  {
    component: <span>LoginNotAuthorizedPage</span>,
    id: 'sso-login-authorized',
    path: '/not-authorized',
  },
]
