import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";

export interface ISaveIconProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}
const SaveIcon = ({ fillColor, ...otherProps }: ISaveIconProps) => {
  return (
    <MuiSvgIcon
      {...otherProps}
      sx={{ width: "16px", height: "16px" }}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.33268 1.3335C9.50949 1.3335 9.67906 1.40373 9.80409 1.52876L13.1374 4.86209C13.2624 4.98712 13.3327 5.15669 13.3327 5.3335L13.3327 12.6668C13.3327 13.7714 12.4373 14.6668 11.3327 14.6668L4.66602 14.6668C3.56145 14.6668 2.66602 13.7714 2.66602 12.6668L2.66602 3.3335C2.66602 2.22893 3.56145 1.3335 4.66602 1.3335L9.33268 1.3335ZM7.99868 2.66683L4.66602 2.66683C4.29783 2.66683 3.99935 2.96531 3.99935 3.3335L3.99935 12.6668C3.99935 13.035 4.29783 13.3335 4.66602 13.3335L11.3327 13.3335C11.7009 13.3335 11.9993 13.035 11.9993 12.6668L11.9993 6.66683L8.66602 6.66683C8.32413 6.66683 8.04234 6.40947 8.00383 6.07791L7.99935 6.00016L7.99868 2.66683ZM11.7233 5.3335L9.33202 2.94283L9.33268 5.3335H11.7233Z"
        fill={fillColor || "currentColor"}
      />
    </MuiSvgIcon>
  );
};

export default SaveIcon;
