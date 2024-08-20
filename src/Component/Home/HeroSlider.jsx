import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Lightbtn from "../../Global/Button/Lightbtn";
import Darkbtn from "../../Global/Button/Darkbtn";

const HeroSlider = () => {
  const theme = useTheme();
  const words = ["Software", "Helper", "Opportunity"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    const changeWord = () => {
      setSlideIn(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setSlideIn(true);
      }, 500); // 500ms slide-out time
    };

    const intervalId = setInterval(changeWord, 3000); // Change word every 3 seconds

    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    <Box
      sx={{
        py: {
          xs: 2,
          lg: 4,
        },
        backgroundColor: theme.palette.primary.second,
      }}
    >
      <Container>
        <Box 
         sx={{
          marginTop:{
            xs: 10,
          }
         }}
        >
          <Grid container spacing={2} alignItems="center" row>
            <Grid item xs={12} md={6} lg={7}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: theme.palette.typography,
                
                }}
              >
                <Typography
                  component="span"
                  variant="h3"
                  sx={{
                    marginRight: 1,
                    fontWeight: "bold",
                    fontFamily: theme.palette.typography,
                    fontSize: {
                      xs: "1.5rem",
                      md: "2.5rem",
                    },
                  }}
                >
                  Your business deserves better
                  <Typography
                    component="span"
                    variant="h3"
                    sx={{
                      position: "relative",
                      ml: 1,
                      fontWeight: "bold",
                      transition:
                        "transform 500ms ease-in-out, opacity 500ms ease-in-out",
                      transform: slideIn
                        ? "translateY(0)"
                        : "translateY(-100%)",
                      opacity: slideIn ? 1 : 0,
                      color: theme.palette.secondary.main,
                      fontSize: {
                        xs: "1.5rem",
                        md: "2.5rem",
                      },
                    }}
                  >
                    {words[currentWordIndex]}
                  </Typography>
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: 12,
                      md: 14,
                    },
                    color: theme.palette.text.secondary,
                  }}
                >
                  Devotee Web highly delivers the technology that works for
                  tomorrow to empower your business needs.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      md: "flex-start",
                    },
                    mt: 3,
                  }}
                >
                  <Box sx={{ mr: 2 }}>
                    <Lightbtn />
                  </Box>
                  <Box>
                    <Darkbtn />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={5}
            >
              <img
                src="https://i.postimg.cc/pXLGkqpg/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-il.png"
                alt="images"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSlider;
