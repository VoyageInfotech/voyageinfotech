import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Lightbtn from "../../Global/Button/Lightbtn";
import Darkbtn from "../../Global/Button/Darkbtn";

const HeroSlider = () => {
  const theme = useTheme();
  const words = ["Software", "Helper", "Opportunity"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);

  const canvasRef = useRef(null);
  const DOTS_AMOUNT = 1000;
  const DOT_RADIUS = 2;
  const DOT_COLOR = theme.palette.secondary.main;

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

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (window.devicePixelRatio > 1) {
        canvas.width = width * 2;
        canvas.height = height * 2;
        ctx.scale(2, 2);
      } else {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const createDots = (
      GLOBE_RADIUS,
      GLOBE_CENTER_Z,
      FIELD_OF_VIEW,
      PROJECTION_CENTER_X,
      PROJECTION_CENTER_Y
    ) => {
      const dots = [];
      for (let i = 0; i < DOTS_AMOUNT; i++) {
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(Math.random() * 2 - 1);

        const x = GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta);
        const y = GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta);
        const z = GLOBE_RADIUS * Math.cos(phi) + GLOBE_CENTER_Z;
        dots.push(new Dot(x, y, z));
      }
      return dots;
    };

    class Dot {
      constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.xProject = 0;
        this.yProject = 0;
        this.sizeProjection = 0;
      }

      project(
        sin,
        cos,
        GLOBE_CENTER_Z,
        FIELD_OF_VIEW,
        PROJECTION_CENTER_X,
        PROJECTION_CENTER_Y
      ) {
        const rotX = cos * this.x + sin * (this.z - GLOBE_CENTER_Z);
        const rotZ =
          -sin * this.x + cos * (this.z - GLOBE_CENTER_Z) + GLOBE_CENTER_Z;
        this.sizeProjection = FIELD_OF_VIEW / (FIELD_OF_VIEW - rotZ);
        this.xProject = rotX * this.sizeProjection + PROJECTION_CENTER_X;
        this.yProject = this.y * this.sizeProjection + PROJECTION_CENTER_Y;
      }

      draw(
        ctx,
        sin,
        cos,
        GLOBE_CENTER_Z,
        FIELD_OF_VIEW,
        PROJECTION_CENTER_X,
        PROJECTION_CENTER_Y
      ) {
        this.project(
          sin,
          cos,
          GLOBE_CENTER_Z,
          FIELD_OF_VIEW,
          PROJECTION_CENTER_X,
          PROJECTION_CENTER_Y
        );
        ctx.fillStyle = DOT_COLOR; // Set the dot color
        ctx.beginPath();
        ctx.arc(
          this.xProject,
          this.yProject,
          DOT_RADIUS * this.sizeProjection,
          0,
          Math.PI * 2
        );
        ctx.closePath();
        ctx.fill();
      }
    }

    const render = (a) => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const GLOBE_RADIUS = width * 0.7;
      const GLOBE_CENTER_Z = -GLOBE_RADIUS;
      const FIELD_OF_VIEW = width * 0.9;
      const PROJECTION_CENTER_X = width / 2;
      const PROJECTION_CENTER_Y = height / 2;
    
      const dots = createDots(
        GLOBE_RADIUS,
        GLOBE_CENTER_Z,
        FIELD_OF_VIEW,
        PROJECTION_CENTER_X,
        PROJECTION_CENTER_Y
      );
    
      ctx.clearRect(0, 0, width, height);
    
      // Smooth rotation over time
      const rotationSpeed = 0.0005; // Slower rotation speed
      const rotation = a * rotationSpeed; // Control the speed of rotation
      const sineRotation = Math.sin(rotation);
      const cosineRotation = Math.cos(rotation);
    
      for (let i = 0; i < dots.length; i++) {
        dots[i].draw(
          ctx,
          sineRotation,
          cosineRotation,
          GLOBE_CENTER_Z,
          FIELD_OF_VIEW,
          PROJECTION_CENTER_X,
          PROJECTION_CENTER_Y
        );
      }
    
      window.requestAnimationFrame(render);
    };
    

    const afterResize = () => {
      resizeCanvas();
      render(0);
    };

    resizeCanvas();
    window.addEventListener("resize", afterResize);
    window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", afterResize);
    };
  }, [DOT_COLOR]);

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
        <Grid container rowSpacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
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
                    transform: slideIn ? "translateY(0)" : "translateY(-100%)",
                    opacity: slideIn ? 1 : 0,
                    color: theme.palette.secondary.main,
                    fontFamily: theme.palette.typography,
                  }}
                >
                  {words[currentWordIndex]}
                </Typography>
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: 14,
                  color: theme.palette.text.secondary,
                }}
              >
                Devotee Web highly delivers the technology that works for
                tomorrow to empower your business needs.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  mt:3
                }}
              >
                <Box sx={{mr:2}}>
                  <Lightbtn />
                </Box>
                <Box>
                  <Darkbtn />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="Main-hero">
              <canvas
                id="scene"
                ref={canvasRef}
                style={{
                  width: "90vmin",
                  height: "90vmin",
                  transition: "transform 0.10s ease-in-out",
                }}
              />
              <div className="technology">
                <img
                  src="https://i.postimg.cc/QdSBb2jz/deoweblogo.png"
                  alt="images"
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSlider;
