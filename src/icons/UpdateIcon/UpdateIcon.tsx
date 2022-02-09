import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";

export interface IUpdateIconProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}

const UpdateIcon = ({ fillColor, ...otherProps }: IUpdateIconProps) => {
  return (
    <MuiSvgIcon
      sx={{ width: "16px", height: "16px" }}
      {...otherProps}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.14645 4.27383L7.14645 3.16272C7.34171 2.94576 7.65829 2.94576 7.85355 3.16272C8.0338 3.36299 8.04766 3.67812 7.89515 3.89606L7.85355 3.94839L7.69458 4.1239C7.7958 4.11539 7.89766 4.11111 8 4.11111C10.2091 4.11111 12 6.10096 12 8.55556C12 11.0102 10.2091 13 8 13C5.79086 13 4 11.0102 4 8.55556C4 8.24873 4.22386 8 4.5 8C4.77614 8 5 8.24873 5 8.55556C5 10.3965 6.34315 11.8889 8 11.8889C9.65685 11.8889 11 10.3965 11 8.55556C11 6.71461 9.65685 5.22222 8 5.22222C7.90647 5.22222 7.81356 5.22696 7.72147 5.23636L7.85355 5.38494C8.04882 5.6019 8.04882 5.95366 7.85355 6.17061C7.67331 6.37088 7.3897 6.38629 7.19355 6.21683L7.14645 6.17061L6.14645 5.0595C5.9662 4.85924 5.95234 4.54411 6.10485 4.32617L6.14645 4.27383L7.14645 3.16272L6.14645 4.27383Z"
        fill={fillColor || "currentColor"}
      />
    </MuiSvgIcon>
  );
};

export default UpdateIcon;
