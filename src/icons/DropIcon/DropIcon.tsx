import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";

const DropIcon = ({ ...props }: MuiSvgIconProps) => {
  return (
    <MuiSvgIcon sx={{ width: "40px", height: "40px" }} viewBox="0 0 40 40">
      <path
        d="M18.366 18.3823V37.5492L19.9999 40.0002V18.3823H18.366Z"
        fill="#A1A1A1"
      />
      <path d="M20 18.3823V40.0002L21.634 37.5492V18.3823H20Z" fill="#E3E3E3" />
      <path
        d="M29.3953 9.39532C29.3953 14.5873 25.1879 18.7906 20 18.7906C15.6578 18.7906 12.0017 15.8454 10.9274 11.8422C10.715 11.062 10.6047 10.245 10.6047 9.39532C10.6047 4.20745 14.8121 0 20 0C22.9084 0 25.5064 1.31943 27.2262 3.39454C28.5824 5.02036 29.3953 7.11597 29.3953 9.39532Z"
        fill="#008F66"
      />
      <path
        d="M27.5487 5.83737C27.5487 11.0252 23.3413 15.2327 18.1534 15.2327C15.245 15.2327 12.6511 13.9133 10.9272 11.8422C10.7148 11.062 10.6045 10.245 10.6045 9.39532C10.6045 4.20745 14.8119 0 19.9998 0C22.9082 0 25.5063 1.31943 27.226 3.39454C27.4385 4.17482 27.5487 4.99183 27.5487 5.83737Z"
        fill="#00C28B"
      />
      <path
        d="M22.4712 4.39538C22.5477 3.70709 22.0247 3.0897 21.3454 2.95526C19.6943 2.62854 15.6682 2.33906 13.8976 6.70155C13.8976 6.70155 13.4659 7.82409 14.7071 7.68375C15.3053 7.6161 15.8399 7.2875 16.2164 6.8178C16.8278 6.05494 18.2788 4.81298 20.9761 5.3998C21.6094 5.53757 22.2856 5.18788 22.4421 4.55887C22.455 4.50659 22.4649 4.4521 22.4712 4.39538Z"
        fill="#F2F2F2"
      />
    </MuiSvgIcon>
  );
};

export default DropIcon;