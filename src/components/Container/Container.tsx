import { Container, Typography } from '@mui/material'
import React from 'react'

export default function AppContainer(props: any) {
  const { children, ...otherProps } = props
  return (
    <Container {...otherProps}>
      {children}
    </Container>
  )
}
