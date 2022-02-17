import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";

export interface IMoreIconProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}

const MoreIcon = ({ fillColor, ...otherProps }: IMoreIconProps) => {
  return (
    <MuiSvgIcon
      viewBox="0 0 16 16"
      style={{ width: "16px", height: "16px" }}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.9999 11.2C8.88356 11.2 9.5999 11.9163 9.5999 12.8C9.5999 13.6836 8.88356 14.4 7.9999 14.4C7.11625 14.4 6.3999 13.6836 6.3999 12.8C6.3999 11.9163 7.11625 11.2 7.9999 11.2ZM7.9999 6.39998C8.88356 6.39998 9.5999 7.11632 9.5999 7.99998C9.5999 8.88363 8.88356 9.59998 7.9999 9.59998C7.11625 9.59998 6.3999 8.88363 6.3999 7.99998C6.3999 7.11632 7.11625 6.39998 7.9999 6.39998ZM7.9999 1.59998C8.88356 1.59998 9.5999 2.31632 9.5999 3.19998C9.5999 4.08363 8.88356 4.79998 7.9999 4.79998C7.11625 4.79998 6.3999 4.08363 6.3999 3.19998C6.3999 2.31632 7.11625 1.59998 7.9999 1.59998Z"
        fill={fillColor || "currentColor"}
      />
    </MuiSvgIcon>
  );
};

export default MoreIcon;
