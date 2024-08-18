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
    icon:s1,
    title: "Web Development",
    shortCode: "web-development",
    description: "We offer end-to-end mobile app development services, including Native Mobile iOS/Android coding, wireframing, graphic design, project management, testing, and app store approvals.",
  },
  {
    id: 2,
    icon:s2,
    title: "App Development",
    shortCode: "app-development",
    description: "At the best IT company, we specialize in developing responsive data-driven web apps, guiding customers through the wireframe/design process for bug-free, continuous use.",
  },
  {
    id: 3,
    icon:s3,
    title: "Product Design",
    shortCode: "p-design",
    description: "Design holds the utmost significance in every product. Our dedicated team prioritizes user experience throughout the customer journey.",
  },
  {
    id: 4,
    icon:s4,
    title: "Custom Software Development",
    shortCode: "csd",
    description: "Our custom software automates manual tasks, meets specific requirements, and enhances business operations, including custom CRM and ERP solutions that boost revenue.",
  },
  {
    id: 5,
    icon:s5,
    title: "Staff Augmentation",
    shortCode: "staff",
    description: "Get rapid access to missing capabilities and skills with our Staff Augmentation services to meet your immediate & long-term business needs.",
  },
  {
    id: 6,
    icon:s6,
    title: "Support and Maintenance",
    shortCode: "support",
    description: "We offer complete Software support & maintenance services to keep your software 100% efficient, accessible & glitch-free!",
  },
  {
    id: 7,
    icon:s7,
    title: "Software Testing & QA",
    shortCode: "testing",
    description: "Our desktop/web/mobile app testing teams aim to increase cost-effectiveness and reduce rework time by identifying potential issues early in the project life.",
  },
  {
    id: 8,
    icon:s8,
    title: "Artificial Intelligence & Machine Learning",
    shortCode: "ai",
    description: "The vision of Patoliya AI Development Services is to bring innovative, unexpected solutions.",
  },
  {
    id: 9,
    icon:s9,
    title: "DevOps Consulting",
    shortCode: "devops",
    description: "It's time to consider opting for a DevOps implementation service to improve your company's productivity.",
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
