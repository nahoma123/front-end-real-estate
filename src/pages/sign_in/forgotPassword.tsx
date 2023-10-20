import { LockOpen, Mail } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Grid,
  LinearProgress,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { forgotPassword, resetPassword } from "../../services/apiService";

type ForgotPasswordFormInputs = {
  email: string;
  pin: number; // Change the type to number
  newPassword: string;
};

export function ForgotPasswordForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ForgotPasswordFormInputs>();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [showPinForm, setShowPinForm] = useState(false);
  const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);

      if (!showPinForm) {
        // Step 1: Request PIN
        await forgotPassword(data.email);
        setShowPinForm(true);
        setError(null);
      } else {
        // Step 3: Reset Password
        await resetPassword(data.email, data.pin, data.newPassword);
        setError(null);
        setPasswordResetSuccess(true);
        setShowPinForm(false);
      }
    } catch (error: any) {
      setError(error?.error?.message);
      setSnackbarOpen(true);
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
              disabled={showPinForm}
            />
          )}
        />

        {showPinForm ? (
          <>
            <Controller
              name="pin"
              control={control}
              defaultValue={0} // Change the default value to 0 or another number
              rules={{
                required: "PIN is required",
                validate: {
                  validPin: (value) => !isNaN(value) || "Invalid PIN", // Validate that it's a number
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="PIN"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  error={!!errors.pin}
                  helperText={errors.pin?.message}
                />
              )}
            />

            <Controller
              name="newPassword"
              control={control}
              defaultValue=""
              rules={{
                required: "New password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="New Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  error={!!errors.newPassword}
                  helperText={errors.newPassword?.message}
                />
              )}
            />
          </>
        ) : null}

        <Button
          type="submit"
          variant="contained"
          style={{ borderRadius: "0px", marginTop: "20px" }}
          fullWidth
          startIcon={showPinForm ? <LockOpen /> : <Mail />}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Box width="100%">
              <LinearProgress color="primary" />
            </Box>
          ) : showPinForm ? (
            "Reset Password"
          ) : (
            "Forgot Password"
          )}
        </Button>
      </form>

      <Snackbar
        open={snackbarOpen || passwordResetSuccess}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message={error}
      >
        {passwordResetSuccess ? (
          <Alert severity="success">Password reset successful!</Alert>
        ) : (
          <Alert severity="error">{`${error}`}</Alert>
        )}
      </Snackbar>
    </Box>
  );
}
