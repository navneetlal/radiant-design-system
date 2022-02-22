import React from "react";

import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";
import MuiSvgIcon from "@mui/material/SvgIcon";



const GreenFlagIcon = ({ className, style,...props}: MuiSvgIconProps) => {
  return (
    <MuiSvgIcon className={`${className}`} viewBox="0 0 24 24" {...props}>
      <path d="M7.875 1.875H15.375V9.375H7.875V1.875Z" fill="#00C28B" />
      <path
        d="M19.125 7.5L21.375 11.25H12.375L15.375 9.375V3.75H21.375L19.125 7.5Z"
        fill="#008F66"
      />
      <path d="M15.375 9.375L12.375 11.25V9.375H15.375Z" fill="#BF360C" />
      <path
        d="M10.875 21.375H9.75L9 19.875H7.875V1.875C7.875 1.67609 7.79598 1.48532 7.65533 1.34467C7.51468 1.20402 7.32391 1.125 7.125 1.125C6.92609 1.125 6.73532 1.20402 6.59467 1.34467C6.45402 1.48532 6.375 1.67609 6.375 1.875V19.875H5.25L4.5 21.375H3.375L2.625 22.875H11.625L10.875 21.375Z"
        fill="#36474F"
      />
    </MuiSvgIcon>
  );
};

export default GreenFlagIcon;
