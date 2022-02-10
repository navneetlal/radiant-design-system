import React from 'react'
import MUISnackbar from "@mui/material/Snackbar";
import { useTheme } from "@mui/material/styles";
import type { SnackbarProps } from '@mui/material/Snackbar'
export interface ISnackbarProps extends SnackbarProps {
  color: "primary" | "error" | "warning" | "success";
  [key: string]: any;
}

const Snackbar = ({
  color,
  anchorOrigin={ vertical: "bottom", horizontal: "right" },
  ...otherProps
}: ISnackbarProps) => {
  const theme = useTheme();

  const getBackgroundColor = () => {
    switch (color) {
      case "primary":
        return theme.palette.primary.main;
      case "error":
        return theme.palette?.error?.dark;
      case "warning":
        return theme.palette?.warning?.[600];
      case "success":
        return theme.palette?.success?.dark;
      default:
        return theme.palette.primary.main;
    }
  }

  return (
    <MUISnackbar
      autoHideDuration={3000}
      anchorOrigin={anchorOrigin}
      ContentProps={{
        sx: {
          backgroundColor: getBackgroundColor(),
          cursor: 'pointer'
        }
      }}
      {...otherProps}
    />
  );
};

export default Snackbar;
