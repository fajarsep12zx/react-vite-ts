import { lazy, Suspense } from 'react'

const Login = lazy(() => import(/* webpackChunkName: "login" */ '~/modules/Auth/Login'))

const LoginPage = () => (
  <Suspense>
    <Login />
  </Suspense>
)

export default LoginPage
