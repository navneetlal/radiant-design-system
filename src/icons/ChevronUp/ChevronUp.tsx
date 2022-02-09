import React from "react";
import {
    SvgIconProps as MuiSvgIconProps,
    SvgIcon as MuiSvgIcon,
  } from "@mui/material";
const icon = ({ color, fontSize, className, style }: MuiSvgIconProps) => {
  return (
    <MuiSvgIcon
      style={style}
      color={color}
      fontSize={fontSize}
      className={className}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2929 10.7071C12.6834 11.0976 13.3166 11.0976 13.7071 10.7071C14.0976 10.3166 14.0976 9.68342 13.7071 9.29289L8.70711 4.29289C8.31658 3.90237 7.68342 3.90237 7.29289 4.29289L2.29289 9.29289C1.90237 9.68342 1.90237 10.3166 2.29289 10.7071C2.68342 11.0976 3.31658 11.0976 3.70711 10.7071L8 6.41421L12.2929 10.7071Z"
        fill="currentColor"
      />
    </MuiSvgIcon>
  );
};

export default icon;
