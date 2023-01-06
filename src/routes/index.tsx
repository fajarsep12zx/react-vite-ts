// import loadable from '@loadable/component'
import { ReactSVG } from 'react-svg'

// const DevicesPage = loadable(() => import('~/pages/Devices'))
// const Trip = loadable(() => import('~/pages/Trip'))
// const Maps = loadable(() => import('~/pages/Map'))
// const Assets = loadable(() => import('~/pages/Assets'))
// const Groups = loadable(() => import('~/pages/Groups'))

export default [
  {
    id: 'map',
    title: 'Live Track',
    path: '/map',
    defaultPath: '/map',
    component: <span>Live Track</span>,
    exact: false,
    withHeader: true,
    icon: <ReactSVG src="/public/icons/menu-icon/map.svg" />,
  },
  {
    id: 'playback',
    title: 'Play Back',
    path: '/playback/:tab',
    defaultPath: '/playback/trip',
    component: <span>Trip</span>,
    exact: false,
    withHeader: true,
    icon: <ReactSVG src="/public/icons/menu-icon/playback.svg" />,
  },
  {
    id: 'devices',
    title: 'Devices',
    path: '/devices',
    defaultPath: '/devices',
    component: <span>Live Track</span>,
    exact: false,
    withHeader: true,
    icon: <ReactSVG src="/public/icons/menu-icon/devices.svg" />,
  },
  {
    id: 'assets',
    title: 'Assets',
    path: '/assets',
    defaultPath: '/assets',
    component: <span>Live Track</span>,
    exact: false,
    withHeader: true,
    icon: <ReactSVG src="/public/icons/menu-icon/assets.svg" />,
  },
  {
    id: 'groups',
    title: 'Groups',
    path: '/groups',
    defaultPath: '/groups',
    component: <span>Live Track</span>,
    exact: false,
    withHeader: true,
    icon: <ReactSVG src="/public/icons/menu-icon/groups.svg" />,
  },
]
