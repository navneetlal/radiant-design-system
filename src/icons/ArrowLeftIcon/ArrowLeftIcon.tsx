import React from 'react';
import MuiSvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps as MuiSvgIconProps } from '@mui/material/SvgIcon'

const icon = ({ color, fontSize, className, style,...props }: MuiSvgIconProps) => {
  return (
    <MuiSvgIcon
    {...props}
      style={style}
      color={color}
      fontSize={fontSize}
      className={className}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.27418 4.19355L7.22426 4.14645C7.00797 3.9662 6.66764 3.95234 6.43226 4.10485L6.37574 4.14645L2.17574 7.64645L2.1509 7.66843L2.1178 7.70235L2.0748 7.75797L2.04274 7.81433L2.02151 7.867L2.00414 7.94095L2 8L2.00167 8.03762L2.01214 8.10036L2.02984 8.15607L2.0562 8.21161L2.0876 8.26035L2.13181 8.31272L2.17574 8.35355L6.37574 11.8536C6.61005 12.0488 6.98995 12.0488 7.22426 11.8536C7.44055 11.6733 7.45719 11.3897 7.27418 11.1936L7.22426 11.1464L4.0496 8.5H13.4C13.7314 8.5 14 8.27614 14 8C14 7.72386 13.7314 7.5 13.4 7.5H4.0484L7.22426 4.85355C7.44055 4.67331 7.45719 4.3897 7.27418 4.19355L7.22426 4.14645L7.27418 4.19355Z"
        fill="currentColor"
      />
    </MuiSvgIcon>
  );
};

export default icon;
