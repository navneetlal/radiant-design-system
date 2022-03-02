import React from "react";

import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";
import MuiSvgIcon from "@mui/material/SvgIcon";

export interface IArrowDownIconProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}

const ArrowDownIcon = ({ fillColor, ...props }: IArrowDownIconProps) => {
  return (
    <MuiSvgIcon {...props} viewBox="0 0 16 16">
      <path
        d="M4 6L8 10L12 6"
        stroke={fillColor || "#2C63E5"}
        color="#fff"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </MuiSvgIcon>
  );
};

export default ArrowDownIcon;
