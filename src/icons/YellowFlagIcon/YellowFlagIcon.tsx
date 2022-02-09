import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";


const YellowFlagIcon = ({...props} : MuiSvgIconProps) => {
  return (
    <MuiSvgIcon sx = {{width : '24px' , height : '24px'}} viewBox="0 0 24 24" {...props}>
      <path d="M7.875 1.875H15.375V9.375H7.875V1.875Z" fill="#FFD54F" />
      <path
        d="M19.125 7.5L21.375 11.25H12.375L15.375 9.375V3.75H21.375L19.125 7.5Z"
        fill="#FFA001"
      />
      <path d="M15.375 9.375L12.375 11.25V9.375H15.375Z" fill="#BF360C" />
      <path
        d="M10.875 21.375H9.75L9 19.875H7.875V1.875C7.875 1.67609 7.79598 1.48532 7.65533 1.34467C7.51468 1.20402 7.32391 1.125 7.125 1.125C6.92609 1.125 6.73532 1.20402 6.59467 1.34467C6.45402 1.48532 6.375 1.67609 6.375 1.875V19.875H5.25L4.5 21.375H3.375L2.625 22.875H11.625L10.875 21.375Z"
        fill="#36474F"
      />
    </MuiSvgIcon>
  );
};

export default YellowFlagIcon;
