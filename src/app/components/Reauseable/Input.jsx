// components/Input.js
import React from "react";
import { useFormContext } from "react-hook-form";
import { TextField, FormHelperText } from "@mui/material";

const Input = ({ label, type, name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-[20px]">
      <TextField
        label={label}
        type={type}
        {...register(name)}
        sx={{ width: "100%" }}
      />
      <FormHelperText error>{errors[name]?.message}</FormHelperText>
    </div>
  );
};

export default Input;
