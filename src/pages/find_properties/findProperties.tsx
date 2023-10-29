import React, { useState } from "react";
import { Container, Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import PropertyFilter from "./propertiesFilter";
import { handleFormSubmit, PropertyFilterData } from "services/findPropertyFilter";

const FindProperties: React.FC = () => {
  // Let's value your home
  async function handleFilter(data: any) {
    const res: any = await handleFormSubmit(data);
    SetProperties(res?.data);
    console.log("PropertiesData", res)
  }
  const [properties, SetProperties] = useState<PropertyFilterData[]>([]);
  return (
    <Box marginTop="100px">
      <Container>
        <Box marginTop={3} marginBottom={4}>
          <PropertyFilter onSubmit={handleFilter} />
        </Box>
      </Container>

      <Container>
        {properties?.map((data) => (
          <Card key={data.address} sx={{ display: "flex", marginBottom: 3 }}>
            <CardMedia
              component="img"
              sx={{ width: 200 }}
              // image={data.} // Replace with the actual image URL property
              alt={data.address}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Applicant name: {data.address}
              </Typography>
              <Typography variant="body1" component="div">
                Minimum Amount: {data.minAmount}
              </Typography>
              <Typography variant="body1" component="div">
                Maximum Amount: {data.maxAmount}
              </Typography>
              {/* Include additional property details here */}
            </CardContent>
          </Card>
        ))}
      </Container>
    </Box>
  );
};

export default FindProperties;
