import { LockOpen } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Grid,
  LinearProgress,
  Snackbar,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { loginUser } from "../../services/apiService";

type LoginFormInputs = {
  email: string;
  password: string;
};

export function LoginForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const [error, setError] = useState<string | null>(null); // State variable for error message
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State variable for snackbar visibility

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);

      // Call the API service to log in the user
      await loginUser(data.email,data.password);

      // Handle successful login (e.g., show success message, redirect)
      console.log("Login successful!");
    } catch (error: any) {
      // Handle login error (e.g., display error message)
      console.log("-Error-");
      // console.log(error.response?.data); // Log the response data
      setError(error?.error?.message); // Set the error message
      setSnackbarOpen(true); // Open the snackbar
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              fullWidth
              margin="dense"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="dense"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          style={{ borderRadius: "0px", marginTop: "20px" }}
          fullWidth
          startIcon={<LockOpen />}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Box width="100%">
              <LinearProgress color="primary" />
            </Box>
          ) : (
            "Login"
          )}
        </Button>
      </form>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message={error}
      >
        <Alert severity="error">{`${error}`}</Alert>
      </Snackbar>
    </Box>
  );
}