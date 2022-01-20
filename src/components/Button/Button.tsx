import React from "react";
import { Button as MuiButton } from "@mui/material";
import { useTheme } from "@mui/material";

export interface IButtonProps {
  variant?: "outlined" | "contained" | "text";
  color : "primary" | "secondary" | "error" | "warning" | "success";
  size?: "small" | "medium" | "large";
  text?: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  inputSize?: 'small' | 'medium';
  [key: string]: any;
}

const Button = ({
  variant,
  color,
  size,
  text,
  leftIcon,
  rightIcon,
  inputSize,
  ...otherProps
}: IButtonProps) => {
  const theme = useTheme();
  return (
    <MuiButton
      variant={variant}
      color={color}
      startIcon={leftIcon}
      endIcon={rightIcon}
      size={size}
      {...otherProps}
      sx={[
        variant === "outlined" && {
          color: `${theme.palette[color].main}`,
          backgroundColor: `#ffffff`,
          border: `1px solid`,
          borderColor: `${theme.palette[color].main}`,
          "&:hover": {
            backgroundColor: color !== 'secondary' && `${theme.palette[color].contrastText}`,
          },
        },
        otherProps.disabled && {
          color : `${theme.palette.secondary.main} !important`,
          backgroundColor :  variant ===  'contained' ? `${theme.palette.secondary.light} !important` : '#ffffff',
          borderColor : variant === 'outlined' && `${theme.palette.secondary.main}`
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
          //"& .MuiButton-text": {
            minWidth: "50px !important",
            position: `absolute`,
            right: '2px',
            top: inputSize === 'medium' ? '28px' : '22px',
            //bottom: '8px',
            height: '24px',
            padding: "8px 8px",
            alignSelf: "center",
            backgroundColor: "transparent",
            ...theme.typography.body2,
            fontFamily : 'Poppins'
          },
        //},
      ]}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
