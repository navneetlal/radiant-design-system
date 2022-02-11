import React from 'react';
import {
    SvgIconProps as MuiSvgIconProps,
    SvgIcon as MuiSvgIcon,
  } from "@mui/material";

const LongHalt = ({...props} : MuiSvgIconProps) => {
  return (
    <MuiSvgIcon sx = {{width : '24px' , height : '25px' , backgroundColor : '#ffffff'}} viewBox="0 0 24 24" {...props}>
      <g clipPath="url(#clip0)">
        <path
          d="M12 11.5862V23.5862"
          stroke="#556080"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M12 11.5862C15.1995 11.5862 17.7931 8.99255 17.7931 5.7931C17.7931 2.59366 15.1995 0 12 0C8.80057 0 6.20691 2.59366 6.20691 5.7931C6.20691 8.99255 8.80057 11.5862 12 11.5862Z"
          fill="#CC3333"
        />
        <path
          d="M9.93108 5.3793C10.6167 5.3793 11.1725 4.82352 11.1725 4.13793C11.1725 3.45233 10.6167 2.89655 9.93108 2.89655C9.24548 2.89655 8.6897 3.45233 8.6897 4.13793C8.6897 4.82352 9.24548 5.3793 9.93108 5.3793Z"
          fill="#FFECDB"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </MuiSvgIcon>
  );
};

export default LongHalt;
