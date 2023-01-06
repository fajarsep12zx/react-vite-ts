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
      sx={{
        height: '100vh',
        overflow: 'hidden',
      }}
      container
    >
      <Grid md={5} item>
        <Box alignContent="center" display="flex" flexDirection="column" data-testid="box-card">
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
              username: '',
              password: '',
              keepSignIn: false,
            }}
            validationSchema={loginSchema}
            onSubmit={methods.handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Box className={classes.formSection}>
                  <Field
                    data-testid="input-username"
                    data-testid-helpertext="error-username"
                    name="username"
                    type="text"
                    placeholder="Enter your email"
                    component={CustomTextField}
                  />
                  <Field
                    data-testid="input-password"
                    data-testid-helpertext="error-password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    component={CustomTextField}
                  />
                  <Button
                    data-testid="btn-submit-login"
                    variant="contained"
                    color="secondary"
                    className="btn-rounded"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    Login
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Grid>
      <Grid md={7} item>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flex={1}
          className={classes.background}
        />
      </Grid>
    </Grid>
  )
}

export default memo(Login)
