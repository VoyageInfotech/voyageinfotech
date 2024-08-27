import { Button } from '@mui/material'
import React from 'react'
import { useTheme } from '@emotion/react'

function Lightbtn({text}) {
    const theme = useTheme();

  return (
    <div>
      <Button sx={{
        backgroundColor: theme.palette.secondary.second,
        color:theme.palette.primary.third,
        borderRadius:3,
        transition: "transform 0.3s ease, background-color 0.3s ease, color 0.3s ease",
        border: `1px solid ${theme.palette.primary.third}`, 
        "&:hover": {
            backgroundColor: theme.palette.primary.third,
            color: theme.palette.secondary.second,
            transform: "scale(1.1)", 
          },
      }}>{text}</Button>
  </div>
  )
}

export default Lightbtn