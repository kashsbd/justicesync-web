import { TextField } from "@mui/material";
import React from "react";

const InputField = ({ label, variant, className,...rest }) => {
  return (
    <TextField
      className={className}
      variant={variant}
      label={label}
      {...rest}
    />
  );
};

export default InputField;
