import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";


export interface ICallIconProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}

const CallIcon = ({ fillColor, ...otherProps }: ICallIconProps) => {
  return (
    <MuiSvgIcon
      viewBox="0 0 16 16"
      sx={{ width: "16px", height: "16px" }}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.36984 6.55474C6.55531 6.4311 6.66671 6.22294 6.66671 6.00004V3.33337C6.66671 2.2288 5.77128 1.33337 4.66671 1.33337L2.00004 1.33337C1.63185 1.33337 1.33337 1.63185 1.33337 2.00004C1.33337 8.62746 7.37262 14.6667 14 14.6667C14.3682 14.6667 14.6667 14.3682 14.6667 14L14.6667 11.3334C14.6667 10.2288 13.7713 9.33337 12.6667 9.33337L10 9.33337C9.77714 9.33337 9.56898 9.44478 9.44534 9.63024L8.17511 11.5356C6.79164 10.641 5.57954 9.45949 4.6472 8.09935L4.4645 7.82497L6.36984 6.55474ZM10.3568 10.6667L12.6667 10.6667C13.0349 10.6667 13.3334 10.9652 13.3334 11.3334L13.3334 13.3103C12.0419 13.2209 10.7815 12.8755 9.60587 12.3278L9.33611 12.1978L10.3568 10.6667ZM2.68982 2.66671L4.66671 2.66671C5.0349 2.66671 5.33337 2.96518 5.33337 3.33337V5.64325L3.80229 6.66397C3.17926 5.41234 2.78606 4.05755 2.68982 2.66671Z"
        fill={fillColor || "currentColor"}
      />
    </MuiSvgIcon>
  );
};

export default CallIcon;
