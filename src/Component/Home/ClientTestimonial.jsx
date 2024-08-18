import React from "react";
import Slider from "react-slick";
import { Container, Typography, Card, Avatar, Box } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import image1 from  '../../assets/image/Home/Qa-testing.png'

const ClientTestimonial = () => {
  const theme = useTheme();


  const  testimonial=[
    {
        id:1,
        image:image1,
        name: "John Doe",
        description: "The work is always high quality and ready on time. They make themselves available to fit my needs, and are flexible when I ask for changes or additions in the specification. Great work, and a pleasure to deal with."
    },
    {
        id:2,
        image:image1,
        name: "John Doe",
        description: "The work is always high quality and ready on time. They make themselves available to fit my needs, and are flexible when I ask for changes or additions in the specification. Great work, and a pleasure to deal with."
    },
    {
        id:3,
        image:image1,
        name: "John Doe",
        description: "The work is always high quality and ready on time. They make themselves available to fit my needs, and are flexible when I ask for changes or additions in the specification. Great work, and a pleasure to deal with."
    }
  ]


  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <ArrowBackIos
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          zIndex: 1,
          width: "35px",
          height: "35px",
          padding: "8px",
          borderRadius: "4px",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.customColors.white,
          boxShadow:theme.palette.customColors.shadow
        }}
        onClick={onClick}
      />
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <ArrowForwardIos
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          top: "50%",
          right: "8px",
          transform: "translateY(-50%)",
          zIndex: 1,
          width: "35px",
          borderRadius: "4px",
          height: "35px",
          padding: "8px",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.customColors.white,
          boxShadow:theme.palette.customColors.shadow
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        my:{
            xs:2,
            md:3,
            lg:4
        },
        backgroundColor: theme.palette.primary.second,
      }}
    >
      <Container
        sx={{
          backgroundColor: "background.testimonial",
          padding: 4,
        }}
      >
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
           What Our Clients Says
          </Typography>
        </Box>

        <Box
          position="relative"
          sx={{
            py: { sm: 4, lg: 4 },
          }}
        >
          <Slider {...settings}>
            {testimonial.map((testimonial, index) => (
              <div key={index}>
                <Card
                  sx={{
                    margin: 2,
                    padding: 3,
                    textAlign: "center",
                    boxShadow: theme.palette.customColors.shadow,
                    borderRadius: "20px",
                    background:
                      "linear-gradient(112deg, #fff 50%, #e4f8ff 50%)",
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: "600px",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      margin: "auto",
                    }}
                  >
                    <Avatar
                      alt={testimonial.image}
                      src={testimonial.image}
                      sx={{
                        margin: "0 auto",
                        marginBottom: 2,
                        width: 100,
                        height: 100,
                      }}
                    />
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ textAlign: "center" }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      sx={{
                        mt: 1,
                        py: 1,
                        lineHeight: "24px",
                        textAlign: "center",
                        fontStyle: "italic",
                      }}
                    >
                      {testimonial.description}
                    </Typography>
                  </Box>
                </Card>
              </div>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default ClientTestimonial;
