import { Snackbar as MUISnackbar } from "@mui/material";
import { useTheme } from "@mui/material";
import React from 'react'

export interface ISnackbarProps {
  open: boolean;
  message: string;
  color: "primary" | "error" | "warning" | "success";
  action?: string | React.ReactElement;
  handleClose?: any;
  [key: string]: any;
}

const Snackbar = ({
  open,
  message,
  color,
  action,
  handleClose,
  ...otherProps
}: ISnackbarProps) => {
  const theme = useTheme();

  let finalColor;
  switch (color) {
    case "primary":
      //@ts-ignore
      finalColor = theme.palette.primary.main;
      break;
    case "error":
      //@ts-ignore
      finalColor = theme.palette.error.dark;
      break;
    case "warning":
      //@ts-ignore
      finalColor = theme.palette.warning[600];
      break;
    case "success":
      //@ts-ignore
      finalColor = theme.palette.success.dark;
      break;
    default:
      //@ts-ignore
      finalColor = theme.palette.primary.main;
      break;
  }

  return (
    <MUISnackbar
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={open}
      onClose={handleClose}
      message={message}
      action={action}
      ContentProps = {{
          sx:{
              backgroundColor : finalColor,
          }
      }}
      {...otherProps}
    />
  );
};

export default Snackbar;
