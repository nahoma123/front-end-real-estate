import React, { useState } from "react";
import {
  Grid,
  TextField,
  MenuItem,
  Box,
  Typography,
  Button,
  Checkbox,
  styled,
  CircularProgress,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DateTimePicker } from "@mui/x-date-pickers";
import { SelectChangeEvent } from "@mui/material/Select";
import { useLocation } from "react-router-dom";

type BookValuationRegistrationProps = {};

const StyledTextField = styled(TextField)({
  marginTop: 8,
});

function BookValuationRegistration({}: BookValuationRegistrationProps) {
  const location = useLocation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false); // New loading state

  const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  const handleTermsAcceptedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTermsAccepted(event.target.checked);
  };

  const handleDateTimeChange = (date: Date | null) => {
    setSelectedDateTime(date);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true); // Show loading state

    // Perform form submission logic here
    // Simulating an asynchronous operation with setTimeout
    setTimeout(() => {
      setLoading(false); // Hide loading state
      // Additional logic after form submission
    }, 2000);
  };

  // Get the value from the route query
  const searchParams = new URLSearchParams(location.search);
  const queryValue = searchParams.get("value") || "";

  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item sm={6}>
          <Box paddingTop={5} paddingBottom={2} margin={3}>
            <Grid justifyContent={"left"}>
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="h3"
                align="left"
                gutterBottom
              >
                Let's value your home
              </Typography>
              <Typography
                variant="h5"
                align="left"
                style={{ display: "inline" }}
              >
                Book a no-obligation home valuation with our FreeLets agent:
              </Typography>
            </Grid>
          </Box>

          <Box margin={3}>
            {loading ? ( // Render loading state while loading is true
              <Box textAlign="center">
                <CircularProgress />
              </Box>
            ) : (
              <form onSubmit={handleSubmit}>
                <StyledTextField
                  label="Full Name"
                  value={fullName}
                  onChange={handleFullNameChange}
                  variant="outlined"
                  fullWidth
                  required
                />
                <StyledTextField
                  label="Email Address"
                  value={email}
                  onChange={handleEmailChange}
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                />
                <StyledTextField
                  label="Phone Number"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  variant="outlined"
                  fullWidth
                  required
                  type="tel"
                />
                <StyledTextField
                  label="Which best describes your status?                "
                  select
                  value={status}
                  onChange={handleStatusChange}
                  variant="outlined"
                  fullWidth
                  required
                >
                  <MenuItem value="1">I'm ready to list with FreeLets</MenuItem>
                  <MenuItem value="2">
                    I want to learn more about FreeLets
                  </MenuItem>
                  <MenuItem value="3">
                    I'm not sure if I'm ready to sell yet
                  </MenuItem>
                  <MenuItem value="4">Just curious about value</MenuItem>
                </StyledTextField>
                <Box width="100%">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      sx={{width: "100%", marginTop: 2 }}
                      label="Preferred Call Date and Time"
                      value={selectedDateTime}
                      onChange={handleDateTimeChange}
                    />
                  </LocalizationProvider>
                </Box>
                <Box marginTop={2} marginBottom={2}>
                  <Box display="flex" alignItems="center">
                    <Checkbox
                      checked={termsAccepted}
                      onChange={handleTermsAcceptedChange}
                      required
                    />
                    <Typography variant="body2">
                      I accept the terms and conditions.
                    </Typography>
                  </Box>
                </Box>
                <input type="hidden" name="address" value={queryValue} />
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  style={{ borderRadius: 0 }}
                >
                  Submit
                </Button>
              </form>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export { BookValuationRegistration };