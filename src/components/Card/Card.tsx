import React, { ReactNode } from 'react'
import { Box } from '@mui/material';
import grey from '@mui/material/colors/grey';
interface IAppCard {
  children: ReactNode;
  heading?: string;
}
export default function AppCard(props: IAppCard) {
  const { children, heading } = props
  return (
    <Box sx={{ p: 0, boxShadow: 2, borderRadius: 2, fontFamily: 'Raleway' }} >
      {
        heading ? <Box className="py-4" sx={{ borderBottom: 1, p: 2, borderColor: grey[400] }} >
          {heading}
        </Box> : null
      }
      <Box className="body" sx={{ p: 2 }}>
        {children}
      </Box>
    </Box>
  )
}
