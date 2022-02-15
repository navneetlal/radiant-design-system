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
  color = "error",
  children,
  size = "medium",
  ...otherProps
}: IBadgeProps) => {
  const theme = useTheme();
  return (
    <MuiBadge
      sx={[
        {
          "& .MuiBadge-badge": {
            backgroundColor: theme.palette[color].light,
            color: `${theme.palette[color][600]} !important`,
            borderRadius: "5000px",
            border : `1px solid #ffffff`,
            fontFamily: '"Source Sans Pro", sans-serif',
          },
        },
        size === "small" && {
          "& .MuiBadge-badge": {
            height: "24px",
            width: "24px",
            transform: "scale(1) translate(60%, -50%)",
            ...theme.typography.body2,
          },
        },
        size === "medium" && {
          "& .MuiBadge-badge": {
            height: "32px",
            width: "32px",
            transform: "scale(1) translate(60%, -60%)",
            ...theme.typography.body1,
          },
        },
        size === "large" && {
          "& .MuiBadge-badge": {
            height: "40px  ",
            width: "40px",
            transform: "scale(1) translate(60%, -70%)",
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
