import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "../../assets/css/Home.css";
import { useTheme } from "@emotion/react";
import s1 from '../../assets/image/service/image1.webp';
import s2 from '../../assets/image/service/image2.webp';
import s3 from '../../assets/image/service/image3.webp';
import s4 from '../../assets/image/service/image4.webp';
import s5 from '../../assets/image/service/image5.webp';
import s6 from '../../assets/image/service/image6.webp';
import s7 from '../../assets/image/service/image7.webp';
import s8 from '../../assets/image/service/image8.webp';
import s9 from '../../assets/image/service/image9.webp';

const services = [
  {
    id: 1,
    icon: s1,
    title: "Comprehensive Web Development",
    shortCode: "web-development",
    description: "We provide complete web development solutions, from design and coding to deployment, ensuring a seamless, responsive experience tailored to your business needs.",
  },
  {
    id: 2,
    icon: s2,
    title: "Mobile App Creation",
    shortCode: "app-development",
    description: "Specializing in mobile app development, we offer end-to-end services including UX/UI design, coding for iOS and Android, testing, and app store launch.",
  },
  {
    id: 3,
    icon: s3,
    title: "Innovative Product Design",
    shortCode: "p-design",
    description: "Our team focuses on delivering top-notch design services that enhance the user experience, ensuring your product is both functional and aesthetically pleasing.",
  },
  {
    id: 4,
    icon: s4,
    title: "Tailored Software Solutions",
    shortCode: "csd",
    description: "We create custom software solutions that automate processes, improve efficiency, and meet specific business requirements, including CRM and ERP systems.",
  },
  {
    id: 5,
    icon: s5,
    title: "Expert Staff Augmentation",
    shortCode: "staff",
    description: "Expand your team's capabilities quickly with our staff augmentation services, designed to provide the specialized skills you need for any project.",
  },
  {
    id: 6,
    icon: s6,
    title: "Reliable Support & Maintenance",
    shortCode: "support",
    description: "Our ongoing support and maintenance services ensure your software remains effective, up-to-date, and free of technical issues.",
  },
  {
    id: 7,
    icon: s7,
    title: "Quality Assurance & Testing",
    shortCode: "testing",
    description: "Our QA and testing services focus on identifying and fixing issues early, reducing costs and ensuring your software's reliability across all platforms.",
  },
  {
    id: 8,
    icon: s8,
    title: "AI & Machine Learning Solutions",
    shortCode: "ai",
    description: "We develop cutting-edge AI and machine learning solutions that offer innovative insights and drive business growth through automation and intelligent decision-making.",
  },
  {
    id: 9,
    icon: s9,
    title: "DevOps Strategy & Implementation",
    shortCode: "devops",
    description: "Enhance your development process with our DevOps consulting services, designed to streamline operations and boost productivity through automation and collaboration.",
  },
];



const OurServices = () => {
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
                fontWeight: "bold",
                mb: 1,
              }}
            >
              Our Services
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
              We provide suitable advice and maintain adequate communication to
              serve you in the ever-evolving business environment.
            </Typography>
          </Box>

          <Grid container spacing={2} justifyContent="center" sx={{
            mt:2    ,
          }}>
            {services.map((service, index) => (
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
                  <Box sx={{ p: 2 ,
                    display: "flex",
                   justifyContent:'center'

                  }}>
                    <div className="service-icon">
                      <img src={service.icon} alt="icon"  style={{
                        width: 60,
                        height: 60,
                      }}/>
                    </div>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: theme.typography.fontFamily,
                        fontWeight:'bold',
                        textAlign:'center',
                        py:1
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: theme.palette.customColors.lightgrey,
                        fontFamily: theme.typography.fontFamily,
                        textAlign:'center'
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

export default OurServices;
