import React from "react";
import MuiBadge from "@mui/material/Badge";
import { useTheme } from "@mui/material/styles";

import type { BadgeProps } from "@mui/material/Badge";

export interface IBadgeProps extends BadgeProps {
  rounded?: boolean;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  [key: string]: any;
}

const Badge = ({
  rounded = true,
  color = "primary",
  children,
  size = "medium",
  ...otherProps
}: IBadgeProps) => {
  const theme = useTheme();
  return (
    <MuiBadge
      style={{ margin: "9rem" }}
      sx={[
        {
          "& .MuiBadge-badge": {
            backgroundColor: theme.palette[color].light,
            color: `1A1A1A`,
            borderRadius: "4px",
            fontFamily: '"Source Sans Pro", sans-serif',
          },
        },
        size === "small" && {
          "& .MuiBadge-badge": {
            height: "24px",
            width: "24px",
            transform: "scale(1) translate(90%, -50%)",
            ...theme.typography.body2,
          },
        },
        size === "medium" && {
          "& .MuiBadge-badge": {
            height: "32px",
            width: "32px",
            transform: "scale(1) translate(90%, -60%)",
            ...theme.typography.body1,
          },
        },
        size === "large" && {
          "& .MuiBadge-badge": {
            height: "40px  ",
            width: "40px",
            transform: "scale(1) translate(90%, -70%)",
            ...theme.typography.subtitle2,
          },
        },
        !!rounded && {
          "& .MuiBadge-badge": {
            borderRadius: "50%",
          },
        },
      ]}
      {...otherProps}
    >
      {children}
    </MuiBadge>
  );
};

export default Badge;
