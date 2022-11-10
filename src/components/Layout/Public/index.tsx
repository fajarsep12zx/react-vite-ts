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
              <Route key={id} path={path} element={Component}  />
              )
            }
             <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Suspense>
      </>
    )
}

export default PublicLayout
