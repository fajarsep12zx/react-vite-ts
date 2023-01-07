import { memo } from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import { fontSize } from '~/styles/theme'

import { BaseProps, fieldToTextField } from './helper'

interface CustomTextFieldProps extends BaseProps {
  children: React.ReactNode
  className?: string
  'data-testid': string
  'data-testid-helpertext'?: string
  labelText?: string
}

const CustomTextField = ({
  children,
  className,
  'data-testid-helpertext': dataTestIdHelperText = '',
  'data-testid': dataTestId,
  labelText = '',
  ...props
}: CustomTextFieldProps) => {
  return (
    <Box mb={labelText ? 3 : 0}>
      {labelText && (
        <Box fontSize={fontSize[14]} mb={0}>
          {labelText}
        </Box>
      )}
      <TextField
        FormHelperTextProps={
          {
            'data-testid': dataTestIdHelperText,
          } as any
        }
        inputProps={{
          'data-testid': dataTestId,
        }}
        className={`${className} main-textfield`}
        size="small"
        {...fieldToTextField(props)}
      >
        {children}
      </TextField>
    </Box>
  )
}
export default memo(CustomTextField)
