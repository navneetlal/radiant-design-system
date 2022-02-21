import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ChevronLeftIcon = ({...props} : MuiSvgIconProps) => {
  const theme = useTheme();
  return (
    <MuiSvgIcon
      style={{ width: "24px", height: "24px", fill: theme.palette.common.white }}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="#2C63E5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </MuiSvgIcon>
  );
};


export default ChevronLeftIcon;