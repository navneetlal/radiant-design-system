import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";


const ArrowDown = ({...props}: MuiSvgIconProps) => {
  return (
    <MuiSvgIcon
      {...props}
      style={{ width: "16px", height: "16px", backgroundColor: "#ffffff" }}
      viewBox="0 0 16 16"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="#2C63E5"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </MuiSvgIcon>
  );
};

export default ArrowDown;
