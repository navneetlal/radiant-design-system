import React from 'react';
import MuiSvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps as MuiSvgIconProps } from '@mui/material/SvgIcon'

const BreadcrumbArrow = ({ color, ...otherProps }: MuiSvgIconProps) => {
  return (
    <MuiSvgIcon {...otherProps} viewBox="0 0 9 9">
      <path
        d="M4.466 8.21L3.864 7.566L6.678 4.948H0.546V3.996H6.678L3.864 1.378L4.466 0.733999L8.274 4.444V4.5L4.466 8.21Z"
        fill={color ? color : 'currentColor'}
      />
    </MuiSvgIcon>
  );
};

export default BreadcrumbArrow;
