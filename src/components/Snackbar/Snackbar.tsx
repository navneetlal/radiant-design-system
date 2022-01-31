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
  ...otherProps
}: ISnackbarProps) => {
  const theme = useTheme();

  const getBackgroundColor = (color: ISnackbarProps['color']) => {
    switch (color) {
      case "primary":
        return theme.palette.primary.main;
      case "error":
        return theme.palette?.support?.error?.dark;
      case "warning":
        return theme.palette?.support?.warning?.[600];
      case "success":
        return theme.palette?.support?.success?.dark;
      default:
        return theme.palette.primary.main;
    }
  }

  return (
    <MUISnackbar
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      ContentProps={{
        sx: {
          backgroundColor: getBackgroundColor(color),
          cursor: 'pointer'
        }
      }}
      {...otherProps}
    />
  );
};

export default Snackbar;
