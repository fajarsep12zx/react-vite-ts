import { useEffect } from 'react'

import ProtectedLayout from '~/components/Layout/Protected'
import PublicLayout from '~/components/Layout/Public'

import ReloadPrompt from './components/ReloadPrompt'
import useAuth from './utils/auth/useAuth'

function App() {
  const { userData, isLoggedIn, handleFetchProfile } = useAuth()

  useEffect(() => {
    // When use is not logged in do nothing
    if (!isLoggedIn) return

    // When useData is already exist do nothing
    if (userData) return

    // fetch new data profile
    handleFetchProfile()
  }, [isLoggedIn, userData, handleFetchProfile])

  return (
    <>
      {isLoggedIn ? <ProtectedLayout /> : <PublicLayout />}
      <ReloadPrompt />
    </>
  )
}

export default App
