import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";

export interface ILocationIconProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}

const LocationIcon = ({ fillColor, ...otherProps }: ILocationIconProps) => {
  return (
    <MuiSvgIcon
      style={{ width: "16px", height: "16px" }}
      viewBox="0 0 16 16"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1.3335C11.3137 1.3335 14 3.99065 14 7.26841C14 9.4374 12.1851 11.7307 8.63217 14.2289L8 14.6668L7.61853 14.4036C3.90028 11.8374 2 9.48784 2 7.26841C2 3.99065 4.68629 1.3335 8 1.3335ZM8 2.65237C5.42267 2.65237 3.33333 4.71904 3.33333 7.26841C3.33333 8.87007 4.86448 10.8245 8 13.0547C11.1355 10.8245 12.6667 8.87007 12.6667 7.26841C12.6667 4.71904 10.5773 2.65237 8 2.65237ZM8 4.00016C9.47276 4.00016 10.6667 5.19407 10.6667 6.66683C10.6667 8.13959 9.47276 9.3335 8 9.3335C6.52724 9.3335 5.33333 8.13959 5.33333 6.66683C5.33333 5.19407 6.52724 4.00016 8 4.00016ZM8 5.3335C7.26362 5.3335 6.66667 5.93045 6.66667 6.66683C6.66667 7.40321 7.26362 8.00016 8 8.00016C8.73638 8.00016 9.33333 7.40321 9.33333 6.66683C9.33333 5.93045 8.73638 5.3335 8 5.3335Z"
        fill={fillColor || "currentColor"}
      />
    </MuiSvgIcon>
  );
};

export default LocationIcon;
