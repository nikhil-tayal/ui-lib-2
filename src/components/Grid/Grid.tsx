import { Grid } from '@mui/material'
import React from 'react'

export default function AppGrid(props: any) {
  const { children, ...otherProps } = props
  return (
    <Grid {...otherProps}>
      {children}
    </Grid>
  )
}
