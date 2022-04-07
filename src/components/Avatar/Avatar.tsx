import { Avatar } from '@mui/material'
import React from 'react'

export default function AppAvatar(props: any) {
  const { children, ...allProps } = props
  return (
    <Avatar {...allProps} >
      {children}
    </Avatar>
  )
}
