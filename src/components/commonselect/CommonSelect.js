import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const CommonSelect = ({
  value,
  setValue,
  label,
  width,
  menuItems,
  ...rest
}) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <FormControl {...rest} variant="standard" sx={{ m: 1, minWidth: width }}>
        <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={handleChange}
          label={label}
          variant="standard"
        >
          {menuItems.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default CommonSelect;
