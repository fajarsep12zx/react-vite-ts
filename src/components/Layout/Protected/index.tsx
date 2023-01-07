import { memo, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Box from '@mui/material/Box'

import NotFound from '~/components/Error/NotFound'
import Loading from '~/components/Loading'
import Sidebar from '~/components/Sidebar'
import routes from '~/routes'

const ProtectedLayout = () => {
  return (
    <Box display="flex">
      <Sidebar routes={routes} />
      <Suspense fallback={<Loading height="100%" loading />}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.component} />
          ))}
          <Route element={<Navigate to="/map" />} path="/" />
          <Route element={<NotFound />} path="/404" />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Suspense>
    </Box>
  )
}

export default memo(ProtectedLayout)
