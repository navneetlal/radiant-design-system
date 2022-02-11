import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";

const Exception = ({ ...otherProps }: MuiSvgIconProps) => {
  return (
    <MuiSvgIcon
      sx={{ width: "12px", height: "12px" }}
      viewBox="0 0 12 12"
      {...otherProps}
    >
      <circle cx="6" cy="6" r="6" fill="#F9D7D7" />
      <circle cx="6" cy="6" r="4" fill="#CC3333" />
    </MuiSvgIcon>
  );
};

export default Exception;
