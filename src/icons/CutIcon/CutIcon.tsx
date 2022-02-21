import React from "react";
import { SvgIcon as MuiSvgIcon } from "@mui/material";
import type {SvgIconProps} from '@mui/material/SvgIcon';


export interface ICutIconProps extends SvgIconProps{
  fillColor?: string;
  [key: string]: any;
}
const CutIcon = ({ fillColor, ...otherProps }: ICutIconProps) => {
  return (
    <MuiSvgIcon {...otherProps} viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.94281 8.00033L12.4715 4.47166C12.7321 4.211 12.7321 3.78966 12.4715 3.529C12.2108 3.26833 11.7895 3.26833 11.5288 3.529L8.00015 7.05766L4.47148 3.529C4.21081 3.26833 3.78948 3.26833 3.52881 3.529C3.26815 3.78966 3.26815 4.211 3.52881 4.47166L7.05748 8.00033L3.52881 11.529C3.26815 11.7897 3.26815 12.211 3.52881 12.4717C3.65881 12.6017 3.82948 12.667 4.00015 12.667C4.17081 12.667 4.34148 12.6017 4.47148 12.4717L8.00015 8.943L11.5288 12.4717C11.6588 12.6017 11.8295 12.667 12.0001 12.667C12.1708 12.667 12.3415 12.6017 12.4715 12.4717C12.7321 12.211 12.7321 11.7897 12.4715 11.529L8.94281 8.00033Z"
        fill={fillColor || 'currentColor'}
      />
    </MuiSvgIcon>
  );
};

export default CutIcon;
