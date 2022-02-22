import React from "react";

import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";
import MuiSvgIcon from "@mui/material/SvgIcon";

const ChevronLeftIcon = ({...props} : MuiSvgIconProps) => {
  return (
    <MuiSvgIcon
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="#2C63E5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </MuiSvgIcon>
  );
};


export default ChevronLeftIcon;