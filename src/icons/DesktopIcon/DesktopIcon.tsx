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
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 18H5C3.34315 18 2 16.6569 2 15V5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V15C22 16.6569 20.6569 18 19 18H13V20H15C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20H11V18ZM19 4H5C4.44772 4 4 4.44772 4 5V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V5C20 4.44772 19.5523 4 19 4Z"
        fill="currentColor"
      />
    </MuiSvgIcon>
  );
};

export default icon;
