import { useTheme } from "@emotion/react";
import { Box,Container, Grid, Typography } from "@mui/material";
import React from "react";
function Aboutus() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          py: {
            xs: 2,
            sm: 2,
            md: 3,
            lg: 4,
          },
        }}
      >
        <Container>
          <Grid container spacing={3} row alignItems="center">
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  display: "inline-block",
                  fontSize: "14px",
                  color: theme.palette.secondary.third,
                  fontWeight: 600,
                  backgroundColor: theme.palette.secondary.second,
                  border: `1px dotted ${theme.palette.primary.main}`,
                  padding: "6px",
                  borderRadius: 1,
                }}
              >
                About us
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.secondary.third,
                    fontFamily: theme.typography.fontFamily,
                    fontWeight: "900",
                    pt: 2,
                  }}
                >
                  Make your life easier with help from
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.secondary.main,
                    fontFamily: theme.typography.fontFamily,
                    fontWeight: "900",
                    pb: 1,
                  }}
                >
                  Deo Web
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.black,
                    fontFamily: theme.typography.fontFamily,
                    py: 1,
                  }}
                >
                  Deoweb is one of the fastest-growing information and
                  technology companies with its head office in Surat.
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.lightgrey,
                    fontFamily: theme.typography.fontFamily,
                    py: 1,
                  }}
                >
                  Deoweb Infotech is a rapidly growing ERP software development
                  company in India that ensures technology is in line with your
                  business goals.
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.lightgrey,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  Regardless, of the size and nature of the business. At Deoweb,
                  we provide the best ERP software solutions that help your
                  business in adaption operational automati on in your
                  organization.
                </Typography>
               
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Box>
                    <img src="https://i.postimg.cc/bvVqFvtw/6909666.webp" alt="images"/>
                </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Aboutus;
