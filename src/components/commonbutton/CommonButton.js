import { Button } from "@mui/material";
import React from "react";

const CommonButton = ({label,style,variant,onClick}) => {
  return (
    <Button
      style={style}
      variant={variant}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};


export default CommonButton;
