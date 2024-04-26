import React from "react";
import { InputLabel } from "@mui/material";

const CommonTextArea = ({ rows, label, width, ...rest }) => {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <textarea style={{ width }} rows={rows} {...rest} />
    </>
  );
};

export default CommonTextArea;
