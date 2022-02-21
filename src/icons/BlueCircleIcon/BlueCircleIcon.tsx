import React from "react";

import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";
import MuiSvgIcon from "@mui/material/SvgIcon";


export interface IBlueCircleIconProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}
const BlueCircleIcon = ({ fillColor, ...otherProps }: IBlueCircleIconProps) => {
  return (
    <MuiSvgIcon
      {...otherProps}
      viewBox="0 0 16 16"
    >
      <circle cx="8" cy="8" r="8" fill={fillColor || "#BFD2FD"} />
    </MuiSvgIcon>
  );
};

export default BlueCircleIcon;
