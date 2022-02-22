import React from "react";

import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";
import MuiSvgIcon from "@mui/material/SvgIcon";


const icon = ({ color, fontSize, className, style,...props }: MuiSvgIconProps) => {
  return (
    <MuiSvgIcon
    {...props}
      style={style}
      color={color}
      fontSize={fontSize}
      className={className}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 11.2001C8.88366 11.2001 9.6 11.9165 9.6 12.8001C9.6 13.6838 8.88366 14.4001 8 14.4001C7.11635 14.4001 6.4 13.6838 6.4 12.8001C6.4 11.9165 7.11635 11.2001 8 11.2001ZM8 6.40011C8.88366 6.40011 9.6 7.11646 9.6 8.00011C9.6 8.88377 8.88366 9.60011 8 9.60011C7.11635 9.60011 6.4 8.88377 6.4 8.00011C6.4 7.11646 7.11635 6.40011 8 6.40011ZM8 1.6001C8.88366 1.6001 9.6 2.31644 9.6 3.2001C9.6 4.08375 8.88366 4.8001 8 4.8001C7.11635 4.8001 6.4 4.08375 6.4 3.2001C6.4 2.31644 7.11635 1.6001 8 1.6001Z"
        fill="currentColor"
      />
    </MuiSvgIcon>
  );
};

export default icon;
