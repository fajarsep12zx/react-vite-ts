import { Suspense } from 'react'
import {
  Navigate,
  Route,  Routes,
} from 'react-router-dom'

import Loading from '~/components/Loading'
import publicRoute from '~/routes/publicRoute'
import useAuth from '~/utils/auth/useAuth'


const PublicLayout = () => {
  const { isLoggedIn } = useAuth()

  return isLoggedIn
    ? null
    : (
      <>
        <Suspense fallback={<Loading loading />}>
          <Routes>
            {
              publicRoute.map(({ id, path, component: Component }) => 
              <Route element={Component} key={id} path={path}  />
              )
            }
             <Route element={<Navigate to='/' />} path='*' />
          </Routes>
        </Suspense>
      </>
    )
}

export default PublicLayout
