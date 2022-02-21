import React from "react";

import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";
import MuiSvgIcon from "@mui/material/SvgIcon";


export interface IHelpIconProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}

const HelpIcon = ({ fillColor, ...otherProps }: IHelpIconProps) => (
  <MuiSvgIcon {...otherProps}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10 14C10.5523 14 11 14.4477 11 15C11 15.5523 10.5523 16 10 16C9.44771 16 9 15.5523 9 15C9 14.4477 9.44771 14 10 14ZM10 4C12.2091 4 14 5.79086 14 8C14 9.79481 12.8179 11.3135 11.1898 11.8201L11 11.874V12C11 12.5523 10.5523 13 10 13C9.48716 13 9.06449 12.614 9.00673 12.1166L9 12V11C9 10.4872 9.38604 10.0645 9.88338 10.0067L10.1493 9.99451C11.1841 9.91817 12 9.05436 12 8C12 6.89543 11.1046 6 10 6C8.89543 6 8 6.89543 8 8C8 8.55229 7.55228 9 7 9C6.44772 9 6 8.55229 6 8C6 5.79086 7.79086 4 10 4Z"
      fill={fillColor || "#91B0FA"}
    />
  </MuiSvgIcon>
);

export default HelpIcon;
