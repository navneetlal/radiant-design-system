import React from "react";

import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";
import MuiSvgIcon from "@mui/material/SvgIcon";



const ArrowDown = ({...props}: MuiSvgIconProps) => {
  return (
    <MuiSvgIcon
      {...props}
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
