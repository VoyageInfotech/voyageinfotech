import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import w1 from "../../assets/image/About/goal/1.png";
import w2 from "../../assets/image/About/goal/2.png";
import w3 from "../../assets/image/About/goal/3.png";
function OurGoal() {
  const theme = useTheme();

  const companyDetails = [
    {
      id: 1,
      icon: w1,
      title: "Our Mission",
      description:
        " Our mission is in your growth of the business with a better serving of high-tech custom ERP software. Our key area of business is concerned with the implementation of integrated enterprise software to eliminate operational challenges faced by you in your day-to-day business. ",
    },
    {
      id: 2,
      icon: w2,
      title: "Our Vision",
      description:
        " Our vision is to be the best among the IT service providers across the world. As the world is on a competitive edge we aim to provide the best enterprise system development solutions to our clients for acquiring a better position in the competitive market. ",
    },
    {
      id: 3,
      icon: w3,
      title: "Core Values",
      description:
        " Our core values of the organization are to be providing solutions with quality, satisfaction, and commitment to upgrading your business in this competitive world. ",
    },
  ];
  return (
    <>
      <Box
        sx={{
          py: {
            xs: 2,
            sm: 4,
            md: 4,
            lg: 6,
          },
        }}
      >
        <Container>
          <Box sx={{ textAlign: "left", marginBottom: 2 }}>
            <Typography
              variant="h4"
              component="h4"
              sx={{
                color: theme.palette.secondary.third,
                fontFamily: theme.palette.fontFamily,
                fontWeight: "bold",
                mb: 1,
              }}
            >
              Just Know About Our Goals
            </Typography>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              sx={{
                mt: 4,
              }}
            >
              {companyDetails.map((service, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Box
                    sx={{
                      p: 3,
                      border: `2px solid ${theme.palette.secondary.second}`,
                      borderRadius: 2,
                      height: 400,
                      display: "flex",
                      flexDirection: "column", 
                      justifyContent: "flex-start",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: theme.shadows[6],
                      },
                    }}
                  >
                    <Box sx={{ p: 2 }}>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          margin: "auto",
                          textAlign: "center",
                        }}
                      >
                        <div className="service-icon">
                          <img src={service.icon} alt="icon" 
                          sx={{
                            width: 40,
                            height: 40,
                        }}
                          />
                        </div>
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        component="h6"
                        textAlign="center"
                        fontWeight='bold'
                        sx={{
                          fontFamily:theme.typography.fontFamily,
                          color: theme.palette.primary.main,
                          my: 1,
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        textAlign="center"
                        component="p"
                        sx={{
                          color: theme.palette.customColors.lightgrey,
                          my: 1,
                          fontFamily:theme.typography.fontFamily,
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default OurGoal;
