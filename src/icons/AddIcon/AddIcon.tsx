import React from 'react';
import MuiSvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon'


export interface IAddIconProps extends SvgIconProps {
  fillColor ?: string;
}

const AddIcon = ({ fillColor, ...otherProps }: IAddIconProps) => {
  return (
    <MuiSvgIcon {...otherProps} style = {{width : '11px', height : '11px'}} viewBox="0 0 12 12">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0C5.44772 0 5 0.447715 5 1L5 5L1 5C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7L5 7L5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11L7 7L11 7C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5L7 5L7 1C7 0.447715 6.55228 0 6 0Z"
        fill={fillColor || 'currentColor'}
      />
    </MuiSvgIcon>
  );
};

export default AddIcon;
