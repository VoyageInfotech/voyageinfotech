import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import a1 from "../../assets/image/approach/image1.webp";
import a2 from "../../assets/image/approach/image2.webp";
import a3 from "../../assets/image/approach/image3.webp";
import a4 from "../../assets/image/approach/image4.webp";
import a5 from "../../assets/image/approach/image5.webp";
import a6 from "../../assets/image/approach/image6.webp";
function OurApproach() {
  const theme = useTheme();

  const Approach = [
    {
      id: 1,
      icon: a1,
      title: "Client Requirement Analysis",
      description:
        "Conduct an in-depth analysis of client requirements and goals. Engage in detailed discussions to gather insights into their business needs and target demographics.",
    },
    {
      id: 2,
      icon: a2,
      title: "Strategic Planning",
      description:
        "Develop a thorough plan and strategy for project execution. Set clear milestones, create timelines, and allocate resources efficiently for smooth progress.",
    },
    {
      id: 3,
      icon: a3,
      title: "User-Centric Design",
      description:
        "Design visually engaging and functional interfaces by researching user preferences and industry trends, aiming to deliver an intuitive user experience.",
    },
    {
      id: 4,
      icon: a4,
      title: "Agile Development Process",
      description:
        "Implement an agile development process with iterative cycles, regular reviews, and feedback loops to adapt swiftly to evolving requirements and ensure timely delivery.",
    },
    {
      id: 5,
      icon: a5,
      title: "Comprehensive Quality Testing",
      description:
        "Conduct thorough testing to ensure the final product is secure, reliable, and performs optimally across all platforms, addressing bugs and enhancing functionality.",
    },
    {
      id: 6,
      icon: a6,
      title: "Ongoing Support & Maintenance",
      description:
        "Facilitate seamless deployment and offer continuous technical support and maintenance to ensure the long-term success of the solution.",
    },
  ];
  

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
                fontWeight: "bold",
                mb: 1,
              }}
            >
              Our Approach
            </Typography>
          </Box>

          <Grid container spacing={4} row sx={{
            py:{
              xs: 2,
              sm: 3,
              md: 5,
            }
          }}>
            {Approach.map((service, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    transition:
                      "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: theme.shadows[6],
                    },
                  }}
                >
                  <div className="Approach-icon" style={{ flexGrow: 1 }}>
                    <div className="icon">{service.id}</div>
                    <Box
                      sx={{
                        p: 3,
                        boxShadow: theme.palette.customColors.shadow,
                        border: `2px solid ${theme.palette.secondary.main}`,
                        borderRadius:4,
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        height: "400px",
                      }}
                    >
                      <Box
                        sx={{
                          p: 2,
                          width: 100,
                          height: 100,
                          margin: "auto",
                        }}
                      >
                        <div className="service-icon">
                          <img src={service.icon} alt="icon" />
                        </div>
                      </Box>
                      <Box sx={{ flexGrow: 1, textAlign: "center" }}>
                        <Typography
                          variant="h6"
                          component="h6"
                          sx={{
                            py: 2,
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: "bold",
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: theme.palette.lightgrey,
                            fontFamily: theme.typography.fontFamily,
                          }}
                        >
                          {service.description}
                        </Typography>
                      </Box>
                    </Box>
                  </div>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default OurApproach;
