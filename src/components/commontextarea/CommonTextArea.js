import { InputLabel } from "@mui/material";
import React from "react";

const CommonTextArea = ({ rows,label,width }) => {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <textarea style={{width:width}} rows={rows} />
    </>
  );
};

export default CommonTextArea;
