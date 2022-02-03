import React from "react";

import MuiDialog from "@mui/material/Dialog";
import MuiDialogActions from "@mui/material/DialogActions";
import MuiDialogContent from "@mui/material/DialogContent";
import MuiTypography from "@mui/material/Typography";
import MuiGrid from "@mui/material/Grid";
import MuiIconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { Close as CloseIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

import Button from "../../components/Button/Button";


export interface IDialog {
  open?: boolean;
  setClose: any;
  onClickYes?: any;
  onClickNo?: any;
  confirmBtnColor ?: "primary" | "secondary" | "warning" | "success" | "error";
  discardBtnColor ?: "primary" | "secondary" | "warning" | "success" | "error";
  headerMessage ?: string;
  message: string;
  confirmBtnText ?: string;
  discardBtnText ?: string;
}

const Dialog = ({
  open = false,
  setClose,
  onClickYes,
  onClickNo,
  message,
  confirmBtnColor = "success",
  discardBtnColor = "error",
  headerMessage = "Confirmation",
  confirmBtnText = "Confirm",
  discardBtnText = "Cancel"

}: IDialog) => {
  const theme = useTheme();
  return (
    <>
      <MuiDialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 40px",
            alignItems: "center",
            height: "32px",
          }}
          id="alert-dialog-title"
        >
          <div>
            <MuiTypography
              variant="h3"
              sx={{ color: theme.palette.common.white }}
              color="textPrimary"
            >
              {headerMessage}
            </MuiTypography>
          </div>
          <MuiIconButton onClick={setClose}>
            <CloseIcon
              sx={{ color: theme.palette.common.white, cursor: "pointer" }}
            />
          </MuiIconButton>
        </Box>
        <MuiDialogContent sx={{ padding: "40px", minWidth: "416px" }}>
          <MuiTypography
            variant="subtitle2"
            sx={{
              ...theme.typography.subtitle2,
              color: theme.palette.common.black,
            }}
          >
            {message}
          </MuiTypography>
        </MuiDialogContent>
        <MuiDialogActions
          sx={{
            height: "80px",
            padding: "0 40px",
            backgroundColor: theme.palette.primary.contrastText,
            borderTop: `1px solid  ${theme.palette.primary[200]}`,
            borderColor: theme.palette.primary[200],
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <MuiGrid container spacing={3} justifyContent="end">
            <MuiGrid item>
              <Button
                text={discardBtnText}
                variant="outlined"
                color={discardBtnColor}
                size="small"
                onClick={onClickNo}
              />
            </MuiGrid>
            <MuiGrid item>
              <Button
                text={confirmBtnText}
                variant="contained"
                color={confirmBtnColor}
                size="small"
                onClick={onClickYes}
              />
            </MuiGrid>
          </MuiGrid>
        </MuiDialogActions>
      </MuiDialog>
    </>
  );
};

export default Dialog;
