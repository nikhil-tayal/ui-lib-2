import { Box } from '@mui/material'
import React from 'react'

export default function AppBox(props: any) {
  const { children, ...allProps } = props
  return (
    <Box>
      {children}
    </Box>
  )
}
