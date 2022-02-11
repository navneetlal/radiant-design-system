import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";

export interface IDeleteIconProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}
const DeleteIcon = ({ fillColor, ...otherProps }: IDeleteIconProps) => {
  return (
    <MuiSvgIcon
      {...otherProps}
      sx={{ width: "16px", height: "16px" }}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3333 5.33337C11.7015 5.33337 12 5.63185 12 6.00004V12.6667C12 13.7713 11.1046 14.6667 10 14.6667H6C4.89543 14.6667 4 13.7713 4 12.6667V6.00004C4 5.63185 4.29848 5.33337 4.66667 5.33337H11.3333ZM10.6667 6.66671H5.33333V12.6667C5.33333 13.0349 5.63181 13.3334 6 13.3334H10C10.3682 13.3334 10.6667 13.0349 10.6667 12.6667V6.66671ZM6 2.00004C6 1.63185 6.29848 1.33337 6.66667 1.33337H9.33333C9.70152 1.33337 10 1.63185 10 2.00004V2.66671H12.6667C13.0349 2.66671 13.3333 2.96518 13.3333 3.33337C13.3333 3.70156 13.0349 4.00004 12.6667 4.00004H3.33333C2.96514 4.00004 2.66667 3.70156 2.66667 3.33337C2.66667 2.96518 2.96514 2.66671 3.33333 2.66671H6V2.00004Z"
        fill={fillColor || "currentColor"}
      />
    </MuiSvgIcon>
  );
};

export default DeleteIcon;
