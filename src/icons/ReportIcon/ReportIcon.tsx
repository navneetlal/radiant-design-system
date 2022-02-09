import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";

export interface IReportProps extends MuiSvgIconProps{
  fillColor?: string;
  [key: string]: any;
}

const Report = ({ fillColor, ...otherProps }: IReportProps) => (
  <MuiSvgIcon {...otherProps}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 2C14.2652 2 14.5196 2.10536 14.7071 2.29289L19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8L20 19C20 20.6569 18.6569 22 17 22L7 22C5.34315 22 4 20.6569 4 19L4 5C4 3.34315 5.34315 2 7 2L14 2ZM11.999 4L7 4C6.44772 4 6 4.44772 6 5L6 19C6 19.5523 6.44772 20 7 20L17 20C17.5523 20 18 19.5523 18 19L18 10L13 10C12.4872 10 12.0645 9.61396 12.0067 9.11662L12 9L11.999 4ZM17.586 8L13.999 4.414L14 8L17.586 8Z"
      fill={fillColor || '#91B0FA'}
    />
  </MuiSvgIcon>
);

export default Report;
