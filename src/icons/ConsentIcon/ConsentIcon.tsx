import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";


export interface IConsentIconProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}

export const ConsentIcon = ({
  fillColor,
  ...otherProps
}: IConsentIconProps) => {
  return (
    <MuiSvgIcon
      {...otherProps}
      style={{ width: "16px", height: "16px", cursor: "pointer" }}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 2L11 2C11.5128 2 11.9355 2.38604 11.9933 2.88338L12 3L12 13C12 13.5128 11.614 13.9355 11.1166 13.9933L11 14L5 14C4.48716 14 4.06449 13.614 4.00673 13.1166L4 13L4 3C4 2.48716 4.38604 2.06449 4.88338 2.00673L5 2L11 2L5 2ZM8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10Z"
        fill={fillColor || "currentColor"}
      />
    </MuiSvgIcon>
  );
};
export default ConsentIcon;
