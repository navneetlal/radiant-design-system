import React, { useMemo } from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { mergeDeep } from "../../utils/deepMerge";

const Active = ({
  color,
  fontSize,
  sx,
  className,
  style,
  ...otherProps
}: MuiSvgIconProps) => {
  const theme = useTheme();
  const originalSx = {
    ...(fontSize === "small" && {
      fontSize: theme.typography.pxToRem(16),
    }),
    ...(fontSize === "medium" && {
      fontSize: theme.typography.pxToRem(20),
    }),
    ...(fontSize === "large" && {
      fontSize: theme.typography.pxToRem(24),
    }),
  };
  const finalSx = useMemo(() => mergeDeep(originalSx, sx), [originalSx, sx]);

  return (
    <MuiSvgIcon
      sx={finalSx}
      style={style}
      color={color}
      fontSize={fontSize}
      className={className}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <circle cx="12" cy="12" r="4" fill="#D7E3FE" />
      <circle cx="12" cy="12" r="2" fill="#2C63E5" />
    </MuiSvgIcon>
  );
};

export default Active;
