import React from "react";

import { Typography as MuiTypography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AlertIcon from "../../icons/Alert/Alert";
import { Box } from "@mui/material";
import BlueTickIcon from "../../icons/BlueTick";

export interface IAlertProps {
  status: "success" | "warning";
  uploadedFiles?: number;
  downloadFile?: any;
  onClickReupload?: any;
}

const Alert = ({
  status,
  uploadedFiles,
  downloadFile,
  onClickReupload,
}: IAlertProps) => {
  const theme = useTheme();
  return (
    <Box sx={{ width: "100%" }}>
      {status === "warning" ? (
        <Box
          sx={{
            backgroundColor: theme.palette.secondary[50],
            display: "flex",
            flexDirection: "row",
            padding: "10px 24px",
          }}
        >
          <AlertIcon />
          <MuiTypography variant="body1" sx={{ margin: "0 10px" }}>
            Data validation was unsuccessful on the below rows. We created a
            <Box
              component="span"
              sx={{ color: theme.palette.primary.main, cursor: "pointer" }}
              onClick={downloadFile}
            >
              {" "}
              file
            </Box>{" "}
            with the error records highlighted for you. Please review the
            information and{" "}
            <Box
              component="span"
              sx={{ color: theme.palette.primary.main, cursor: "pointer" }}
              onClick={onClickReupload}
            >
              {" "}
              reupload.
            </Box>
          </MuiTypography>
        </Box>
      ) : status === "success" ? (
        <Box
          sx={{
            backgroundColor: theme.palette.success.light,
            display: "flex",
            flexDirection: "row",
            padding: "10px 24px",
          }}
        >
          <BlueTickIcon fillColor={theme.palette.success.main} />
          <MuiTypography variant="body1" style={{ margin: "0 10px" }}>
            {uploadedFiles} records uploaded successfully
          </MuiTypography>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default Alert;
