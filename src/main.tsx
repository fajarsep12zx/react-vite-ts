import 'regenerator-runtime'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ApolloProvider } from '@apollo/client'
import { Global } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { SnackbarProvider } from 'notistack'
import ReactDOM from 'react-dom/client'

import graphQLClient from '~/utils/apollo/client'

import App from './App'
import globalCss from './styles/global'
import theme from './styles/theme'
import { AuthProvider } from './utils/auth/AuthProvider'

dayjs.extend(utc)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Global styles={globalCss} />
          <ApolloProvider client={graphQLClient}>
            <SnackbarProvider>
              <App />
            </SnackbarProvider>
          </ApolloProvider>
        </MuiThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
