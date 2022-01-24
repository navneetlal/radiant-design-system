import { Tooltip as MuiTooltip } from "@mui/material";
import { useTheme } from "@mui/material";
import React from "react";

export interface IToolTipProps {
  title: string;
  children: JSX.Element;
  color: "light" | "dark";
  size: "small" | "medium";
  placement:
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
  [key: string]: any;
}

const ToolTip = ({
  title,
  children,
  color,
  placement,
  ...otherProps
}: IToolTipProps) => {
  const theme = useTheme();
  return (
    <MuiTooltip
      title={title}
      placement={placement}
      arrow
      {...otherProps}
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor:
              //@ts-ignore
              color === "dark" ? theme.palette.primary.dark : "#ffffff",
            color: color === "dark" ? "#ffffff" : "#1A1A1A",

            height: otherProps.size === "medium" ? "18px" : "14px",
            //@ts-ignore
            border: `1px solid ${theme.palette.primary[200]}`,
            borderRadius: "4px",

            minWidth: otherProps.size === "small" ? "35px" : "38px",
            textAlign: "center",
            //justifyContent : 'center',
            ...(otherProps.size === "small"
              ? {
                  ...theme.typography.body2,
                }
              : {
                  ...theme.typography.body1,
                }),
            padding: otherProps.size === "medium" ? "8px 16px" : "4px 8px", // Top Down  Left Right
          },
        },
        arrow: {
          sx: {
            //@ts-ignore
            color: color === "dark" ? theme.palette.primary.dark : "#ffffff",
            position: "absolute",
            top: otherProps.size === "medium" ? "34.2px" : "22.2px",
            ...(placement === 'bottom' && {
              marginTop : '4px', 

            }),
            ...(placement === 'top' && {
              marginBottom : '4px'
            }),
            //marginTop : '4px',
            "&:before": {
              border: `.1px solid`,
              //@ts-ignore
              borderColor: theme.palette.primary[200],
              borderRadius: "2px",
            },
          },
        },
      }}
    >
      <span>{children}</span>
    </MuiTooltip>
  );
};

export default ToolTip;
