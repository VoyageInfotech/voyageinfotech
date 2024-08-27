import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import f1 from "../../assets/image/About/quality/1.webp";
import f2 from "../../assets/image/About/quality/2.webp";

function FeatureItem({ imgSrc, title, description }) {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
      <Box sx={{ width: "30%" }}>
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.customColors.white,
            p: 1,
            width: 80,
            height: 80,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={imgSrc} alt="icon" style={{ width: 30, height: 30 }} />
        </Box>
      </Box>
      <Box sx={{ pl: 2, width: "70%" }}>
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: theme.typography.fontFamily,
            color: theme.palette.secondary.main,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: theme.palette.customColors.lightgrey,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

function Features() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: {
          xs: 2,
          sm: 4,
          md: 4,
          lg: 6,
        },
        backgroundColor: theme.palette.secondary.second,
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: theme.palette.secondary.main,
                fontWeight: "bold",
              }}
            >
              Expect Great Features
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureItem
              imgSrc={f1}
              title="Excellence"
              description="We prioritize excellence to ensure that our customers receive the best possible experience, fostering long-term loyalty."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureItem
              imgSrc={f2}
              title="Honesty"
              description="Honesty is key to gaining our clients' trust, forging strong partnerships, and ensuring our team remains motivated and engaged."
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Features;
