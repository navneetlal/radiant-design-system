import React from "react";
import { useMemo } from "react";
import MuiButton from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

import type { ButtonProps } from "@mui/material/Button";
import { mergeDeep } from "../../utils/deepMerge";
export interface IButtonProps extends ButtonProps {
  color?: "primary" | "secondary" | "error" | "warning" | "success";
  [key: string]: any;
}

const IconButton = ({
  variant = "contained",
  color = "primary",
  sx,
  size = "medium",
  ...otherProps
}: IButtonProps) => {
  const theme = useTheme();

  const originalSx = {
    minWidth: "32px",
    "& $text": {
      maxWidth: 0,
      overflow: "hidden",
      transition: "all .2s ease-out",
    },
    "&:hover $text": {
      maxWidth: "500px",
      transition: "all .2s ease-in",
      paddingLeft: "5px",
    },
    ...(variant === "contained" && {
      background: theme.palette[color].main,
      color: `#ffffff`,
      "&:hover": {
        background: theme.palette[color].dark,
      },
      boxShadow: "none !important",
    }),
    ...(variant === "outlined" && {
      color: theme.palette[color].main,
      background: "#ffffff",
      border: `1px solid`,
      borderColor: theme.palette[color].main,
      "&:hover": {
        background: theme.palette[color].contrastText,
      },
    }),
    ...(size === "small" && {
      width: "32px",
      height: "32px",
      padding: "8px",
      "& svg": {
        width: "16px",
        height: "16px",
        paddingLeft: "12px",
      },
    }),
    ...(size === "medium" && {
      width: "40px",
      height: "40px",
      padding: "10px",
      "& svg": {
        width: "20px",
        height: "20px",
        paddingLeft: "12px",
      },
    }),
    ...(size === "large" && {
      width: "48px",
      height: "48px",
      ...theme.typography.h4,
      padding: "12px",
      "& svg": {
        width: "24px",
        height: "24px",
        paddingLeft: "12px",
      },
    }),
  };
  const finalSx = useMemo(() => mergeDeep(originalSx, sx), [originalSx, sx]);

  return (
    <MuiButton
      variant={variant}
      color={color}
      sx={finalSx}
      {...otherProps}
    ></MuiButton>
  );
};

export default IconButton;
