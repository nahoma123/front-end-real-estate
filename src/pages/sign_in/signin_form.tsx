import { LockOpen } from "@mui/icons-material";
import { Box, Button, LinearProgress } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../services/apiService";
import TextFieldWithValidation from "../../components/common/TextFieldWithValidation";
import PasswordFieldWithValidation from "../../components/common/PasswordFieldWithValidation";
import ErrorSnackbar from "../../components/common/ErrorSnackbar";
import { validationRules } from "utils/validationRules";

type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const {
    handleSubmit,
    control,
  } = useForm<LoginFormInputs>();
  const [error, setError] = useState<string | null>(null); // State variable for error message
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State variable for snackbar visibility

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      await loginUser(data.email, data.password);
      console.log("Login successful!");
    } catch (error: any) {
      setError(error?.error?.message); // Set the error message
      setSnackbarOpen(true); // Open the snackbar
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <TextFieldWithValidation
          name="email"
          control={control}
          defaultValue=""
          rules={validationRules.email}
          label="Email"
        />

        <PasswordFieldWithValidation
          name="password"
          control={control}
          defaultValue=""
          rules={validationRules.password}
          label="Password"
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

      <ErrorSnackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        message={error}
      />
    </Box>
  );
};

export { LoginForm };
