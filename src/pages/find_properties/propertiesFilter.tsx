import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

interface PropertyFilterData {
  location: string;
  minPrice?: number;
  maxPrice?: number;
  minBeds?: number;
  maxBeds?: number;
  propertyTypes: string[];
  mustHaves: string[];
  furnished: string;
  studentProperties: boolean;
}

interface PropertyFilterProps {
  onSubmit: (data: PropertyFilterData) => void;
}

const PropertyFilter: React.FC<PropertyFilterProps> = ({ onSubmit }) => {
  const { handleSubmit, control } = useForm<PropertyFilterData>();

  const handleFormSubmit = (data: PropertyFilterData) => {
    onSubmit(data);
  };
  const propertyTypes = [
    { label: "House", value: "house" },
    { label: "Bungalow", value: "bungalow" },
    { label: "Flat", value: "flat" },
    { label: "Garage", value: "garage" },
    { label: "Room", value: "room" },
  ];

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Controller
            name="location"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField label="Location" {...field} fullWidth />
            )}
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <Controller
            name="minPrice"
            control={control}
            render={({ field }) => (
              <TextField label="Min Price" {...field} fullWidth />
            )}
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <Controller
            name="maxPrice"
            control={control}
            render={({ field }) => (
              <TextField label="Max Price" {...field} fullWidth />
            )}
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <Controller
            name="minBeds"
            control={control}
            render={({ field }) => (
              <TextField label="Min Beds" {...field} fullWidth />
            )}
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <Controller
            name="maxBeds"
            control={control}
            render={({ field }) => (
              <TextField label="Max Beds" {...field} fullWidth />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <Controller
              control={control}
              name="propertyTypes"
              defaultValue={[]}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  id="PropertyTypes"
                  variant="outlined"
                  label="Property Types"
                  SelectProps={{
                    multiple: true,
                    renderValue: (selected: any) =>
                      (selected as string[]).join(", "),
                  }}
                >
                  {propertyTypes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <Controller
              name="mustHaves"
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  id="MustHaves"
                  variant="outlined"
                  label="Must Haves"
                  SelectProps={{
                    multiple: true,
                    renderValue: (selected: any) =>
                      (selected as string[]).join(", "),
                  }}
                >
                  <MenuItem value="parking">Parking</MenuItem>
                  <MenuItem value="garden">Garden</MenuItem>
                  <MenuItem value="land">Land</MenuItem>
                  <MenuItem value="rural">Rural</MenuItem>
                  <MenuItem value="annexe">Annexe</MenuItem>
                </TextField>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel>Furnished</InputLabel>
            <Controller
              name="furnished"
              control={control}
              render={({ field }) => (
                <Select defaultValue="any" {...field} value={field.value || []}>
                  <MenuItem value="any">Any</MenuItem>
                  <MenuItem value="furnished">Furnished</MenuItem>
                  <MenuItem value="unfurnished">Unfurnished</MenuItem>
                  <MenuItem value="partFurnished">Part Furnished</MenuItem>
                </Select>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Controller
                name="studentProperties"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
            }
            label="Student Properties"
          />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" fullWidth>
        Filter
      </Button>
    </form>
  );
};

export default PropertyFilter;
