import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";

export interface IEditIconProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}

const EditIcon = ({ fillColor, ...otherProps }: IEditIconProps) => {
  return (
    <MuiSvgIcon
      sx={{ width: "16px", height: "16px" }}
      viewBox="0 0 16 16"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.86128 10.1951L10.1946 2.86177C10.4349 2.62144 10.8131 2.60296 11.0746 2.80631L11.1374 2.86177L13.1374 4.86177C13.3777 5.10209 13.3962 5.48024 13.1929 5.74177L13.1374 5.80457L5.80409 13.1379C5.6999 13.2421 5.56478 13.3082 5.42031 13.3274L5.33268 13.3332H3.33268C2.99079 13.3332 2.70901 13.0758 2.6705 12.7443L2.66602 12.6665L2.66602 10.6665C2.66602 10.5192 2.71479 10.3768 2.8034 10.2612L2.86128 10.1951L10.1946 2.86177L2.86128 10.1951ZM10.666 4.27596L3.99935 10.9426L3.99935 11.9998H5.05654L11.7232 5.33315L10.666 4.27596Z"
        fill={fillColor || "currentColor"}
      />
    </MuiSvgIcon>
  );
};

export default EditIcon;
