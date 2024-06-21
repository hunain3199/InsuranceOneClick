// components/SelectInput.js
import React from "react";
import { useFormContext } from "react-hook-form";
import { TextField, MenuItem, FormHelperText } from "@mui/material";

const SelectInput = ({ label, name, options, className }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-[20px]">
      <TextField
        select
        label={label}
        {...register(name)}
        sx={{ width: "100%", borderRadius: "5px" }}
        className={`${className}`}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <FormHelperText error>{errors[name]?.message}</FormHelperText>
    </div>
  );
};

export default SelectInput;
