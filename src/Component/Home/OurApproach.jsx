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
      title: "Analysis",
      description:
        "Analysis of clients' unique requirements and objectives. Conduct detailed discussions and gather specific information about their business needs and target audience.",
    },
    {
      id: 2,
      title: "Strategizing",
      icon: a2,
      description:
        "Formulate a comprehensive plan and strategy for efficient project execution. Define project milestones, establish timelines, and allocate necessary resources.",
    },
    {
      id: 3,
      title: "Design",
      icon: a3,
      description:
        "By conducting thorough research on the target audience, their preferences, and industry trends, we craft visually appealing and highly functional interfaces to provide a seamless user experience.",
    },
    {
      id: 4,
      title: "Agile Development",
      icon: a4,
      description:
        "We employ an agile development methodology, utilizing smaller iterations, regular reviews, and feedback sessions to adapt to changing requirements, ensuring flexibility, collaboration, and faster delivery.",
    },
    {
      id: 5,
      title: "Rigorous Testing",
      icon: a5,
      description:
        "Ensure high-quality and reliable final product through comprehensive testing, addressing bugs, and optimizing performance across platforms for security and optimal functionality.",
    },
    {
      id: 6,
      title: "Maintenance",
      icon: a6,
      description:
        "Assist with the smooth deployment of the solution. Provide ongoing technical support and maintenance services for the project's long-term success.",
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
