import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '@emotion/react'

function Lightbtn() {
    const theme = useTheme();

  return (
    <div>
    <Link>
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
      }}>Light Mode</Button>
    </Link>
  </div>
  )
}

export default Lightbtn