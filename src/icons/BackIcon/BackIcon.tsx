import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";

export interface IBackIconProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}
const BackIcon = ({ fillColor, ...otherProps }: IBackIconProps) => {
  return (
    <MuiSvgIcon
      {...otherProps}
      viewBox="0 0 12 8"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.7903 0.387101L4.70711 0.292893C4.34662 -0.0675907 3.77939 -0.0953203 3.3871 0.209705L3.29289 0.292893L0.292893 3.29289L0.251496 3.33685L0.196335 3.40469L0.124671 3.51594L0.0712255 3.62866L0.0358451 3.73401L0.00690716 3.8819L0 4L0.00278786 4.07524L0.0202401 4.20073L0.0497381 4.31214L0.0936734 4.42322L0.145995 4.52071L0.219689 4.62545L0.292893 4.70711L3.29289 7.70711C3.68342 8.09763 4.31658 8.09763 4.70711 7.70711C5.06759 7.34662 5.09532 6.77939 4.7903 6.3871L4.70711 6.29289L3.415 5L11 5C11.5523 5 12 4.55228 12 4C12 3.44772 11.5523 3 11 3L3.415 3L4.70711 1.70711C5.06759 1.34662 5.09532 0.779392 4.7903 0.387101L4.70711 0.292893L4.7903 0.387101Z"
        fill={fillColor || "#2C63E5"}
      />
    </MuiSvgIcon>
  );
};

export default BackIcon;
