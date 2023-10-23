import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

type TextFieldWithValidationProps = {
  name: string;
  control: any;
  defaultValue: string;
  rules: any;
  label: string;
};

const TextFieldWithValidation: React.FC<TextFieldWithValidationProps> = ({
  name,
  control,
  defaultValue,
  rules,
  label,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          fullWidth
          margin="dense"
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default TextFieldWithValidation;