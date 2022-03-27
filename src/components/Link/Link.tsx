import { Link } from '@mui/material'
import React from 'react'

export default function AppLink(props: any) {
  const { children, ...otherProps } = props
  return (
    <Link {...otherProps}>
      {children}
    </Link>
  )
}
