import React from "react";

import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";
import MuiSvgIcon from "@mui/material/SvgIcon";



export interface IMessageIconProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}
const MessageIcon = ({ fillColor, ...otherProps }: IMessageIconProps) => {
  return (
    <MuiSvgIcon viewBox="0 0 16 16" {...otherProps}>
      <path
        d="M11 5.00003L5 5.00003C4.84087 5.00003 4.68826 5.06324 4.57574 5.17577C4.46321 5.28829 4.4 5.4409 4.4 5.60003C4.4 5.75916 4.46321 5.91178 4.57574 6.0243C4.68826 6.13682 4.84087 6.20004 5 6.20004L11 6.20004C11.1591 6.20004 11.3117 6.13682 11.4243 6.0243C11.5368 5.91178 11.6 5.75916 11.6 5.60003C11.6 5.4409 11.5368 5.28829 11.4243 5.17577C11.3117 5.06324 11.1591 5.00003 11 5.00003ZM11 7.40005L5 7.40005C4.84087 7.40005 4.68826 7.46326 4.57574 7.57579C4.46321 7.68831 4.4 7.84092 4.4 8.00006C4.4 8.15919 4.46321 8.3118 4.57574 8.42432C4.68826 8.53685 4.84087 8.60006 5 8.60006L11 8.60006C11.1591 8.60006 11.3117 8.53685 11.4243 8.42432C11.5368 8.3118 11.6 8.15919 11.6 8.00006C11.6 7.84092 11.5368 7.68831 11.4243 7.57579C11.3117 7.46326 11.1591 7.40005 11 7.40005ZM12.2 2L3.8 2C3.32261 2 2.86477 2.18964 2.52721 2.52721C2.18964 2.86478 2 3.32262 2 3.80002L2 9.80007C2 10.2775 2.18964 10.7353 2.52721 11.0729C2.86477 11.4104 3.32261 11.6001 3.8 11.6001L10.754 11.6001L12.974 13.8261C13.0301 13.8817 13.0966 13.9257 13.1697 13.9556C13.2428 13.9854 13.321 14.0006 13.4 14.0001C13.4787 14.0021 13.5568 13.9857 13.628 13.9521C13.7376 13.9071 13.8314 13.8307 13.8976 13.7324C13.9638 13.6342 13.9994 13.5186 14 13.4001L14 3.80002C14 3.32262 13.8104 2.86478 13.4728 2.52721C13.1352 2.18964 12.6774 2 12.2 2ZM12.8 11.9541L11.426 10.5741C11.3699 10.5185 11.3034 10.4745 11.2303 10.4446C11.1572 10.4148 11.079 10.3996 11 10.4001L3.8 10.4001C3.64087 10.4001 3.48826 10.3369 3.37574 10.2243C3.26321 10.1118 3.2 9.9592 3.2 9.80007L3.2 3.80002C3.2 3.64089 3.26321 3.48827 3.37574 3.37575C3.48826 3.26323 3.64087 3.20001 3.8 3.20001L12.2 3.20001C12.3591 3.20001 12.5117 3.26323 12.6243 3.37575C12.7368 3.48827 12.8 3.64089 12.8 3.80002L12.8 11.9541Z"
        fill={fillColor || 'currentColor'}
      />
    </MuiSvgIcon>
  );
};

export default MessageIcon;
