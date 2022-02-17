import React from "react";

import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";

export interface IEmailIconProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}

const EmailIcon = ({ fillColor, ...otherProps }: IEmailIconProps) => {
  return (
    <MuiSvgIcon
      style={{ width: "16px", height: "16px" }}
      viewBox="0 0 16 16"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6666 2.66663C13.7712 2.66663 14.6666 3.56206 14.6666 4.66663L14.6666 11.3333C14.6666 12.4379 13.7712 13.3333 12.6666 13.3333L3.33325 13.3333C2.22868 13.3333 1.33325 12.4379 1.33325 11.3333L1.33325 4.66663C1.33325 3.56206 2.22868 2.66663 3.33325 2.66663L12.6666 2.66663ZM13.3333 4.88529L8.43892 9.16834C8.20852 9.36995 7.87396 9.38675 7.62619 9.21874L7.56092 9.16834L2.66659 4.88596L2.66659 11.3333C2.66659 11.7015 2.96506 12 3.33325 12L12.6666 12C13.0348 12 13.3333 11.7015 13.3333 11.3333L13.3333 4.88529ZM12.3199 3.99996L3.67859 3.99996L7.99992 7.78078L12.3199 3.99996Z"
        fill={fillColor || "currentColor"}
      />
    </MuiSvgIcon>
  );
};

export default EmailIcon;
