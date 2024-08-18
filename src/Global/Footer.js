import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import SquareIcon from "@mui/icons-material/Square";
import { Link } from "react-router-dom";
import ScrollTotopbtn from "./ScrollTotopbtn";
import  footerLogo from '../assets/image/deoweblogo.png';

const Footer = () => {
  const theme = useTheme();

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61555676966897",
      Icon: FacebookOutlinedIcon,
    },
    {
      href: "https://twitter.com/JBSTechnology26",
      Icon: TwitterIcon,
    },
    {
      href: "https://www.instagram.com/editsh_technology/",
      Icon: InstagramIcon,
    },
    {
      href: "https://www.linkedin.com/company/editsh/posts/?feedView=all",
      Icon: LinkedInIcon,
    },
    {
      href: "https://wa.me/9601175985",
      Icon: WhatsAppIcon,
    },
  ];

  const data = [
    {
      title: "Useful Links",
      links: [
        { text: "Home", to: "/", icon: <SquareIcon sx={{ fontSize: "8px" }} /> },
        { text: "About", to: "/about", icon: <SquareIcon sx={{ fontSize: "8px" }} /> },
        { text: "Blogs", to: "/blogs", icon: <SquareIcon sx={{ fontSize: "8px" }} /> },
        { text: "Technology", to: "/technology", icon: <SquareIcon sx={{ fontSize: "8px" }} /> },
        { text: "Contact Us", to: "/contact-us", icon: <SquareIcon sx={{ fontSize: "8px" }} /> },
        { text: "Terms", to: "/term", icon: <SquareIcon sx={{ fontSize: "8px" }} /> },
      ],
    },
    {
      title: "Our Services",
      links: [
        { text: "iOS App Development", to: "/mobile/iosAppDevelopment", icon: <SquareIcon sx={{ fontSize: "8px" }} /> },
        { text: "Node.js Development", to: "/backend/nodejsDevelopment", icon: <SquareIcon sx={{ fontSize: "8px" }} /> },
        { text: "React.js Development", to: "/frontend/reactJsDevelopment", icon: <SquareIcon sx={{ fontSize: "8px" }} /> },
        { text: "Policy", to: "/policy", icon: <SquareIcon sx={{ fontSize: "8px" }} /> },
      ],
    },
  ];

  return (
    <>
      <Box
        sx={{
          background: theme.palette.primary.second,
          zIndex: 1,
          position: "relative",
          py: 6,
          px: { xs: "1rem", sm: "1rem", md: "2rem", xl: "12rem" }
        }}
      >
        <Grid
          container
          color={theme.palette.white}
          sx={{ padding: "10px" }}
        >
          <Grid item xs={12} sm={6} md={6} lg={3} xl={4}>
            <Box>
              <Link to={"/"}>
                <img
                  src={footerLogo} 
                  alt="footer-logo"
                  style={{ width: "30%", height: "120px" }}
                />
              </Link>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.main,
                  fontFamily: theme.typography.fontFamily,
                  pr: 4,
                  maxWidth:'400px'
                }}
              >
                Resources are the biggest strength of any organization, and it
                requires lots of patience and effort to manage them properly.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  my: 3,
                  width: "100%",
                }}
              >
                {socialLinks.map((social, index) => (
                  <Box key={index}>
                    <Link to={social.href} target="_blank">
                      <social.Icon
                        sx={{
                          fontSize: "30px",
                          color: theme.palette.primary.main,
                          mx: "2px",
                          mr: 3,
                          transition: "transform 0.3s ease-in-out",
                          "&:hover": {
                            transform: "translateY(-10px)",
                            color: theme.palette.secondary.main,
                          },
                        }}
                      />
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {data.map((section) => (
            <Grid item xs={12} sm={6} md={6} lg={3} xl={2} key={section.title}>
              <Box>
                <Typography
                  sx={{
                    letterSpacing: "0.7px",
                    mb: 2,
                    fontWeight: "600",
                    fontSize: "18px",
                    color: theme.palette.primary.main,
                  }}
                >
                  {section.title}
                </Typography>
                <Box sx={{ my: 1.3 }}>
                  {section.links.map((item) => (
                    <Link to={item.to || "#"} title={item.text} key={item.text}>
                      <Box
                        sx={{
                          textDecoration: "none",
                          color: theme.palette.primary.main,
                          fontSize: "13px",
                          letterSpacing: "0.8px",
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          gap: "10px",
                          my: 2,
                          transition: "transform 0.3s ease-in-out",
                          "&:hover": {
                            transform: "translateX(-10px)",
                            color: theme.palette.secondary.main,
                          },
                        }}
                      >
                        <Box
                          sx={{
                            justifyContent: "space-evenly",
                            fontSize: "14px",
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Box sx={{ fontSize: "14px" }}>{item.text}</Box>
                      </Box>
                    </Link>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}

          <Grid item xs={12} sm={6} md={6} lg={3} xl={4}>
            <Typography
              sx={{
                letterSpacing: "0.7px",
                mb: 2,
                fontWeight: "600",
                fontSize: "20px",
                color: theme.palette.secondary.main,
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ my: 1.3 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  my: "10px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    width: "40px",
                    height: "40px",
                    textAlign: "center",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <EmailOutlinedIcon sx={{ fontSize: "25px" ,
                    color:  theme.palette.customColors.white
                  }} />
                </Box>
                <Link
                  to="mailto:edithtech01@gmail.com"
                  style={{
                    color: theme.palette.primary.main,
                    fontFamily: theme.typography.fontFamily,
                    fontSize: "14px",
                    marginLeft: "18px",
                  }}
                >
                  edithtech01@gmail.com
                </Link>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  my: "9px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    width: "40px",
                    height: "40px",
                    textAlign: "center",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <CallOutlinedIcon sx={{ fontSize: "25px" ,
                    color:  theme.palette.customColors.white
                  }} />
                </Box>
                <Link
                  to="tel:+919601175985"
                  style={{
                    color: theme.palette.primary.main,
                    fontFamily: theme.typography.fontFamily,
                    fontSize: "14px",
                    marginLeft: "18px",
                  }}
                >
                  +91 9601175985
                </Link>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  my: "9px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    width: "40px",
                    height: "40px",
                    textAlign: "center",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <FmdGoodIcon sx={{ fontSize: "25px" ,
                    color:  theme.palette.customColors.white
                  }} />
                </Box>
                <Link
                  to="https://goo.gl/maps/EMLgQrkzomRRt7vH6"
                  target="_blank"
                  style={{
                    color: theme.palette.primary.main,
                    fontFamily: theme.typography.fontFamily,
                    fontSize: "14px",
                    marginLeft: "18px",
                  }}
                >
                  Ahmedabad, Gujarat, India
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <ScrollTotopbtn />
      </Box>
    </>
  );
};

export default Footer;
