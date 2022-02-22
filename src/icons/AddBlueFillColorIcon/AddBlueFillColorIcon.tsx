import React from "react";

import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";
import MuiSvgIcon from "@mui/material/SvgIcon";


export interface IAddBlueFillIconProps extends MuiSvgIconProps {
  fillColor?: string;
}

const AddBlueFillIcon = ({
  fillColor,
  ...otherProps
}: IAddBlueFillIconProps) => {
  return (
    <MuiSvgIcon
      {...otherProps}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2C7.44772 2 7 2.44772 7 3L7 7L3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9H7L7 13C7 13.5523 7.44772 14 8 14C8.55228 14 9 13.5523 9 13L9 9L13 9C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7L9 7V3C9 2.44772 8.55228 2 8 2Z"
        fill={fillColor || "#2C63E5"}
      />
    </MuiSvgIcon>
  );
};

export default AddBlueFillIcon;
