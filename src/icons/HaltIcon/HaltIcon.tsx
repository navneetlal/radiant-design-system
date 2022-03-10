import React from "react";

import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";
import MuiSvgIcon from "@mui/material/SvgIcon";


const HaltIcon = ({ ...props }: MuiSvgIconProps) => {
  return (
    <MuiSvgIcon
      {...props}
      viewBox="0 0 25 24"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M12.5 11.5862V23.5862"
          stroke="#556080"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M12.5 11.5862C15.6995 11.5862 18.2931 8.99255 18.2931 5.7931C18.2931 2.59366 15.6995 0 12.5 0C9.30057 0 6.70691 2.59366 6.70691 5.7931C6.70691 8.99255 9.30057 11.5862 12.5 11.5862Z"
          fill="#D97F30"
        />
        <path
          d="M10.4311 5.37924C11.1167 5.37924 11.6725 4.82346 11.6725 4.13786C11.6725 3.45227 11.1167 2.89648 10.4311 2.89648C9.74548 2.89648 9.1897 3.45227 9.1897 4.13786C9.1897 4.82346 9.74548 5.37924 10.4311 5.37924Z"
          fill="#FFECDB"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </MuiSvgIcon>
  );
};

export default HaltIcon;
