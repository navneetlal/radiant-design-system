import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Inactive = ({
  color,
  fontSize,
  className,
  style,
  ...otherProps
}: MuiSvgIconProps) => {
  const theme = useTheme();
  return (
    <MuiSvgIcon
      style={{
        fontSize:
          fontSize === "small"
            ? theme.typography.pxToRem(16)
            : fontSize === "medium"
            ? theme.typography.pxToRem(20)
            : theme.typography.pxToRem(24),
      }}
      color={color}
      fontSize={fontSize}
      className={className}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <circle cx="12" cy="12" r="4" fill="#C7C7C7" />
      <circle cx="12" cy="12" r="2" fill="#000" />
    </MuiSvgIcon>
  );
};

export default Inactive;
