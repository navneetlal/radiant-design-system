import { Tooltip as MuiTooltip } from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material";
import React from "react";

export interface IToolTipProps {
  title: string;
  children: JSX.Element;
  color: "light" | "dark";
  size: "small" | "medium";
  [key: string]: any;
}

const ToolTip = ({
  title,
  children,
  color,
  ...otherProps
}: IToolTipProps) => {
  const theme = useTheme();
  return (
    <MuiTooltip
      title={title}
      placement="top"
      arrow

      {...otherProps}
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor:
            //@ts-ignore
              color === "dark" ? theme.palette.primary[600] : "#ffffff",
            color: color === "dark" ? "#ffffff" : "#1A1A1A",

            height: otherProps.size === "medium" ? "28px" : "24px",
            //@ts-ignore
            border: `1px solid ${theme.palette.primary[200]}`,
            borderRadius: "4px",

            minWidth: otherProps.size === "small" ? "53px" : "72px",
            textAlign: "center",
            //justifyContent : 'center',
            ...otherProps.size === 'small' ? {
              ...theme.typography.body2
            } : {
              ...theme.typography.body1
            },
            padding: otherProps.size === "medium" ? "8px 16px" : "4px 8px", // Top Down  Left Right
            paddingTop:
              otherProps.size === "small" ? "12px !important" : "24px !important",
          },
        },
        arrow: {
          sx: {
            //@ts-ignore
            color: color === "dark" ? theme.palette.primary[600] : "#ffffff",
            position: "absolute",
            top: otherProps.size === "medium" ? "60.2px" : "40.2px",

            // width: '10px',
            // height: '4px',
            // //color : '#ffffff',
            // //@ts-ignore

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

ToolTip.propTypes = {
  text: PropTypes.string,
  children: PropTypes.element,
  sx: PropTypes.element,
};

export default ToolTip;
