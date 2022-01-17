import { Tooltip as MuiTooltip } from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material";
import React from "react";

export interface IToolTipProps {
  title: string;
  children: JSX.Element;
  color: "light" | "dark";
  [key: string]: any;
}

const ToolTip = ({ title, children, color, ...otherProps }: IToolTipProps) => {
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
            //@ts-ignore
            backgroundColor:  color === 'dark' ? theme.palette.primary[600] : theme.palette.primary[200],
            color : color === 'dark' ? '#ffffff' : '#1A1A1A'
          },
        },
        arrow : {
          sx : {
            //@ts-ignore
            color : color === 'dark' ? theme.palette.primary[600] : theme.palette.primary[200]
          }
        }
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
