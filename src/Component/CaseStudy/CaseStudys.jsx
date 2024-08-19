import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import case1 from "../../assets/image/caseStudy/case1.png";
import case2 from "../../assets/image/caseStudy/case2.png";
import case3 from "../../assets/image/caseStudy/case3.png";
import case4 from "../../assets/image/caseStudy/case4.png";
import case5 from "../../assets/image/caseStudy/case5.png";

function CaseStudys() {
  const theme = useTheme();
  return (
    <>
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
            <Grid item xs={12} md={6} lg={5}>
              <Box>
                <div className="development image">
                  <img src={case1} alt="images" />
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
              <Box
                style={{
                  display: "inline-block",
                  fontSize: "14px",
                  color: theme.palette.secondary.third,
                  fontWeight: 600,
                  backgroundColor: theme.palette.secondary.second,
                  border: `1px dotted ${theme.palette.primary.main}`,
                  padding: "3px",
                  borderRadius: 1,
                }}
              >
                Jbs Technology
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.secondary.third,
                    fontFamily: theme.typography.fontFamily,
                    fontWeight: "900",
                    pt: 2,
                  }}
                >
                  ERP based Education Software
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.lightgrey,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  Jbs Technology ERP based education software by deoweb is a
                  comprehensive and innovative solution for managing the daily
                  operations of educational institutions.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

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
            <Grid item xs={12} md={6} lg={7}>
              <Box
                style={{
                  display: "inline-block",
                  fontSize: "14px",
                  color: theme.palette.secondary.third,
                  fontWeight: 600,
                  backgroundColor: theme.palette.secondary.second,
                  border: `1px dotted ${theme.palette.primary.main}`,
                  padding: "3px",
                  borderRadius: 1,
                }}
              >
                Infinity Exim
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.secondary.third,
                    fontFamily: theme.typography.fontFamily,
                    fontWeight: "900",
                    pt: 2,
                  }}
                >
                  Gold Loan Website with ERP based admin panel
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.lightgrey,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  Your trusted partner in gold financing. Offering fast, secure,
                  and hassle-free gold loans with competitive interest rates.
                  Our website ensures a seamless experience for all your
                  financial needs. Trust us for reliable and efficient gold loan
                  services
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
              <Box>
                <div className="development image">
                  <img src={case2} alt="images" />
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

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
            <Grid item xs={12} md={6} lg={5}>
              <Box>
                <div className="development image">
                  <img src={case3} alt="images" />
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
              <Box
                style={{
                  display: "inline-block",
                  fontSize: "14px",
                  color: theme.palette.secondary.third,
                  fontWeight: 600,
                  backgroundColor: theme.palette.secondary.second,
                  border: `1px dotted ${theme.palette.primary.main}`,
                  padding: "3px",
                  borderRadius: 1,
                }}
              >
                Infinity Exim
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.secondary.third,
                    fontFamily: theme.typography.fontFamily,
                    fontWeight: "900",
                    pt: 2,
                  }}
                >
                  Global Import & Export Solutions
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.lightgrey,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  Infinity Exim specializes in connecting global markets by
                  offering comprehensive import and export services. We ensure
                  seamless transactions, quality products, and timely
                  deliveries, empowering businesses to expand their reach across
                  borders. Partner with us to navigate the complexities of
                  international trade.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

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
            <Grid item xs={12} md={6} lg={7}>
              <Box
                style={{
                  display: "inline-block",
                  fontSize: "14px",
                  color: theme.palette.secondary.third,
                  fontWeight: 600,
                  backgroundColor: theme.palette.secondary.second,
                  border: `1px dotted ${theme.palette.primary.main}`,
                  padding: "3px",
                  borderRadius: 1,
                }}
              >
                Borad consultancy
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.secondary.third,
                    fontFamily: theme.typography.fontFamily,
                    fontWeight: "900",
                    pt: 2,
                  }}
                >
                  Essential government services Website
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.lightgrey,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  Borad Consultancy excels in government projects, providing
                  comprehensive solutions for infrastructure, policy
                  implementation, and digital transformation. Our expertise
                  ensures efficient project execution, compliance with
                  regulations, and sustainable development for public sector
                  clients. Trust us for innovative and reliable services.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
              <Box>
                <div className="development image">
                  <img src={case4} alt="images" />
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

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
            <Grid item xs={12} md={6} lg={5}>
              <Box>
                <div className="development image">
                  <img src={case5} alt="images" />
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
              <Box
                style={{
                  display: "inline-block",
                  fontSize: "14px",
                  color: theme.palette.secondary.third,
                  fontWeight: 600,
                  backgroundColor: theme.palette.secondary.second,
                  border: `1px dotted ${theme.palette.primary.main}`,
                  padding: "3px",
                  borderRadius: 1,
                }}
              >
                Jbs It Institute
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.secondary.third,
                    fontFamily: theme.typography.fontFamily,
                    fontWeight: "900",
                    pt: 2,
                  }}
                >
                  Empowering your tech journey Website
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.customColors.lightgrey,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  JBS IT Institute provides industry-focused IT service courses,
                  including network administration, cloud computing, and IT
                  support. Our programs are designed to equip learners with
                  practical skills and certifications, ensuring they are ready
                  to meet the demands of today's tech-driven workplaces.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default CaseStudys;
