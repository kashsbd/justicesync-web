import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";

const CommonDatePicker = ({value,setValue,...rest}) => {

  const handleDateChange = (val) => {
    setValue(val);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date Created"
        variant="standard"
        value={value}
        onChange={handleDateChange}
        {...rest}
      />
    </LocalizationProvider>
  );
};

export default CommonDatePicker;
