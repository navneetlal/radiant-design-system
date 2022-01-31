import React from "react";

import MuiTooltip from "@mui/material/Tooltip";
import { useTheme } from "@mui/material/styles";
import type { TooltipProps } from "@mui/material/Tooltip";

export interface ITooltipProps extends TooltipProps {
  children: JSX.Element;
  color: "light" | "dark";
  size: "small" | "medium";
  [key: string]: any;
}

const Tooltip = ({
  children,
  color,
  placement,
  ...otherProps
}: ITooltipProps) => {
  const theme = useTheme();
  return (
    <MuiTooltip
      placement={placement}
      arrow
      {...otherProps}
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor:
              color === "dark" ? theme.palette.primary.dark : "#ffffff",
            color: color === "dark" ? "#ffffff" : "#1A1A1A",

            height: otherProps.size === "medium" ? "18px" : "14px",
            border: `1px solid ${theme.palette.primary[200]}`,
            borderRadius: "4px",

            minWidth: otherProps.size === "small" ? "35px" : "38px",
            textAlign: "center",
            ...(otherProps.size === "small"
              ? {
                ...theme.typography.body2,
              }
              : {
                ...theme.typography.body1,
              }),
            padding: otherProps.size === "medium" ? "8px 16px" : "4px 8px",
            ...(placement === 'top' && {

              marginBottom: '4px !important',
            }),
            ...(placement === 'bottom' && {
              marginTop: '4px !important'
            })
          },
        },
        arrow: {
          sx: {
            color: color === "dark" ? theme.palette.primary.dark : "#ffffff",
            position: "absolute",
            top: otherProps.size === "medium" ? "34.2px" : "22.2px",
            "&:before": {
              border: `.1px solid`,
              borderColor: theme.palette.primary[200],
              borderRadius: "2px",
            },
          },
        }
      }}
    >
      <span>{children}</span>
    </MuiTooltip>
  );
};

export default Tooltip;
