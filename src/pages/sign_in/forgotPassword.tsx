import React from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
import { Login } from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";
import { loginUser } from "../../services/api";

type ForgotPasswordFormProps = {
  // handleFormChange: () => void;
};

type ForgotPasswordFormInputs = {
  email: string;
  password: string;
};

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ForgotPasswordFormInputs>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      // Call the API service to submit the form data
      await loginUser(data.email, data.password);

      // Handle successful login (e.g., redirect, update user state)
      console.log("Login successful!");
    } catch (error) {
      // Handle login error (e.g., display error message)
      console.error("Login failed:", error);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Box display="flex" flexDirection="column" alignItems="center">
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
              type="email"
              fullWidth
              variant="outlined"
              margin="normal"
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
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
        />

        <Button
          style={{ borderRadius: "0px", marginTop: "20px" }}
          fullWidth
          type="submit"
          variant="contained"
          startIcon={<Login />}
        >
          Login
        </Button>
      </Box>
    </form>
  );
};

export { ForgotPasswordForm };
