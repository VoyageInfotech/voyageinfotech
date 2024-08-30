import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Form from "./Form";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";

function ContactUs() {
  const theme = useTheme();
  const contactInfo = [
    {
      icon: (
        <AddLocationAltIcon/>
      ),
      text: "409, Shanti Niketan flora business point,abrama road,surat",
    },
    {
      icon: <EmailIcon />,
      text: "Voyageinfotech09@gmail.com",
      link: "mailto:Voyageinfotech09@gmail.com",
    },
    {
      icon: <PhoneIcon />,
      text: "+91 95376 05003",
      link: "tel:+91 95376 05003",
    },
  ];

  const socialMediaLinks = [
    { icon: <FacebookIcon sx={{ fontSize: "40px" }} />, link: "#" },
    {
      icon: <InstagramIcon sx={{ fontSize: "40px" }} />,
      link: "#",
    },
    { icon: <TwitterIcon sx={{ fontSize: "40px" }} />, link: "#" },
    {
      icon: <LinkedInIcon sx={{ fontSize: "40px" }} />,
      link: "#",
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
          <Grid
            container
            spacing={2}
            sx={{
              boxShadow: theme.palette.customColors.shadow,
              p: 2,
            }}
          >
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: theme.palette.secondary.third,
                  borderRadius:2,
                  p: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: theme.palette.customColors.white,
                    }}
                  >
                    Connect with Us
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.palette.customColors.white,
                      py: 3,
                    }}
                  >
                    We love to hear from you. Our friendly team is always here
                    to chat.
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      my: 2,
                      color: theme.palette.customColors.white,
                    }}
                  >
                    Ready to start a project?
                  </Typography>
                  <Box>
                    {contactInfo.map((info, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: "40px",
                            height: "40px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: theme.palette.secondary.second,
                            color: theme.palette.primary.main,
                            borderRadius: "10%",
                            mr: 2,
                          }}
                        >
                          {info.icon}
                        </Box>
                        {info.link ? (
                          <Link
                            to={info.link}
                            style={{
                              fontSize: "20px",
                              color: theme.palette.primary.second,
                            }}
                          >
                            {info.text}
                          </Link>
                        ) : (
                          <Typography
                            sx={{
                              fontSize: "20px",
                              color: theme.palette.primary.second,
                            }}
                          >
                            {info.text}
                          </Typography>
                        )}
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box>
                  {socialMediaLinks.map((media, index) => (
                    <Link
                      key={index}
                      to={media.link}
                      style={{
                        color: theme.palette.secondary.second,
                        marginRight: "10px",
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {media.icon}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
      >
        <Container>
          <Grid container justifyContent="center">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.530529819246!2d72.88687117352991!3d21.210800881504532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f1f68e54d09%3A0xe1d3d1a8bc631529!2sEditsh%20Technology!5e0!3m2!1sen!2sin!4v1720786780182!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ContactUs;
