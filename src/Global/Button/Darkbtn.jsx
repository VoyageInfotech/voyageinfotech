import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import React from "react";

function Darkbtn({text}) {
  const theme = useTheme();
  return (
    <div>
        <Button
          sx={{
            backgroundColor: theme.palette.primary.third,
            color: theme.palette.secondary.second,
            borderRadius: 3,
            transition: "transform 0.3s ease, background-color 0.3s ease, color 0.3s ease",

            "&:hover": {
              color: theme.palette.primary.third,
              backgroundColor: theme.palette.secondary.second,
              transform: "scale(1.1)", 
            },
          }}
        >
          {text}
        </Button>
    </div>
  );
}

export default Darkbtn;
