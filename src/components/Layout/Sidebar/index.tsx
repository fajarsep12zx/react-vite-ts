import { memo } from 'react'

import routes from '~/routes'
import useScreenMobile from '~/utils/hooks/useScreenMobile'

import DesktopSidebar from './Desktop'
import useCustom from './hooks'
import Menu from './Menu'
import MobileSidebar from './Mobile'

const Sidebar = () => {
  const { data, methods } = useCustom()
  const isMobile = useScreenMobile()

  return isMobile ? (
    <MobileSidebar
      handleClickToggle={data.toggleMobileDrawer.toggle}
      open={data.toggleMobileDrawer.value}
    >
      <Menu
        currentPath={data.currentPath}
        firstPath={data.firstPath}
        isPermissionGranted={methods.isPermissionGranted}
        open={data.toggleMobileDrawer.value}
        pushHistory={methods.pushHistory}
        routes={routes}
      />
    </MobileSidebar>
  ) : (
    <DesktopSidebar handleDrawer={methods.handleDrawer} open={data.open}>
      <Menu
        currentPath={data.currentPath}
        firstPath={data.firstPath}
        isPermissionGranted={methods.isPermissionGranted}
        open={data.open}
        pushHistory={methods.pushHistory}
        routes={routes}
      />
    </DesktopSidebar>
  )
}

export default memo(Sidebar)
