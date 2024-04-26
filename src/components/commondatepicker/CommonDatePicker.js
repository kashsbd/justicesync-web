import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CommonDatePicker = ({
  label = "Date Created",
  value,
  setValue,
  ...rest
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        variant="standard"
        value={value}
        onChange={(val) => setValue(val)}
        {...rest}
      />
    </LocalizationProvider>
  );
};

export default CommonDatePicker;
