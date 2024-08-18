import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import w1 from "../../assets/image/About/choose/1.webp";
import w2 from "../../assets/image/About/choose/2.webp";
import w3 from "../../assets/image/About/choose/3.webp";

import "../../assets/css/Home.css";
import { useTheme } from "@emotion/react";

const companyDetails = [
  {
    icon: w1,
    title: "Attentive to the Details",
    description:
      "In the grand scheme of things, the small intricacies of your business hold tremendous significance. We strive to grasp every facet of your operations, enabling us to deliver superior products and comprehensive after-sales services.",
  },
  {
    icon: w2,
    title: "You Are Exceptional",
    description:
      "Recognizing the value of being heard, understood, and standing out, we have dedicated a team solely to craft custom web designs and solutions tailored specifically for you. Our web development specialists ensure you receive the exclusivity and distinctiveness you deserve.",
  },
  {
    icon: w3,
    title: "It's a Partnership",
    description:
      "At the heart of the business lies relationships. Our goal extends beyond providing solutions; we aim to care for your business processes and offer expert IT consultancy, empowering you to focus on the core aspects of your enterprise.",
  },
];

const WhyChoose = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          py: {
            xs: 2,
            sm: 3,
            md: 5,
          },
        }}
      >
        <Container>
          <Box sx={{ textAlign: "center", marginBottom: 2 }}>
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.secondary.third,
                fontFamily: theme.palette.fontFamily,
                fontWeight: "bold",
                mb: 1,
                fontSize:{
                    xs: 24,
                    sm: 28,
                    lg:30
                }
              }}
            >
              Why Choose Deoweb ?
            </Typography>
          </Box>

          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{
              mt: 2,
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
                        <img src={service.icon} alt="icon"  sx={{
                            width: 40,
                            height: 40,
                        }}/>
                      </div>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      component="h6"
                      textAlign="center"
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
                        fontFamily:theme.typography.fontFamily,

                        my: 1,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default WhyChoose;
