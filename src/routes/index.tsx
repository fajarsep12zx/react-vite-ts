// import loadable from '@loadable/component'
import { ReactSVG } from 'react-svg'

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
    title: 'Play Back',
    withHeader: true,
  },
  {
    component: <span>Live Track</span>,
    defaultPath: '/devices',
    exact: false,
    icon: <ReactSVG src="/icons/menu-icon/devices.svg" />,
    id: 'devices',
    path: '/devices',
    title: 'Devices',
    withHeader: true,
  },
  {
    component: <span>Live Track</span>,
    defaultPath: '/assets',
    exact: false,
    icon: <ReactSVG src="/icons/menu-icon/assets.svg" />,
    id: 'assets',
    path: '/assets',
    title: 'Assets',
    withHeader: true,
  },
  {
    component: <span>Live Track</span>,
    defaultPath: '/groups',
    exact: false,
    icon: <ReactSVG src="/icons/menu-icon/groups.svg" />,
    id: 'groups',
    path: '/groups',
    title: 'Groups',
    withHeader: true,
  },
]
