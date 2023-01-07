import replace from '@rollup/plugin-replace'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { ManifestOptions, VitePWA, VitePWAOptions } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'

import { dependencies } from './package.json'

function renderChunks(deps: Record<string, string>) {
  const chunks = {}
  Object.keys(deps).forEach((key) => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return
    chunks[key] = [key]
  })
  return chunks
}

export default ({ mode }: any) => {
  console.log('mode', mode)
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  const pwaOptions: Partial<VitePWAOptions> = {
    base: '/',
    devOptions: {
      enabled: process.env.VITE_SW_DEV === 'true',
      navigateFallback: 'index.html',
      type: 'module',
    },
    manifest: {
      icons: [
        {
          sizes: '192x192',
          src: '/manifest/icon-192x192.png',
          type: 'image/png',
        },
        {
          sizes: '256x256',
          src: '/manifest/icon-256x256.png',
          type: 'image/png',
        },
        {
          sizes: '384x384',
          src: '/manifest/icon-384x384.png',
          type: 'image/png',
        },
        {
          sizes: '512x512',
          src: '/manifest/icon-512x512.png',
          type: 'image/png',
        },
      ],
      name: 'PWA Router',
      short_name: 'PWA Router',
      theme_color: '#ffffff',
    },
    mode,
  }

  const replaceOptions = { __DATE__: new Date().toISOString() }
  const reload = process.env.VITE_RELOAD_SW === 'true'
  const selfDestroying = process.env.VITE_SW_DESTROY === 'true'

  if (process.env.VITE_SW === 'true') {
    pwaOptions.srcDir = 'src'
    pwaOptions.filename = 'prompt-sw.ts'
    pwaOptions.strategies = 'injectManifest'
    ;(pwaOptions.manifest as Partial<ManifestOptions>).name = 'PWA Inject Manifest'
    ;(pwaOptions.manifest as Partial<ManifestOptions>).short_name = 'PWA Inject'
  }

  if (reload) {
    // @ts-expect-error just ignore
    replaceOptions.__RELOAD_SW__ = 'true'
  }

  if (selfDestroying) pwaOptions.selfDestroying = selfDestroying

  return defineConfig({
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-router-dom', 'react-dom'],
            ...renderChunks(dependencies),
          },
        },
      },
      sourcemap: process.env.SOURCE_MAP === 'true',
    },
    plugins: [
      react(),
      tsconfigPaths(),
      VitePWA(pwaOptions),
      // @ts-expect-error just ignore
      replace({ ...replaceOptions, preventAssignment: true }),
    ],
  })
}
