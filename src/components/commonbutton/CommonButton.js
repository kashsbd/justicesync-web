import React from "react";
import { Button } from "@mui/material";

import { colors } from "../../utils/constants";

import "./CommonButton.css";

const CommonButton = ({ label, style, variant, onClick }) => {
  return (
    <Button
      className={variant === "contained" ? "myBtnContained" : "myBtnOutlined"}
      sx={
        variant === "contained"
          ? { backgroundColor: colors.primaryColor }
          : variant === "outlined"
          ? { borderColor: colors.primaryColor, color: colors.primaryColor }
          : ""
      }
      style={style}
      variant={variant}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CommonButton;
