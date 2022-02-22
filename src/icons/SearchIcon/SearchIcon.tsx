import React from "react";

import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";
import MuiSvgIcon from "@mui/material/SvgIcon";


export interface ISearchIconProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}
const SearchIcon = ({ fillColor, ...otherProps }: ISearchIconProps) => {
  return (
    <MuiSvgIcon
      {...otherProps}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2C9.76142 2 12 4.23858 12 7C12 8.01911 11.6951 8.967 11.1716 9.75745L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3466 14.0676 12.7794 14.0953 12.3871 13.7903L12.2929 13.7071L9.75745 11.1716C8.967 11.6951 8.01911 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2ZM7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4Z"
        fill={fillColor || "#2C63E5"}
      />
    </MuiSvgIcon>
  );
};

export default SearchIcon;
