import React from "react";

import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";
import MuiSvgIcon from "@mui/material/SvgIcon";


export interface ITripsArrowIconProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}
const TripsArrowIcon = ({ fillColor, ...otherProps }: ITripsArrowIconProps) => {
  return (
    <MuiSvgIcon
      viewBox="0 0 12 12"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6ZM2 6C2 6.51284 2.38604 6.93551 2.88338 6.99327L3 7H6.584L6.29289 7.29289L6.2097 7.3871C5.90468 7.77939 5.93241 8.34662 6.29289 8.70711C6.65338 9.06759 7.22061 9.09532 7.6129 8.7903L7.70711 8.70711L9.70711 6.70711L9.78031 6.62545L9.854 6.52071L9.90633 6.42322L9.95026 6.31214L9.97976 6.20073L9.99721 6.07524L10 6L9.99309 5.8819L9.96416 5.73401L9.92877 5.62866L9.87533 5.51594L9.80367 5.40469L9.7485 5.33685L9.70711 5.29289L7.70711 3.29289L7.6129 3.2097C7.2533 2.9301 6.7467 2.9301 6.3871 3.2097L6.29289 3.29289L6.2097 3.3871L6.14038 3.4886C5.93449 3.8341 5.95508 4.27703 6.20215 4.60306L6.29289 4.70711L6.586 5H3C2.44772 5 2 5.44772 2 6Z"
        fill={fillColor || "#C7C7C7"}
      />
    </MuiSvgIcon>
  );
};

export default TripsArrowIcon;
