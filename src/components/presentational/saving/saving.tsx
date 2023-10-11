import React, { useState } from "react";
import { Slider, Typography, Paper, Box } from "@mui/material";

const SavingsCalculator = () => {
  const [propertyValue, setPropertyValue] = useState(500000);
  const commissionRate = 1.5;

  const calculateSavings = () => {
    const savings = (propertyValue * commissionRate) / 100;
    return savings.toFixed(2);
  };

  const handleSliderChange = (event: any, newValue: any) => {
    setPropertyValue(newValue);
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
      <Typography variant="h4" gutterBottom>
        See how much you could save when you sell your home for free
      </Typography>
      <Box marginTop={5}>
        <Typography variant="subtitle1">
          Savings based on a high street commission of {commissionRate}%:
        </Typography>
      </Box>
      <Box marginTop={2}>
        <Typography variant="h2" gutterBottom textAlign={"center"} fontWeight={"bold"}>
          £{calculateSavings()}
        </Typography>
      </Box>
      <Box marginTop={2}>
        <Slider
          sx={{ paddingTop: "30px" }}
          value={propertyValue}
          min={100000}
          max={1000000}
          step={10000}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          aria-label="Property Value"
        />
      </Box>
      <Box marginTop={2}>
        <Typography variant="subtitle1" gutterBottom>
          Slide to set your property value: £{propertyValue.toLocaleString()}
        </Typography>
      </Box>
    </Paper>
  );
};

export default SavingsCalculator;
