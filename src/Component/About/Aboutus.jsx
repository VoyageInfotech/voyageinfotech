import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
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
                Who We Are
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
                  Simplify Your Business Journey with
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
                  Voyageinfotech
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.black,
                    fontFamily: theme.typography.fontFamily,
                    py: 1,
                  }}
                >
                  Voyageinfotech is a dynamic and fast-growing IT company based in Surat, dedicated to empowering businesses with innovative technology solutions.
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.lightgrey,
                    fontFamily: theme.typography.fontFamily,
                    py: 1,
                  }}
                >
                  As a leading ERP software development firm in India, we align technology with your business objectives to drive growth and efficiency.
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.lightgrey,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  No matter the size or type of your business, Voyage Infotech offers top-notch ERP solutions that streamline your operations and automate processes for enhanced productivity.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box>
                <img src="https://i.postimg.cc/bvVqFvtw/6909666.webp" alt="About DWOWEBTECH" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Aboutus;
