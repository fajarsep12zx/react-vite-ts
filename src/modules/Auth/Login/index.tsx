import { memo } from 'react'

import { LoadingButton } from '@mui/lab'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import { Formik, Form, Field } from 'formik'

import CustomTextField from '~/components/Form/CustomTextField'

import useCustom from './hooks'
import loginSchema from './schema'
import useStyle from './style'

const Login = () => {
  const { data, methods } = useCustom()
  const { classes } = useStyle()

  return (
    <Grid
      container
      sx={{
        height: '100vh',
      }}
    >
      <Grid item md={5}>
        <Box
          alignContent="center"
          alignItems="center"
          data-testid="box-card"
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="center"
          width="100%"
        >
          <Box className={classes.title} data-testid="box-title">
            Sign in to XMINE
          </Box>
          <Box className={classes.subTitle} data-testid="box-subtile">
            Enter your details to get sign in to your account
          </Box>

          {data.error && (
            <Box className={classes.errorMessage} data-testid="box-login-error-message">
              <span className={classes.errorTitle}>Login failed:</span>
              <span>Invalid username or password.</span>
            </Box>
          )}

          <Box width="60%">
            <Formik
              initialValues={{
                keepSignIn: false,
                password: '',
                username: '',
              }}
              validationSchema={loginSchema}
              onSubmit={methods.handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Box className={classes.formSection}>
                    <Field
                      fullWidth
                      component={CustomTextField}
                      data-testid="input-username"
                      data-testid-helpertext="error-username"
                      labelText="Email"
                      name="username"
                      placeholder="Enter your email"
                      type="text"
                    />
                    <Field
                      fullWidth
                      component={CustomTextField}
                      data-testid="input-password"
                      data-testid-helpertext="error-password"
                      labelText="Password"
                      name="password"
                      placeholder="Enter your password"
                      type="password"
                    />
                    <LoadingButton
                      fullWidth
                      sx={{
                        mt: 10,
                      }}
                      color="primary"
                      data-testid="btn-submit-login"
                      loading={isSubmitting}
                      type="submit"
                      variant="contained"
                    >
                      Sign in
                    </LoadingButton>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Grid>
      <Grid item md={7}>
        <Box
          alignItems="center"
          className={classes.background}
          display="flex"
          flex={1}
          justifyContent="center"
        />
      </Grid>
    </Grid>
  )
}

export default memo(Login)
