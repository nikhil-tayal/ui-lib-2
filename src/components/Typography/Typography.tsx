import { Typography } from '@mui/material'
import React from 'react'

export default function AppTypography(props: any) {
  const { children, ...otherProps } = props
  return (
    <Typography {...otherProps}>
      {children}
    </Typography>
  )
}
