import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import k1 from "../../assets/image/features/1.png";
import k2 from "../../assets/image/features/2.png";
import k3 from "../../assets/image/features/3.png";
import k4 from "../../assets/image/features/4.png";
import k5 from "../../assets/image/features/5.png";
import k6 from "../../assets/image/features/6.png";
// Web development
import w4 from "../../assets/image/Home/technology/Frontend/1.webp";
import w2 from "../../assets/image/Home/technology/Backend/2.webp";
import w3 from "../../assets/image/Home/technology/Frontend/5.webp";
import w1 from "../../assets/image/Home/technology/Frontend/3.webp";

function Services() {
  const theme = useTheme();

  const companyDetails = [
    {
      icon: k1,
      title: "Reliability",
    },
    {
      icon: k2,
      title: "Custom Support",
    },
    {
      icon: k3,
      title: "Availability",
    },
    {
      icon: k4,
      title: "Support 24x7",
    },
    {
      icon: k5,
      title: "Flexibility",
    },
    {
      icon: k6,
      title: "Accuracy",
    },
  ];

  return (
    <>
      {/* =========Web Development============= */}
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
            <Grid item xs={12} md={6} lg={7}>
              <Box
                style={{
                  display: "inline-block",
                  fontSize: "14px",
                  color: theme.palette.secondary.third,
                  fontWeight: 600,
                  backgroundColor: theme.palette.secondary.second,
                  border: `1px dotted ${theme.palette.primary.main}`,
                  padding: "3px",
                  borderRadius: 1,
                }}
              >
                Web Solutions
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
                  Seamless Web Solutions: Custom Website Crafting for Your Needs
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.black,
                    fontFamily: theme.typography.fontFamily,
                    py: 1,
                  }}
                >
                  At Devotee Infotech, we specialize in creating bespoke
                  websites designed to enhance user experience and meet your
                  specific business needs.
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.lightgrey,
                    fontFamily: theme.typography.fontFamily,
                    py: 1,
                    lineHeight: "24px",
                  }}
                >
                  Recognizing that each business is unique, we offer tailored
                  web development solutions. Our skilled team excels in both
                  frontend and backend development, utilizing advanced
                  technologies such as Node.js and React.js. We ensure robust
                  performance and innovative solutions to address any technical
                  challenges, delivering websites that are both functional and
                  engaging.
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.lightgrey,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  As leaders in digital innovation, we are committed to
                  providing cutting-edge web development services that cater to
                  your specific requirements. Whether you need a custom web app
                  or a complete digital transformation, we're here to help.
                  Contact us to learn more about how we can support your
                  business.
                </Typography>
              </Box>
              <Box>
                <List>
                  <ListItem>
                    <CircleIcon
                      sx={{
                        color: theme.palette.primary.main,
                        fontSize: "14px",
                        fontFamily: theme.typography.fontFamily,
                        mr: 2,
                      }}
                    />
                    Enterprise Resource Planning (ERP) Solutions
                  </ListItem>
                  <ListItem>
                    <CircleIcon
                      sx={{
                        color: theme.palette.primary.main,
                        fontSize: "14px",
                        fontFamily: theme.typography.fontFamily,
                        mr: 2,
                      }}
                    />
                    Amazon Web Services (AWS) Integration
                  </ListItem>
                </List>
              </Box>
            </Grid>

            <Grid item xs={12} md={6} lg={5}>
              <Box>
                <div className="development image">
                  <img
                    src="https://i.postimg.cc/Hk0hzzj0/web-development.jpg"
                    alt="images"
                  />
                  <div className="tech">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <Box>
                        <Box
                          sx={{
                            backgroundColor: theme.palette.secondary.second,
                            shadow: theme.palette.customColors.shadow,
                            color: theme.palette.primary.main,
                            width: 50,
                            height: 50,
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: theme.palette.secondary.second,
                            },
                          }}
                        >
                          <img src={w4} alt="alt" />
                        </Box>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            backgroundColor: theme.palette.secondary.second,
                            shadow: theme.palette.customColors.shadow,
                            color: theme.palette.primary.main,
                            width: 50,
                            height: 50,
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: theme.palette.secondary.second,
                            },
                          }}
                        >
                          <img src={w2} alt="alt" />
                        </Box>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            backgroundColor: theme.palette.secondary.second,
                            shadow: theme.palette.customColors.shadow,
                            color: theme.palette.primary.main,
                            width: 50,
                            height: 50,
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: theme.palette.secondary.second,
                            },
                          }}
                        >
                          <img src={w3} alt="alt" />
                        </Box>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            backgroundColor: theme.palette.secondary.second,
                            shadow: theme.palette.customColors.shadow,
                            color: theme.palette.primary.main,
                            width: 50,
                            height: 50,
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: theme.palette.secondary.second,
                            },
                          }}
                        >
                          <img src={w1} alt="alt" />
                        </Box>
                      </Box>
                    </Box>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* ===================Key features============================== */}
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
                fontSize: {
                  xs: 24,
                  sm: 28,
                  lg: 30,
                },
              }}
            >
              Key features
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.secondary.lightgrey,
                fontWeight: 400,
                maxWidth: 700,
                margin: "auto",
              }}
            >
              Deoweb offers custom software development services that are
              tailored to meet the specific requirements of each client.
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
                    p: 1,
                    border: `2px solid ${theme.palette.secondary.second}`,
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: theme.shadows[6],
                    },
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        margin: "auto",
                        textAlign: "center",
                      }}
                    >
                      <div className="service-icon">
                        <img
                          src={service.icon}
                          alt="icon"
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
                      sx={{
                        fontFamily: theme.typography.fontFamily,
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
                        fontFamily: theme.typography.fontFamily,

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

      {/* ================ui/ux design====================== */}
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
            <Grid item xs={12} md={6} lg={5}>
              <Box>
                <div className="development image">
                  <img
                    src="https://i.postimg.cc/cHRsRjPR/What-is-UI-UX-Design.jpg"
                    alt="images"
                  />
                  <div className="tech">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <Box>
                        <Button
                          sx={{
                            backgroundColor: theme.palette.secondary.second,
                            shadow: theme.palette.customColors.shadow,
                            color: theme.palette.primary.main,
                            "&:hover": {
                              backgroundColor: theme.palette.secondary.second,
                            },
                          }}
                        >
                          Figma
                        </Button>
                      </Box>
                      <Box>
                        <Button
                          sx={{
                            backgroundColor: theme.palette.secondary.second,
                            shadow: theme.palette.customColors.shadow,
                            color: theme.palette.primary.main,
                            "&:hover": {
                              backgroundColor: theme.palette.secondary.second,
                            },
                          }}
                        >
                          HTML
                        </Button>
                      </Box>
                      <Box>
                        <Button
                          sx={{
                            backgroundColor: theme.palette.secondary.second,
                            shadow: theme.palette.customColors.shadow,
                            color: theme.palette.primary.main,
                            "&:hover": {
                              backgroundColor: theme.palette.secondary.second,
                            },
                          }}
                        >
                          CSS
                        </Button>
                      </Box>
                      <Box>
                        <Button
                          sx={{
                            backgroundColor: theme.palette.secondary.second,
                            shadow: theme.palette.customColors.shadow,
                            color: theme.palette.primary.main,
                            "&:hover": {
                              backgroundColor: theme.palette.secondary.second,
                            },
                          }}
                        >
                          JavaScript
                        </Button>
                      </Box>
                    </Box>
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
              <Box
                style={{
                  display: "inline-block",
                  fontSize: "14px",
                  color: theme.palette.secondary.third,
                  fontWeight: 600,
                  backgroundColor: theme.palette.secondary.second,
                  border: `1px dotted ${theme.palette.primary.main}`,
                  padding: "3px",
                  borderRadius: 1,
                }}
              >
                UI/UX Excellence
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
                  Exceptional UI/UX Design: Beyond Aesthetic Appeal
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.black,
                    fontFamily: theme.typography.fontFamily,
                    py: 1,
                  }}
                >
                  Great design is not just about aesthetics; it's about
                  addressing user needs and solving problems effectively.
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.lightgrey,
                    fontFamily: theme.typography.fontFamily,
                    py: 1,
                    lineHeight: "24px",
                    wordSpacing: "2px",
                  }}
                >
                  In both web and mobile applications, UI/UX design plays a
                  crucial role in success. From initial concepts to information
                  structure and visual presentation, we focus on creating
                  impactful user experiences.
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.lightgrey,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  At Deoweb, we excel in designing interfaces that not only look
                  great but also enhance user engagement and streamline
                  operations. Our expertise extends to crafting customized ERP
                  systems tailored to meet your business needs. Let us help you
                  deliver an outstanding user experience with our comprehensive
                  UI/UX design services. Reach out to us for more information.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* ================Mobile App Development============================= */}
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
            <Grid item xs={12} md={6} lg={7}>
              <Box
                style={{
                  display: "inline-block",
                  fontSize: "14px",
                  color: theme.palette.secondary.third,
                  fontWeight: 600,
                  backgroundColor: theme.palette.secondary.second,
                  border: `1px dotted ${theme.palette.primary.main}`,
                  padding: "3px",
                  borderRadius: 1,
                }}
              >
                Mobile App Development
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
                  Innovating Your Mobile Experience with Cutting-Edge Solutions
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.black,
                    fontFamily: theme.typography.fontFamily,
                    py: 1,
                  }}
                >
                  Mobile applications are pivotal in today’s digital landscape,
                  offering a dynamic platform to engage and retain users. Our
                  app development services are tailored to turn your vision into
                  interactive, high-performing applications that captivate and
                  serve your audience effectively.
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.lightgrey,
                    fontFamily: theme.typography.fontFamily,
                    py: 1,
                    lineHeight: "24px",
                  }}
                >
                  Our expert developers focus on creating mobile apps that blend
                  aesthetic appeal with practical functionality. We adopt a
                  user-first approach to design, ensuring seamless navigation
                  and an intuitive user experience. From ideation through to
                  launch, we collaborate with you to ensure your app meets your
                  strategic goals and stands out in a crowded market.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6} lg={5}>
              <Box>
                <div className="development image">
                  <img
                    src="https://i.postimg.cc/SKfpv8N8/1676372768632.jpg"
                    alt="images"
                  />
                  <div className="tech">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <Box>
                        <Button
                          sx={{
                            backgroundColor: theme.palette.secondary.second,
                            shadow: theme.palette.customColors.shadow,
                            color: theme.palette.primary.main,
                            "&:hover": {
                              backgroundColor: theme.palette.secondary.second,
                            },
                          }}
                        >
                          Java
                        </Button>
                      </Box>
                      <Box>
                        <Button
                          sx={{
                            backgroundColor: theme.palette.secondary.second,
                            shadow: theme.palette.customColors.shadow,
                            color: theme.palette.primary.main,
                            "&:hover": {
                              backgroundColor: theme.palette.secondary.second,
                            },
                          }}
                        >
                          Swift
                        </Button>
                      </Box>
                      <Box>
                        <Button
                          sx={{
                            backgroundColor: theme.palette.secondary.second,
                            shadow: theme.palette.customColors.shadow,
                            color: theme.palette.primary.main,
                            "&:hover": {
                              backgroundColor: theme.palette.secondary.second,
                            },
                          }}
                        >
                          Kotlin
                        </Button>
                      </Box>
                      <Box>
                        <Button
                          sx={{
                            backgroundColor: theme.palette.secondary.second,
                            shadow: theme.palette.customColors.shadow,
                            color: theme.palette.primary.main,
                            "&:hover": {
                              backgroundColor: theme.palette.secondary.second,
                            },
                          }}
                        >
                          React Native
                        </Button>
                      </Box>
                    </Box>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Services;
