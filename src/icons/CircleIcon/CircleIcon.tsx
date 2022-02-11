import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";

export interface ICircleIconProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}
const CircleIcon = ({ fillColor, ...otherProps }: ICircleIconProps) => {
  return (
    <MuiSvgIcon
      {...otherProps}
      sx={{ width: "12px", height: "12px", cursor: "pointer" }}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8Z"
        fill={fillColor || "#2C63E5"}
      />
    </MuiSvgIcon>
  );
};

export default CircleIcon;
