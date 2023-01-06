export const authHost = `${import.meta.env.VITE_AUTH_HOST}/query`
export const graphQLHost = import.meta.env.VITE_GRAPHQL_HOST

export const GRAPHQL_SERVER_HOST = {
  FMS: `${import.meta.env.VITE_GRAPHQL_HOST}/query`,
  IDM: `${import.meta.env.VITE_GRAPHQL_HOST_IDM}/query`,
}

export const idmHost = import.meta.env.VITE_IDM_HOST
export const fmsHost = import.meta.env.VITE_FMS_HOST

export const wsHost = import.meta.env.VITE_WS_HOST
export const mapsApiKey = import.meta.env.VITE_MAPS_API_KEY

export const mapUrl = `https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=${mapsApiKey}`

export const CHANNEL_KEY = {
  POSITIONS: 'positions',
}

export const graphqlDefaultOptions = {
  pollInterval: 1000 * 60 * 30, // 30 Minutes
  notifyOnNetworkStatusChange: true,
}

export const blacklistedUser = import.meta.env.VITE_BLACKLISTED_USER
export const ALLOWED_DOMAINS = ['xtrip.link', 'xapiens.id']
