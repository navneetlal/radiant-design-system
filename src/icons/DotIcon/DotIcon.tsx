import React from "react";
import MuiSvgIcon from "@mui/material/SvgIcon";
import { SvgIconProps as MuiSvgIconProps } from "@mui/material";

export interface IDotIconProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}

const DotIcon = ({ fillColor, ...otherProps }: IDotIconProps) => {
  return (
    <MuiSvgIcon viewBox="0 0 8 8 " {...otherProps}>
      <circle cx="4" cy="4" r="1.5" fill={fillColor || "#2C63E5"} />
    </MuiSvgIcon>
  );
};

export default DotIcon;
