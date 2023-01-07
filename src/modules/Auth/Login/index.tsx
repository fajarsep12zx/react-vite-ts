import { memo } from 'react'

import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
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
        <Box alignContent="center" data-testid="box-card" display="flex" flexDirection="column">
          <Box className={classes.title} data-testid="box-title">
            Welcome Back
          </Box>
          <Box className={classes.subTitle} data-testid="box-subtile">
            Enter your credentials to access your account.
          </Box>

          {data.error && (
            <Box className={classes.errorMessage} data-testid="box-login-error-message">
              <span className={classes.errorTitle}>Login failed:</span>
              <span>Invalid username or password.</span>
            </Box>
          )}

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
                    component={CustomTextField}
                    data-testid="input-username"
                    data-testid-helpertext="error-username"
                    name="username"
                    placeholder="Enter your email"
                    type="text"
                  />
                  <Field
                    component={CustomTextField}
                    data-testid="input-password"
                    data-testid-helpertext="error-password"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <Button
                    className="btn-rounded"
                    color="secondary"
                    data-testid="btn-submit-login"
                    disabled={isSubmitting}
                    type="submit"
                    variant="contained"
                  >
                    Login
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
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
