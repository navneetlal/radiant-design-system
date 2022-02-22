import React from "react";

import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";
import MuiSvgIcon from "@mui/material/SvgIcon";

const Active = ({
  color,
  fontSize,
  sx,
  className,
  style,
  ...otherProps
}: MuiSvgIconProps) => {
  return (
    <MuiSvgIcon
      sx={sx}
      style={style}
      color={color}
      fontSize={fontSize}
      className={className}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <circle cx="12" cy="12" r="4" fill="#D7E3FE" />
      <circle cx="12" cy="12" r="2" fill="#2C63E5" />
    </MuiSvgIcon>
  );
};

export default Active;
