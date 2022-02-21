import React from "react";

import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";
import MuiSvgIcon from "@mui/material/SvgIcon";


const Inactive = ({
  color,
  fontSize,
  className,
  style,
  ...otherProps
}: MuiSvgIconProps) => {
  return (
    <MuiSvgIcon
      color={color}
      fontSize={fontSize}
      className={className}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <circle cx="12" cy="12" r="4" fill="#C7C7C7" />
      <circle cx="12" cy="12" r="2" fill="#000" />
    </MuiSvgIcon>
  );
};

export default Inactive;
