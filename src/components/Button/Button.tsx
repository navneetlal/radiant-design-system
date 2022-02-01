import React from "react";
import MuiButton from "@mui/material/Button";

import { useTheme } from "@mui/material/styles";
import type { ButtonProps } from '@mui/material/Button'

export interface IButtonProps extends ButtonProps {
  variant?: "outlined" | "contained" | "text";
  color?: "primary" | "secondary" | "error" | "warning" | "success";
  text ?: string;
  children?: React.ReactNode;
  inputSize?: 'small' | 'medium';
  inputAlert?: boolean;
  inputReq?: boolean;
  inputLabel?: boolean;
  [key: string]: any;
}

const Button = ({
  variant = "contained",
  color = "primary",
  children,
  inputSize,
  inputAlert,
  text,
  inputReq,
  inputLabel,
  disabled = false,
  ...otherProps
}: IButtonProps) => {
  const theme = useTheme();
  return (
    <MuiButton
      variant={variant}
      color={color}
      disabled = {disabled}
      {...otherProps}
      sx={[
        variant === "outlined" && {
          color: `${theme.palette[color].main}`,
          backgroundColor: `#ffffff`,
          border: `1px solid`,
          borderColor: `${theme.palette[color].main}`,
          "&:hover": {
            backgroundColor: color !== 'secondary' ? `${theme.palette[color].contrastText}` : 'inherit',
          },
        },
        disabled && {
          color: `${theme.palette.grey[100]} !important`,
          backgroundColor: variant === 'contained' ? `${theme.palette.grey[150]} !important` : '#ffffff',
          borderColor: variant === 'outlined' ? `${theme.palette.grey[100]}` : 'inherit'
        },
        variant === "contained" && {
          color: "#ffffff",
          "&:hover": {
            background: `${theme.palette[color].dark}`,
          },
          boxShadow: `none !important`,
        },
        color === "secondary" && variant === 'outlined' && {
          color: "#000000",
          background: `#ffffff`,
          "&:hover": {
            borderColor: "#000000",
          },
        },
        variant === 'text' && {
          minWidth: "50px !important",
          position: `absolute`,
          right: '12px',
          height: inputSize === 'small' ? '16px' : '20px',
          top: inputReq || inputLabel ? (inputSize === 'medium' ? '39px' : '29px') : (inputSize === 'medium' ? '11px' : '9px'),
          color: disabled || inputAlert ? theme.palette.grey[100] : '',
          padding: "8px 8px",
          alignSelf: "center",
          backgroundColor: "transparent",
          ...theme.typography.body2,
        },
      ]}
    >
      {text ? text : children}
    </MuiButton>
  );
};

export default Button;
