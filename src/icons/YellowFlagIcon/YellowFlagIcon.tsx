import React from "react";

import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";
import MuiSvgIcon from "@mui/material/SvgIcon";


const YellowFlagIcon = ({ ...props }: MuiSvgIconProps) => {
  return (
    <MuiSvgIcon
      viewBox="0 0 40 40"
      {...props}
    >
      <path d="M13.125 3.125H25.625V15.625H13.125V3.125Z" fill="#FFD54F" />
      <path
        d="M31.875 12.5L35.625 18.75H20.625L25.625 15.625V6.25H35.625L31.875 12.5Z"
        fill="#FFA001"
      />
      <path d="M25.625 15.625L20.625 18.75V15.625H25.625Z" fill="#BF360C" />
      <path
        d="M18.125 35.625H16.25L15 33.125H13.125V3.125C13.125 2.79348 12.9933 2.47554 12.7589 2.24112C12.5245 2.0067 12.2065 1.875 11.875 1.875C11.5435 1.875 11.2255 2.0067 10.9911 2.24112C10.7567 2.47554 10.625 2.79348 10.625 3.125V33.125H8.75L7.5 35.625H5.625L4.375 38.125H19.375L18.125 35.625Z"
        fill="#36474F"
      />
    </MuiSvgIcon>
  );
};

export default YellowFlagIcon;
