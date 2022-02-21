import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";


export interface ISubtractIconProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}
const SubtractionIcon = ({ fillColor, ...otherProps }: ISubtractIconProps) => {
  return (
    <MuiSvgIcon {...otherProps} style = {{width : '16px', height : '16px'}} viewBox="0 0 16 16">
      <path
        d="M12.6665 7.3335L8.6665 7.3335L3.33317 7.3335C2.96498 7.3335 2.6665 7.63197 2.6665 8.00016C2.6665 8.36835 2.96498 8.66683 3.33317 8.66683L8.6665 8.66683H12.6665C13.0347 8.66683 13.3332 8.36835 13.3332 8.00016C13.3332 7.63197 13.0347 7.3335 12.6665 7.3335Z"
        fill={fillColor || '#2C63E5'}
      />
    </MuiSvgIcon>
  );
};

export default SubtractionIcon;
