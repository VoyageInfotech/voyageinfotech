import { useTheme } from "@emotion/react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import i1 from "../../assets/image/career/1.webp";
import i2 from "../../assets/image/career/2.webp";
import i3 from "../../assets/image/career/3.webp";
import i4 from "../../assets/image/career/4.webp";
import i5 from "../../assets/image/career/5.webp";
import i6 from "../../assets/image/career/6.webp";
import i7 from "../../assets/image/career/7.webp";
import i8 from "../../assets/image/career/8.webp";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Career() {
  const theme = useTheme();

  const joinUs = [
    {
      id: 1,
      title: "Our Culture",
      description:
        "Patoliya's culture is built on team collaboration, high performance, and opportunity. Everyone is encouraged to bring their skills & ideas, beliefs, backgrounds, talents, capabilities, and lifestyles to work.",
    },
    {
      id: 2,
      title: "How Work Style",
      description:
        "We value passion and determination. It's not just about who you are today, but what you can be! So we don't just focus on an individual's skill and talent. Their potential and willingness to learn also matter.",
    },
    {
      id: 3,
      title: "Continuous Learning",
      description:
        "Focus on training the team to grow their current profile and develop skills, competencies and talent that foster the skills for future roles and responsibilities.",
    },
  ];

  const careerBenefits = [
    { id: 1, icon: i1, description: "5.5 Days a Week" },
    {
      id: 2,
      icon: i2,
      description: "Quarterly Events and Outings for Lunch/Dinner",
    },
    { id: 3, icon: i3, description: "Flexible Timings" },
    {
      id: 4,
      icon: i4,
      description: "Opportunity to Work With a Fun, Amazing and Talented Team",
    },
    { id: 5, icon: i5, description: "Birthday and Festival Celebration" },
    {
      id: 6,
      icon: i6,
      description: "Great Place to Learn with Phenomenal Growth Opportunity",
    },
    { id: 7, icon: i7, description: "Annual Trip" },
    { id: 8, icon: i8, description: "Employee Engagement Activities" },
  ];
  return (
    <>
      {/* Why Joi n us */}
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
            <Grid item xs={12} md={6} lg={6}>
              <img
                src="https://i.postimg.cc/HkqwB7FH/image.webp"
                alt="images"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Box
                sx={{
                  mb: 3,
                }}
              >
                <Typography
                  variant="h3"
                  component="span"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: "bold",
                  }}
                >
                  Why
                  <Typography
                    variant="h3"
                    component="span"
                    sx={{
                      color: theme.palette.customColors.lightgrey,
                      fontWeight: "bold",
                      ml: 1,
                    }}
                  >
                    Join US
                  </Typography>
                </Typography>
              </Box>
              <Grid container spacing={3}>
                {joinUs.map((item) => (
                  <Grid item xs={12} sm={12} md={12} key={item.id}>
                    <Box
                      sx={{
                        border: `1px  dotted  ${theme.palette.primary.third}`,
                        p: 2,
                        borderRadius: 4,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: theme.palette.secondary.main,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body2">
                        {item.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Opptunity with us */}
      <Box
        sx={{
          py: {
            xs: 2,
            sm: 2,
            md: 3,
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
              Opportunity With Us
            </Typography>
          </Box>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{
              mt: 3,
            }}
          >
            {careerBenefits.map((benefit, index) => (
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
                          src={benefit.icon}
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
                      variant="body1"
                      textAlign="center"
                      component="p"
                      sx={{
                        color: theme.palette.customColors.lightgrey,
                        fontFamily: theme.typography.fontFamily,
                        textAlign: "left",
                        ml: 2,
                      }}
                    >
                      {benefit.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/* Boost up Your career */}
      {/* Opptunity with us */}
      <Box
        sx={{
          py: {
            xs: 2,
            sm: 2,
            md: 3,
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
              Boost Up Your Career Growth With Us!
            </Typography>
          </Box>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
            <Grid item xs={12} md={6} lg={4}>
              <Box
                sx={{
                  p: 1,
                  border: `2px solid ${theme.palette.secondary.second}`,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: theme.shadows[6],
                  },
                }}
              >
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.secondary.third,
                      fontWeight: "bold",
                      fontFamily: theme.typography.fontFamily,
                      ml: 2,
                    }}
                  >
                    Full Stack Developer
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.customColors.black,
                      fontFamily: theme.typography.fontFamily,
                      ml: 2,
                      fontSize: "14px",
                    }}
                  >
                    A full stack developer typically requires the following
                    skills :
                  </Typography>
                  <Box
                    sx={{
                      px: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems:'center'
                    }}
                  >
                    <Box
                      sx={{
                        p:1,
                        display: "flex",
                        justifyContent: "space-around",
                        color: theme.palette.primary.main,
                      }}
                    >
                      <Box sx={{mr:2}}>React Js</Box> <Box> | </Box> <Box sx={{ml:2}}>Node Js</Box>
                    </Box>
                    <Typography
                      sx={{ color: theme.palette.customColors.black }}
                    >
                      Exp. - 1+ Yrs.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems:'center'
                    }}
                  >
                    <Button
                      sx={{
                        color: theme.palette.primary.main,
                        backgroundColor: theme.palette.secondary.second,
                      }}
                    >
                      Full Time - WFH
                    </Button>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img
                        src="https://i.postimg.cc/0Q3hxKdV/whatsapp-icon.png"
                        alt="images"
                        style={{ width: 20, height: 20 }}
                      />
                      <Link
                        to="/"
                        target="_blank"
                        style={{
                          color: theme.palette.primary.main,
                          marginLeft: "10px",
                        }}
                      >
                        Apply Here
                      </Link>
                    </Box>
                  </Box>
                  <Box>
                    <Link
                      to="mailto:abhishekvaghasiya00@gmail.com"
                      style={{
                        color: theme.palette.primary.main,
                        marginLeft: "10px",
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", px: 2 }}
                      >
                        <Typography>Apply now</Typography>
                        <ArrowRightAltIcon
                          sx={{
                            fontSize: 20,
                            color: theme.palette.primary.main,
                            ml: 2,
                          }}
                        />
                      </Box>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Career;
