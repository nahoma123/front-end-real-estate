import React from "react";
import { Paper, Container, Typography, Box, Button, Grid } from "@mui/material";
import AdvCarousel from "../../components/presentational/carousel/carousel";

const LandingPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box paddingTop={5} paddingBottom={2}>
        <Grid justifyContent={"left"}>
          <Typography
            sx={{ fontWeight: "bold" }}
            variant="h4"
            align="left"
            gutterBottom
          >
            Welcome to Our Real Estate Website
          </Typography>
          <Typography variant="subtitle1" align="left" gutterBottom>
          At our estate agency, we provide a comprehensive range of services without charging any fees.
          </Typography>
        </Grid>
      </Box>

      <Grid paddingBottom={10}>
        <AdvCarousel />
      </Grid>
    </Container>
  );
};

export default LandingPage;
