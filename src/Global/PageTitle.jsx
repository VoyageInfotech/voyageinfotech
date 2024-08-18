import { Box, Breadcrumbs, Link as MUILink, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { useTheme } from "@emotion/react";

function PageTitle({ title, description }) {
  const theme = useTheme();
  return (
    <>
      <Box>
        <div className="main-banner">
          <div className="child-inner">
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  my: 2,
                }}
              >
                <Breadcrumbs
                  sx={{
                    border: `1px dotted ${theme.palette.primary.main}`,
                    p: 1,
                    borderRadius: 8,
                    display: "inline-block",
                    position: "relative",
                    margin: "auto",
                    zIndex: 10,
                  }}
                  separator={
                    <NavigateNextIcon
                      fontSize="14px"
                      sx={{
                        color: theme.palette.white,
                      }}
                    />
                  }
                  aria-label="breadcrumb"
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <HomeIcon
                      sx={{ mr: 0.5, color: theme.palette.primary.main }}
                    />
                    <MUILink
                      component={RouterLink}
                      to="/"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: theme.palette.white,
                        textDecoration: "none",
                      }}
                    >
                      Home
                    </MUILink>
                  </Box>
                  <MUILink
                    component={RouterLink}
                    to="/"
                    sx={{
                      color: theme.palette.secondary.main,
                      textDecoration: "none",
                    }}
                  >
                    {title}
                  </MUILink>
                </Breadcrumbs>
              </Box>
              <Typography
                sx={{
                  color: theme.palette.customColors.lightgrey,
                  textAlign: "center",
                  maxWidth: "700px",
                  margin:'auto' 
                }}
              >
                {description}
              </Typography>
            </Box>
          </div>
        </div>
      </Box>
    </>
  );
}

export default PageTitle;
