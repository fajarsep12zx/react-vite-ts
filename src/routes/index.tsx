// import loadable from '@loadable/component'
import { ReactSVG } from 'react-svg'

import { PERMISSIONS } from '~/config/constants'

// const DevicesPage = loadable(() => import('~/pages/Devices'))
// const Trip = loadable(() => import('~/pages/Trip'))
// const Maps = loadable(() => import('~/pages/Map'))
// const Assets = loadable(() => import('~/pages/Assets'))
// const Groups = loadable(() => import('~/pages/Groups'))

export default [
  {
    component: <span>Live Track </span>,
    defaultPath: '/map',
    exact: false,
    icon: <ReactSVG src="/icons/menu-icon/map.svg" />,
    id: 'map',
    path: '/map',
    permission: PERMISSIONS.ALL,
    title: 'Live Track',
    withHeader: true,
  },
  {
    component: <span>Trip</span>,
    defaultPath: '/playback/trip',
    exact: false,
    icon: <ReactSVG src="/icons/menu-icon/playback.svg" />,
    id: 'playback',
    path: '/playback/:tab',
    permission: PERMISSIONS.ALL,
    title: 'Play Back',
    withHeader: true,
  },
]
