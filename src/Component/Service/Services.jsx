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
                Web development
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
                  Hassle-free Web Development Services: Tailored Made Website
                  Development
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.black,
                    fontFamily: theme.typography.fontFamily,
                    py: 1,
                  }}
                >
                  Devotee infotech is committed to enhancing the customer
                  experience by offering tailored made Website Development
                  services.
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.lightgrey,
                    fontFamily: theme.typography.fontFamily,
                    py: 1,
                    lineHeight: "24px",
                  }}
                >
                  Devotee infotech is committed to enhancing the customer
                  experience by offering tailored made website development
                  services. Every business is unique and so for that Devotee
                  infotech is a custom website development company, by
                  delivering your business-centric approach for end-to-end
                  solutions. With strong hands-on R&D and the right resources,
                  our dedicated team excels in developing all kinds of websites.
                  We manage all the tech problems with innovative solutions that
                  make an entirely new flavor of solutions. Our highly-skilled
                  and dedicated development team are expert in both backend as
                  well as front-end development services. We have expertise in
                  working with specific back-end technologies - Node JS and
                  React JS. Our dedicated developer's team build sustainable
                  workflow using different methodology and programming practices
                  for the enhanced quality of the frontend code.
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.lightgrey,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  As a pioneer in providing outstanding and end-to-end digital
                  solutions, we shoulder the responsibility to provide
                  cutting-edge web development services to all our clients. We
                  widely work for delivering tailored web apps to fit your
                  specific business needs and engage customers. Contact us for
                  more details.
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
                    Enterprise resource planning(ERP)
                  </ListItem>
                  <ListItem>
                    <CircleIcon
                      sx={{
                        color: theme.palette.primary.main,
                        fontSize: "14px",
                        fontFamily: theme.typography.fontFamily,
                        mr: 2,
                      }}
                    />{" "}
                    Amazon Web Services(AWS){" "}
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
                          React js
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
                          Node js
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
                          Next js
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
                          TypeScript
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
                UI/UX Design
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
                  We believe that good UI/UX design is about more than just
                  creating beautiful visuals.
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.black,
                    fontFamily: theme.typography.fontFamily,
                    py: 1,
                  }}
                >
                  Visual design is about solving the problem, not about personal
                  preference or unsupported opinions.
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
                  In any web or mobile application, UI/UX design is the catalyst
                  of success. Starting from conceptualization, information
                  architecture, and visual identity.
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.lightgrey,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  Deoweb is a well-known UI/UX design company where we have
                  expertise in handcrafting beautiful web designs that build
                  brand identity and effective ERP systems that help run your
                  business smoothly and attract potential customers. We strive
                  to bring solid results to our clients quicker with the best of
                  our UI/UX designing services. Our ERP systems are
                  tailored-made systems that suit specific customer
                  requirements. If you want to create a compelling end-user
                  experience with UI/UX design services, we craft interactive
                  designs for your users on the web platforms. Contact us for
                  more details.
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
                App development
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
                  Crafting Innovative and User-Centric Mobile Solutions
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.black,
                    fontFamily: theme.typography.fontFamily,
                    py: 1,
                  }}
                >
                  In today's digital era, mobile apps have become the
                  cornerstone of success for businesses, offering an
                  unparalleled way to engage with customers. Our mobile app
                  development services are designed to transform your ideas into
                  high-performance, feature-rich applications that resonate with
                  your target audience.
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.lightgrey,
                    fontFamily: theme.typography.fontFamily,
                    py: 1,
                    lineHeight: "24px",
                  }}
                >
                  Our team of seasoned developers specializes in creating mobile
                  apps that are not only visually appealing but also highly
                  functional. We take a user-centric approach to design,
                  ensuring that the apps we develop are easy to navigate and
                  provide an exceptional user experience. From initial concept
                  to final deployment, we work closely with you to understand
                  your unique needs and goals, delivering a product that truly
                  stands out in the competitive mobile landscape.
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
