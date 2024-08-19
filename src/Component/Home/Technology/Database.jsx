import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import i1 from "../../../assets/image/Home/technology/Database/1.webp";
import i2 from "../../../assets/image/Home/technology/Database/2.webp";
import i3 from "../../../assets/image/Home/technology/Database/3.webp";


function Database() {
  const front = [
    { id: 1, src: i1, heading: "My Sql" },
    { id: 2, src: i2, heading: "Fire Base" },
    { id: 3, src: i3, heading: "Mongo Db" },
  ];
  const theme = useTheme();

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1, 
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {front.map((service) => (
          <Box
            sx={{
              py: {
                xs: 2,
                lg: 4,
              },
            }}
          >
            <Box
              key={service.id}
              sx={{
                mx: 2,
                border: `2px solid ${theme.palette.secondary.second}`,
                borderRadius: 2,
                p: 1,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: theme.shadows[6],
                },
              }}
            >
              <Box sx={{
                width:80,
                height:80,
                  margin:'auto',
                  display:'flex',
                  justifyContent:'center'
              }}>
                <img
                  src={service.src}
                  alt={service.heading}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    ml: 2,
                    color: theme.palette.customColors.black,
                    textAlign:'center'
                  }}
                >
                  {service.heading}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </>
  );
}

export default Database;
