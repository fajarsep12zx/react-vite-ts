import './style.css'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material'
import { useRegisterSW } from 'virtual:pwa-register/react'

import { formatDisplayDate } from '~/utils/date'

function ReloadPrompt() {
  // replaced dynamically
  const buildDate = '__DATE__'
  // replaced dyanmicaly
  const reloadSW = '__RELOAD_SW__'

  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swUrl: any, r: any) {
      // eslint-disable-next-line no-console
      console.log(`Service Worker at: ${swUrl}`)
      // @ts-expect-error just ignore
      if (reloadSW === 'true') {
        r &&
          setInterval(() => {
            r.update()
          }, 20000 /* 20s for testing purposes */)
      } else {
        // eslint-disable-next-line prefer-template,no-console
        console.log('SW Registered: ' + r)
      }
    },
    onRegisterError(error: any) {
      // eslint-disable-next-line no-console
      console.log('SW registration error', error)
    },
  })

  console.log('needRefresh', needRefresh)

  const close = () => {
    setNeedRefresh(false)
  }

  return (
    <>
      <Dialog
        open={needRefresh}
        aria-labelledby="update-app-dialog-title"
        aria-describedby="update-app-dialog-description"
        disableEscapeKeyDown
      >
        <DialogTitle>Update Application</DialogTitle>
        <DialogContent>
          <DialogContentText id="update-app-dialog-description">
            There is a new version available ({formatDisplayDate(buildDate, 'DD/MM/YYYY - hh:mm')}).
            Do you want to reload page to update?
            <br />
            If you choose Update Later, the application will automatically update if you close the
            window.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => close()}>Update Later</Button>
          <Button onClick={() => updateServiceWorker(true)} color="primary" variant="contained">
            Update Now
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ReloadPrompt
