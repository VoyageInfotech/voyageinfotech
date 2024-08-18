import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import w1 from "../../assets/image/why/image1.webp";
import w2 from "../../assets/image/why/image2.webp";
import w3 from "../../assets/image/why/image3.webp";
import "../../assets/css/Home.css";
import { useTheme } from "@emotion/react";


const companyDetails = [
  {
    icon: w1,
    title: "Global Exposure",
    description:
      "In over 9 years, we have served clients belonging to the USA, UK, Canada, Europe, and Australia. So, we are well aware of the ways of working and legal terms pertaining to these nations.",
  },
  {
    icon: w2,
    title: "Long Term Relationships",
    description:
      "Patoliya Infotech values long-term client relationships through learning about their needs, goals, and obstacles. Through trust, and exceeding expectations, we deliver customized solutions and build long-term partnerships.",
  },
  {
    icon: w3,
    title: "Diverse Expertise",
    description:
      "We have a skilled team of 50+ IT professionals who possess expertise in varied technologies. Like PHP, MEAN/MERN Stack, Hybrid apps, Android, iOS, and AI, our team has nailed it all.",
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
              component="h4"
              sx={{
                color: theme.palette.secondary.third,
                fontFamily: theme.palette.fontFamily,
                fontWeight: "bold",
                mb: 1,
              }}
            >
              WHY CHOOSE DEOWEB ?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.secondary.lightgrey,
                fontWeight: 400,
                fontFamily: theme.typography.fontFamily,
                maxWidth: 700,
                margin: "auto",
              }}
            >
              Consider our standout qualities along with our work, ethics, team
              capabilities, and client testimonials when choosing us.
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
              <Grid item xs={12} md={6} lg={4}>
                <Box
                  sx={{
                    p: 3,
                    border: `2px solid ${theme.palette.secondary.second}`,
                    borderRadius: 2,
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
                        <img src={service.icon} alt="icon" />
                      </div>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      component="h6"
                      textAlign="center"
                      sx={{
                        fontFamily: 'Nunito", sans-serif',
                        my:1
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="p"
                      textAlign="center"
                      component="p"
                      sx={{
                        color: theme.palette.lightgrey,
                        my:1
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
