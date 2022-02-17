import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";

export interface ITickIconProps extends MuiSvgIconProps{
  fillColor?: string;
  [key: string]: any;
}
const TickIcon = ({ fillColor, ...otherProps }: ITickIconProps) => {
  return (
    <MuiSvgIcon
      style={{ width: "16px", height: "16px" }}
      {...otherProps}
      viewBox="0 0 16 16"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.74603 11.2059L3.02426 7.58751C2.78995 7.35971 2.41005 7.35971 2.17574 7.58751C1.94142 7.81532 1.94142 8.18466 2.17574 8.41247L6.37573 12.4958C6.63008 12.7431 7.04954 12.7187 7.27178 12.4437L13.8718 4.27706C14.0765 4.02374 14.0312 3.65703 13.7707 3.45799C13.5101 3.25894 13.1329 3.30295 12.9282 3.55627L6.74603 11.2059Z"
        fill={fillColor || "#000"}
      />
    </MuiSvgIcon>
  );
};

export default TickIcon;
