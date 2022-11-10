import 'regenerator-runtime'

import React from 'react'

import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import graphQLClient from '~/utils/apollo/client'

import App from './App'

// styles
import './index.css'
import theme from './styles/theme'
import { ApolloProvider } from '@apollo/client'
import { AuthProvider } from './utils/auth/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <ApolloProvider client={graphQLClient}>
            <App />
          </ApolloProvider>
        </MuiThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
