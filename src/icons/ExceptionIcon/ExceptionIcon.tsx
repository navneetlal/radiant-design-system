import React from "react";

import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";
import MuiSvgIcon from "@mui/material/SvgIcon";

const Exception = ({ ...otherProps }: MuiSvgIconProps) => {
  return (
    <MuiSvgIcon
      viewBox="0 0 12 12"
      {...otherProps}
    >
      <circle cx="6" cy="6" r="6" fill="#F9D7D7" />
      <circle cx="6" cy="6" r="4" fill="#CC3333" />
    </MuiSvgIcon>
  );
};

export default Exception;
