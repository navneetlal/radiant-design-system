import React, { useMemo } from "react";
import MuiBadge from "@mui/material/Badge";
import { useTheme } from "@mui/material/styles";

import type { BadgeProps } from "@mui/material/Badge";
import { mergeDeep } from "../../utils/deepMerge";
export interface IBadgeProps extends BadgeProps {
  rounded?: boolean;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  [key: string]: any;
}

const Badge = ({
  sx,
  rounded = true,
  color = "error",
  children,
  size = "medium",
  ...otherProps
}: IBadgeProps) => {
  const theme = useTheme();

  const finalSx = useMemo(() => {
    const originalSx = {
      "& .MuiBadge-badge": {
        backgroundColor: theme.palette[color].light,
        color: `${theme.palette[color][600]} !important`,
        border: `1px solid #ffffff`,
        fontFamily: '"Source Sans Pro", sans-serif',

        height: size === "small" ? "24px" : size === "medium" ? "32px" : "40px",
        width: size === "small" ? "24px" : size === "medium" ? "32px" : "40px",
        transform:
          size === "small"
            ? "scale(1) translate(60%, -50%)"
            : size === "medium"
            ? "scale(1) translate(60%, -60%)"
            : "scale(1) translate(60%, -70%)",
        ...theme.typography.body2,
        borderRadius: !!rounded ? "50%" : 0,
      },
    };

    return mergeDeep(originalSx, sx);
  }, [sx, theme, color, rounded, size]);
  return (
    <MuiBadge sx={finalSx} {...otherProps}>
      {children}
    </MuiBadge>
  );
};

export default Badge;
