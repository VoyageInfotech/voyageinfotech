import { useTheme } from "@emotion/react";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import s1 from '../../assets/image/business/S1.webp';
import s2 from '../../assets/image/business/S2.webp';
import s3 from '../../assets/image/business/S3.webp';
import s4 from '../../assets/image/business/S4.webp';
import s5 from '../../assets/image/business/S5.webp';
import s6 from '../../assets/image/business/S6.webp';
import s7 from '../../assets/image/business/S7.webp';
import s8 from '../../assets/image/business/S8.webp';
import s9 from '../../assets/image/business/S9.webp';
import s10 from '../../assets/image/business/S10.webp';
import s11 from '../../assets/image/business/S11.webp';
import s12 from '../../assets/image/business/s12.webp';
import i1 from '../../assets/image/business/1.webp';
import i2 from '../../assets/image/business/2.webp';
import i3 from '../../assets/image/business/3.webp';
import i4 from '../../assets/image/business/4.webp';
import i5 from '../../assets/image/business/5.webp';
import i6 from '../../assets/image/business/6.webp';
import i7 from '../../assets/image/business/7.webp';
import i8 from '../../assets/image/business/8.webp';
import i9 from '../../assets/image/business/9.webp';
import i10 from '../../assets/image/business/10.webp';
import i11 from '../../assets/image/business/11.webp';
import i12 from '../../assets/image/business/12.webp';

function BusinessOutComes() {
  const Bussiness = [
    {
      id: 1,
      title: "Manifacturing",
      icon: i9,
      image:s4
    },
    {
      id: 2,
      title: "Media & Entertaintment",
      icon:i2,
      image:s1
    },
    {
      id: 3,
      title: "Helathcare",
      icon:i6,
      image:s9
    },
    {
      id: 4,
      title: "Education",
      icon:i3,
      image:s5
    },
    {
      id: 5,
      title: "Fintech",
      icon: i11,
      image:s6

    },
    {
      id: 6,
      title: "eCommerce",
      icon:i12,
      image:s12

    },
    {
      id: 7,
      title: "Logistics",
      icon:i7,
      image:s2

    },
    {
      id: 8,
      title: "Fitness",
      icon:i8,
      image:s10

    },
    {
      id: 9,
      title: "Real Estate",
      icon:i1,
      image:s8,

    },
    {
      id: 10,
      title: "Sports",
      icon:i10,
      image:s7

    },
    {
      id: 11,
      title: "LifeStyle",
      icon:i5,
      image:s3

    },
    {
      id: 12,
      title: "Hospitality & Travel",
      icon:i4,
      image:s11

    },
  ];

  const theme = useTheme();

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // Longer transition speed for smoother movement
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1, // Very fast autoplay speed for continuous movement
    pauseOnHover: false, // No pause on hover to maintain continuity
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
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
            Diverse Industry Experience to Accelerate Your Business Outcomes
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
            Diversity unlocks innovation and drives market growth, You’ll be
            able to create programs, projects, and public spaces that better
            meet the community's interests and needs.
          </Typography>
        </Box>

        <Slider {...settings} >
          {Bussiness.map((service) => (
            <Box
            sx={{
                py:{
                    xs: 2,
                    lg:4
                }
            }}
            >
              <Box
                key={service.id}
                sx={{
                  mx: 2,
                  border: `2px solid ${theme.palette.secondary.second}`,
                  borderRadius: 2,
                  p:1,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: theme.shadows[6],
                  },
                }}
              >
                <Box>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    mt: 1,
                  }}
                >
                  <Box>
                    <img
                      src={service.icon}
                      alt={service.title}
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        ml: 2,
                        color: theme.palette.black,
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}

export default BusinessOutComes;
