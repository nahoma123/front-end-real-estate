import { DateTimePickerProps, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Controller, useFormContext } from "react-hook-form";

type DateTimePickerWithValidationProps = {
  name: string;
  control: any;
  label: string;
  rules: any;
} & DateTimePickerProps<Date>;

const DateTimePickerWithValidation: React.FC<
  DateTimePickerWithValidationProps
> = ({ name, defaultValue, control, rules, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field }) => (
        <DateTimePicker
          {...field}
          label={label}
          value={field.value || null}
          onChange={(date: any) => field.onChange(date)}
        />
      )}
    />
  );
};

export default DateTimePickerWithValidation;
