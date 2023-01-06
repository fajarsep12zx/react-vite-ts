import 'regenerator-runtime'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ApolloProvider } from '@apollo/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import ReactDOM from 'react-dom/client'

import graphQLClient from '~/utils/apollo/client'

import App from './App'
import theme from './styles/theme'
import { AuthProvider } from './utils/auth/AuthProvider'

// styles
import './index.css'

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
