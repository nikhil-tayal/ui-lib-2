import React from 'react'
import TextField from '@mui/material/TextField';

interface IInput {
  variant?: 'outlined' | 'filled' | 'standard',
  label?: string
  type?: 'text' | 'password' | 'file'
}
export default function Input(props: any) {
  const { variant = 'standard', label, id, type = 'text', ...otherProps } = props
  return (
    <TextField id={id} label={label} variant={variant} type={type} {...otherProps} />
  )
}
