import { memo } from 'react'

import Box from '@mui/material/Box'

import EmailIcon from '@mui/icons-material/Email'
import LockIcon from '@mui/icons-material/Lock'
import { Button } from 'antd'

import { Formik, Form, Field } from 'formik'

import CustomTextField from '~/components/Form/CustomTextField'

import useCustom from './hooks'
import loginSchema from './schema'
import useStyle from './style'

const Login = () => {
  const { data, methods } = useCustom()
  const { classes } = useStyle()

  return (
    <Box height='100vh'>
      <Box data-testid='box-card'>
        {data.error && (
          <Box data-testid='box-login-error-message'>
            <span>Login failed:</span>
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
                  data-testid='input-username'
                  data-testid-helpertext='error-username'
                  name='username'
                  type='text'
                  placeholder='Enter your email'
                  component={CustomTextField}
                  InputProps={{
                    startAdornment: <EmailIcon className={classes.iconStyle} />,
                  }}
                />
                <Field
                  data-testid='input-password'
                  data-testid-helpertext='error-password'
                  name='password'
                  type='password'
                  placeholder='Enter your password'
                  component={CustomTextField}
                  InputProps={{
                    startAdornment: <LockIcon className={classes.iconStyle} />,
                  }}
                />
                <Button data-testid='btn-submit-login' htmlType='submit' disabled={isSubmitting}>
                  Login
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  )
}

export default memo(Login)
