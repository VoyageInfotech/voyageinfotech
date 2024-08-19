import React from "react";
import { Fab, useScrollTrigger, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";

const ScrollToTopButton = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
}));

const ScrollToTop = ({ children }) => {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={trigger}>
      <ScrollToTopButton
        onClick={handleClick}
        role="presentation"
        sx={{
          color: theme.palette.customColors.white,
        }}
      >
        {children}
      </ScrollToTopButton>
    </Zoom>
  );
};

const App = () => {
  const theme = useTheme();

  return (
    <div>
      <ScrollToTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon
            sx={{
              color: theme.palette.customColors.white,
            }}
          />
        </Fab>
      </ScrollToTop>
    </div>
  );
};

export default App;
