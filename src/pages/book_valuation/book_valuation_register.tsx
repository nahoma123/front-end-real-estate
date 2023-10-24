import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Grid,
  MenuItem,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextFieldWithValidation from "../../components/common/TextFieldWithValidation";
import DateTimePickerWithValidation from "../../components/common/DateTimePicker";
import { validationRules } from "utils/validationRules";

type BookValuationRegistrationProps = {};

type FormInputs = {
  fullName: string;
  email: string;
  phoneNumber: string;
  status: string;
  termsAccepted: boolean;
  selectedDateTime: Date | null;
};

const BookValuationRegistration: React.FC<
  BookValuationRegistrationProps
> = () => {
  const { handleSubmit, control } = useForm<FormInputs>();

  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit((data) => {
    setLoading(true);
    console.log(data);

    // Perform form submission logic here
    // Simulating an asynchronous operation with setTimeout
    setTimeout(() => {
      setLoading(false);
      // Additional logic after form submission
    }, 2000);
  });

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
            <form onSubmit={onSubmit}>
              <TextFieldWithValidation
                fullWidth
                name="fullName"
                control={control}
                defaultValue=""
                label="Full Name"
                rules={validationRules.fullName}
              />

              <TextFieldWithValidation
                fullWidth
                name="email"
                control={control}
                rules={validationRules.email}
                defaultValue=""
                label="Email Address"
                type="email"
              />

              <TextFieldWithValidation
                fullWidth
                name="phoneNumber"
                control={control}
                defaultValue=""
                label="Phone Number"
                rules={validationRules.phoneNumber}
                type="tel"
              />

              <TextFieldWithValidation
                fullWidth
                name="status"
                control={control}
                defaultValue=""
                rules={validationRules.select}
                label="Which best describes your status?"
                select
              >
                <MenuItem value="1">I'm ready to list with FreeLets</MenuItem>
                <MenuItem value="2">
                  I want to learn more about FreeLets
                </MenuItem>
                <MenuItem value="3">
                  I'm not sure if I'm ready to sell yet
                </MenuItem>
                <MenuItem value="4">Just curious about value</MenuItem>
              </TextFieldWithValidation>

              <Box width="100%" marginTop={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePickerWithValidation
                    rules={validationRules.basic}
                    control={control}
                    name="selectedDateTime"
                    label="Preferred Call Date and Time"
                  />
                </LocalizationProvider>
              </Box>

              <Box marginTop={2} marginBottom={2}>
                <Box display="flex" alignItems="center">
                  <Checkbox
                    // checked={termsAccepted}
                    // onChange={handleTermsAcceptedChange}
                    required
                  />
                  <Typography variant="body2">
                    I accept the terms and conditions.
                  </Typography>
                </Box>
              </Box>

              <input type="hidden" name="address" value={queryValue} />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                style={{ borderRadius: 0, marginTop: 20 }}
                disabled={loading}
              >
                {loading ? (
                  <Box width="100%">
                    <CircularProgress color="primary" />
                  </Box>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export { BookValuationRegistration };
