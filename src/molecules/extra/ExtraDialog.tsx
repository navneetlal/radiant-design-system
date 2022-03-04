import MuiDialog from "@mui/material/Dialog";
import MuiDialogActions from "@mui/material/DialogActions";
import MuiDialogContent from "@mui/material/DialogContent";
import MuiTypography from "@mui/material/Typography";
import { Grid as MuiGrid, IconButton as MuiIconButton } from "@mui/material/";
import MuiCloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import React from "react";

export interface IDialog {
  open: boolean;
  setClose: any;
  children: any;
  buttonAction: any;
  heading: string;
  height?: number;
  width?: number;
}

const Dialog = ({
  open = false,
  setClose,
  children,
  buttonAction,
  heading,
  height = 100,
  width = 496,
}: IDialog) => {
  const theme = useTheme();

  return (
    <>
      <MuiDialog
        sx={{ overflowY: "visible" }}
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xl"
      >
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: width,
            height: 72,
          }}
          id="alert-dialog-title"
        >
          <div>
            <MuiTypography
              variant="h3"
              sx={{ color: "#ffffff", marginLeft: "40px" }}
              color="textPrimary"
            >
              {heading}
            </MuiTypography>
          </div>
          <MuiIconButton onClick={setClose} sx={{ marginRight: "40px" }}>
            <MuiCloseIcon
              sx={{ color: "#ffffff" }}
              style={{ cursor: "pointer" }}
            />
          </MuiIconButton>
        </Box>
        <MuiDialogContent
          sx={{
            padding: 0,
            height: height,
            width: width,
          }}
        >
          {children}
        </MuiDialogContent>
        <MuiDialogActions
          sx={{
            height: 80,
            width: width,
            borderTop: `1px solid black`,
            borderColor: theme.palette.primary[200],
            display: "flex",
            alignItems: "center",
            padding: 0,
            boxSizing: "border-box",
          }}
        >
          <MuiGrid
            sx={{
              display: "flex",
              justifyContent: "end",
              marginRight: "40px",
            }}
          >
            {buttonAction}
          </MuiGrid>
        </MuiDialogActions>
      </MuiDialog>
    </>
  );
};

export default Dialog;
