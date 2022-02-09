import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";

export interface IBlueCircleIconProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}
const BlueCircleIcon = ({ fillColor, ...otherProps }: IBlueCircleIconProps) => {
  return (
    <MuiSvgIcon
      {...otherProps}
      sx={{ width: "16px", height: "16px" }}
      viewBox="0 0 16 16"
    >
      <circle cx="8" cy="8" r="8" fill={fillColor || "#BFD2FD"} />
    </MuiSvgIcon>
  );
};

export default BlueCircleIcon;
