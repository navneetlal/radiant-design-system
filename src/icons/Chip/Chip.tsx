import React from "react";
import { SvgIcon as MuiSvgIcon } from "@mui/material";

export interface IChipIconProps {
  color?: string;
  [key: string]: any;
}
const ChipIcon = ({ color="#ffffff", ...otherProps }: IChipIconProps) => {
  return (
    <MuiSvgIcon
      {...otherProps}
      sx={{
        width: "8px",
        height: "8px",
        cursor: "pointer",
        marginRight: "12px",

      }}
      viewBox="0 0 8 8"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.4141 4L7.7071 1.707C8.0981 1.316 8.0981 0.684 7.7071 0.293C7.3161 -0.0979999 6.6841 -0.0979999 6.2931 0.293L4.0001 2.586L1.7071 0.293C1.3161 -0.0979999 0.684099 -0.0979999 0.293099 0.293C-0.0979007 0.684 -0.0979007 1.316 0.293099 1.707L2.5861 4L0.293099 6.293C-0.0979007 6.684 -0.0979007 7.316 0.293099 7.707C0.488099 7.902 0.744099 8 1.0001 8C1.2561 8 1.5121 7.902 1.7071 7.707L4.0001 5.414L6.2931 7.707C6.4881 7.902 6.7441 8 7.0001 8C7.2561 8 7.5121 7.902 7.7071 7.707C8.0981 7.316 8.0981 6.684 7.7071 6.293L5.4141 4Z"
        fill={color || "currentColor"}
      />
    </MuiSvgIcon>
  );
};

export default ChipIcon;
