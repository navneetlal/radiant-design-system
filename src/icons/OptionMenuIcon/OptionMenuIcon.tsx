import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";

const OpenMenuIcon = (props: MuiSvgIconProps) => {
  return (
    <MuiSvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 17C12.0523 17 12.5 17.4477 12.5 18C12.5 18.5523 12.0523 19 11.5 19H3C2.44772 19 2 18.5523 2 18C2 17.4477 2.44772 17 3 17H11.5ZM16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H16ZM21 5C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H21Z"
      />
    </MuiSvgIcon>
  );
};
export default OpenMenuIcon;
