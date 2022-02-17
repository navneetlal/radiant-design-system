import React from "react";
import MuiBox from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { SystemStyleObject } from "@mui/system";
import { useMemo } from "react";
import { mergeDeep } from "../../utils/deepMerge";

export interface IBoxProps {
  /**
   * The background Color of Box
   */
  color?: "primary" | "secondary" | "error" | "success" | "warning";

  /**
   * Content Inside the Box
   */
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  /**
   * CSS Styling
   */
  style?: any;
  sx?: SystemStyleObject;
}

const Box = ({
  color = "primary",
  children,
  size = "medium",
  sx,
  style,
  ...otherProps
}: IBoxProps) => {
  const theme = useTheme();

  const originalSx = {
    fontFamily: '"Source Sans Pro", sans-serif !important',
    borderRadius: "4px !important",
    width: "max-content",
    padding: "4px 4px",
    backgroundColor: theme.palette[color].light,
    color: theme.palette.common.black,
    ...(size === "small" && {
      ...theme.typography.body2,
    }),
    ...(size === "medium" && {
      ...theme.typography.body1,
    }),
    ...(size === "large" && {
      ...theme.typography.subtitle2,
    }),
  };

  const finalSx = useMemo(() => mergeDeep(originalSx, sx), [originalSx, sx]);
  
  return (
    <MuiBox sx={finalSx} style={style} {...otherProps}>
      {children}
    </MuiBox>
  );
};

export default Box;
