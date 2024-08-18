import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Darkbtn() {
  const theme = useTheme();
  return (
    <div>
      <Link>
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
          Dark Mode
        </Button>
      </Link>
    </div>
  );
}

export default Darkbtn;
