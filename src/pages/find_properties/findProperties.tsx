import React from "react";
import { Container, Box } from "@mui/material";
import PropertyFilter from "./propertiesFilter";

const FindProperties: React.FC = () => {
  // Let's value your home
  return (
    <Box>
      <Container>
        <PropertyFilter onSubmit={function (data: any): void {
                  throw new Error("Function not implemented.");
              } }/>
      </Container>

      <Container></Container>
    </Box>
  );
};

export default FindProperties;
