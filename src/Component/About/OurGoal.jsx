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
        "We are dedicated to fostering your business growth through cutting-edge custom ERP solutions. Our focus is on implementing seamless enterprise software to overcome daily operational hurdles and enhance efficiency.",
    },
    {
      id: 2,
      icon: w2,
      title: "Our Vision",
      description:
        "Our vision is to emerge as a leading global IT service provider. In a rapidly evolving market, we strive to deliver top-tier enterprise system development solutions that secure a competitive edge for our clients.",
    },
    {
      id: 3,
      icon: w3,
      title: "Our Core Values",
      description:
        "We are committed to delivering high-quality solutions with a focus on client satisfaction and continuous improvement, ensuring your business thrives in a dynamic and competitive environment.",
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
          <Box sx={{ textAlign: "center", marginBottom: 2 }}>
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
               Our Goals
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
