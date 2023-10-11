import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import AdvCarousel from "../../components/presentational/carousel/carousel";
import SavingsCalculator from "../../components/presentational/saving/saving";

const LandingPage: React.FC = () => {
  return (
    <div>
      <Container>
        <Box paddingTop={5} paddingBottom={2}>
          <Grid justifyContent={"left"}>
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h4"
              align="left"
              gutterBottom
            >
              Welcome to FreeLets
            </Typography>
            <Typography variant="subtitle1" align="left" gutterBottom>
              At our estate agency, we provide a comprehensive range of services
              without charging any fees.
            </Typography>
          </Grid>
        </Box>
      </Container>
      <Grid paddingBottom={10}>
        <AdvCarousel />
      </Grid>
      <Grid container paddingBottom={1} marginTop={1} marginBottom={5}>
        <Grid item md={6}></Grid>
        <Grid item container md={6}>
          <SavingsCalculator />
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
