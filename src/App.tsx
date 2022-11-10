import { useEffect } from 'react'
import ReloadPrompt from './components/ReloadPrompt'
import useAuth from './utils/auth/useAuth'

import ProtectedLayout from '~/components/Layout/Protected'
import PublicLayout from '~/components/Layout/Public'

function App() {
  const { isLoggedIn, loadUserProfileData } = useAuth()

  useEffect(() => {
    if (isLoggedIn) {
      loadUserProfileData()
    }
  }, [isLoggedIn])

  return (
    <>
      {isLoggedIn ? <ProtectedLayout /> : <PublicLayout />}
      <ReloadPrompt />
    </>
  )
}

export default App
