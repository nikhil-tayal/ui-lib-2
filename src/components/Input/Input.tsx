import React from 'react'
import TextField from '@mui/material/TextField';

interface IInput {
  variant?: 'outlined' | 'filled' | 'standard',
  label?: string
  id?: string
  type?: 'text' | 'password' | 'file'
}
export default function Input(props: IInput) {
  const { variant = 'standard', label, id, type = 'text' } = props
  return (
    <div>
      <TextField id={id} label={label} variant={variant} type={type} />
    </div>
  )
}
