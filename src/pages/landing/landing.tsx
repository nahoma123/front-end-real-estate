import React, { useState } from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import AdvCarousel from "../../components/presentational/carousel/carousel";
import SavingsCalculator from "../../components/presentational/saving/saving";
import ImgFixedHeight from "../../components/presentational/image/fixed_height_img";
import { OnboardingModalWrapper } from "../../components/presentational/model/onboarding_call";
import { primaryColor } from "../../styles/color";

const LandingPage: React.FC = () => {
  let headerImg: string =
    "https://strike.co.uk/static/3dbf764cfe936cff963003edf259f6d6/aa754/fees-hero.webp";
  return (
    <Box>
      <Container>
        <Box paddingTop={5} paddingBottom={2}>
          <Grid justifyContent={"left"}>
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h3"
              align="left"
              gutterBottom
            >
              Welcome to FreeLets
            </Typography>
            <Typography variant="h5" align="left" style={{ display: "inline" }}>
              See how much you could save per year when you let your home for
              <Typography
                variant="h5"
                align="left"
                fontWeight="1000"
                style={{
                  display: "inline",
                  padding: "5px",
                  // backgroundColor: primaryColor,
                  color: "black",
                  backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0) calc(100% - 5px), #948c1e calc(100% - 5px), #948c1e 100%, rgba(0, 0, 0, 0) 100%)",
                }}
              >
                Free
              </Typography>
            </Typography>
          </Grid>
        </Box>
      </Container>
      <Grid container marginTop={"10px"} marginBottom={"10px"}>
        <ImgFixedHeight imageUrl={headerImg} />
      </Grid>
      <Grid
        container
        paddingBottom={1}
        marginTop={1}
        marginBottom={5}
        direction="row"
      >
        <Grid
          item
          md={6}
          container
          alignItems="center"
          direction="column"
          justifyContent="center"
        >
          {/* <img
            style={{ height: "25%", margin: "10px" }}
            alt="testing1"
            src="https://strike.co.uk/static/ebb219314ad10098c1b9ade11391feb1/5d2f5/selling.webp"
          /> */}

          <Typography variant="h4" align="center">
            Check how much you could save when you sell your home for free
          </Typography>
        </Grid>
        <Grid item container md={6}>
          <SavingsCalculator />
        </Grid>
      </Grid>
      <Grid container paddingBottom={10}>
        <AdvCarousel />
      </Grid>
      <OnboardingModalWrapper />
    </Box>
  );
};

export default LandingPage;
