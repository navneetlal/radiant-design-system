import React from "react";
import { useMemo } from "react";
import MuiButton from "@mui/material/Button";

import { useTheme } from "@mui/material/styles";
import type { ButtonProps } from "@mui/material/Button";
import {mergeDeep} from '../../utils/deepMerge';
export interface IButtonProps extends ButtonProps {
  variant?: "outlined" | "contained" | "text";
  color?: "primary" | "secondary" | "error" | "warning" | "success";
  /**
   * Button Text
   */
  text?: string;
  children?: React.ReactNode;
  inputSize?: "small" | "medium";
  inputAlert?: boolean;
  fromTextbox?: boolean;
  inputReq?: boolean;
  inputLabel?: boolean;
  [key: string]: any;
}

const Button = ({
  sx,
  variant = "contained",
  color = "primary",
  children,
  inputSize,
  size = "small",
  fromTextbox = false,
  inputAlert,
  text,
  inputReq,
  inputLabel,
  disabled = false,
  ...otherProps
}: IButtonProps) => {
  const theme = useTheme();
  const originalSx = {
    ...(variant === "outlined" && {
      color: `${
        theme.palette[color === "secondary" ? "grey" : color][
          color === "secondary" ? 350 : "main"
        ]
      }`,
      backgroundColor: `#ffffff`,
      border: `1px solid`,
      borderColor: `${
        theme.palette[color === "secondary" ? "grey" : color][
          color === "secondary" ? 350 : "main"
        ]
      }`,
      "&:hover": {
        backgroundColor:
          color !== "secondary"
            ? `${theme.palette[color].contrastText}`
            : "inherit",
      },
      ...(color === "secondary" && {
        color: "#000000",
        background: `#ffffff`,
        "&:hover": {
          borderColor: "#000000",
        },
      }),
    }),
    ...(disabled && {
      color: `${theme.palette.grey[100]} !important`,
      backgroundColor:
        variant === "contained"
          ? `${theme.palette.grey[150]} !important`
          : "#ffffff",
      borderColor:
        variant === "outlined" ? `${theme.palette.grey[100]}` : "inherit",
    }),
    ...(variant === "contained" && {
      color: "#ffffff",
      ...(color === "secondary" && {
        backgroundColor: theme.palette.grey[350],
      }),
      "&:hover": {
        background: `${
          theme.palette[color === "secondary" ? "grey" : color][
            color === "secondary" ? 650 : "dark"
          ]
        }`,
      },
      boxShadow: `none !important`,
    }),
    ...(variant === "text" && {
      fontWeight: 500,
      ...(size === "small" && {
        ...theme.typography.h6,
      }),
      ...(size === "medium" && {
        ...theme.typography.h5,
      }),
      ...(size === "large" && {
        ...theme.typography.h4,
      }),
      height: size === "small" ? "16px" : "20px",
      minWidth: "50px !important",
      padding: 0,

      ...(color === "secondary" && {
        color: theme.palette.grey[350],
      }),

      "&:hover": {
        backgroundColor: "inherit",
        color:
          theme.palette[color === "secondary" ? "grey" : color][
            color === "secondary" ? "650" : "dark"
          ],
      },
      ...(fromTextbox && {
        minWidth: "50px !important",
        position: `absolute`,
        right: "12px",
        height: inputSize === "small" ? "16px" : "20px",
        top:
          inputReq || inputLabel
            ? inputSize === "medium"
              ? "39px"
              : "29px"
            : inputSize === "medium"
            ? "11px"
            : "9px",
        color: disabled || inputAlert ? theme.palette.grey[100] : "",
        padding: "8px 8px",
        alignSelf: "center",
        fontWeight: 500,
        backgroundColor: "transparent",
      }),
    }),
    "& .MuiButton-startIcon": {
      justifyContent: "center",
      marginLeft: 0,
    },
  };
  const finalSx = useMemo(() => mergeDeep(originalSx, sx), [originalSx, sx]);
  

  return (
    <MuiButton
      variant={variant}
      color={color}
      disabled={disabled}
      size={size}
      {...otherProps}
      sx={finalSx}
    >
      {text ? text : children}
    </MuiButton>
  );
};

export default Button;
