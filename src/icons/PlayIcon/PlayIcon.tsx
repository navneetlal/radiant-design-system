import React from "react";

import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";
import MuiSvgIcon from "@mui/material/SvgIcon";




export interface IPlayIconProps extends MuiSvgIconProps{
  fillColor?: string;
  [key: string]: any;
}
const PlayIcon = ({ fillColor, ...otherProps }: IPlayIconProps) => {
  return (
    <MuiSvgIcon {...otherProps} viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 3.83443C4 3.19139 4.66977 2.79074 5.2031 3.11475L11.6031 7.28032C12.1323 7.60182 12.1323 8.39818 11.6031 8.71968L5.2031 12.8852C4.66977 13.2093 4 12.8086 4 12.1656L4 3.83443Z"
        fill={fillColor || 'currentColor'}
      />
    </MuiSvgIcon>
  );
};

export default PlayIcon;
