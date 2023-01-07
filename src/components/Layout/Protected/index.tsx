import { memo, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Box from '@mui/material/Box'

import NotFound from '~/components/Error/NotFound'
import Loading from '~/components/Loading'
import routes from '~/routes'

import Sidebar from '../Sidebar'

const ProtectedLayout = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Suspense fallback={<Loading loading height="100%" />}>
        <Routes>
          {routes.map((route) => (
            <Route element={route.component} key={route.path} path={route.path} />
          ))}
          <Route element={<Navigate to="/map" />} path="/" />
          <Route element={<NotFound />} path="/404" />
          <Route element={<Navigate to="/404" />} path="*" />
        </Routes>
      </Suspense>
    </Box>
  )
}

export default memo(ProtectedLayout)
