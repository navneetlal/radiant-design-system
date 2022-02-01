import React from "react";

import MuiTypography from "@mui/material/Typography";
import MuiButton from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { Base } from "../..";

export interface IStatusButtonsProps {
  number: number;
  color?: "primary" | "secondary" | "error" | "warning" | "success";
  text: string;
  selected?: Boolean;
  onClick?: any;
  [key: string]: any;
}

const StatusButtons = ({
  number,
  color = "primary",
  text,
  selected = false,
  onClick,
}: IStatusButtonsProps) => {
  const theme = useTheme();
  return (
    <MuiButton
      variant="text"
      onClick={onClick}
      sx={{
        height: "32px",
        padding: "4px",
        minWidth: "max-content !important",
        border: "none",
        backgroundColor: selected ? theme.palette.primary.dark : "transparent",
        borderRadius: "4px",
        color: selected ? theme.palette.common.white : theme.palette.grey[650],
        alignItems: "center",
        display: "flex",
        "&:hover": {
          backgroundColor: selected
            ? theme.palette.primary.dark
            : "transparent",
        },
        outline: "none",
        cursor: "pointer",
      }}
    >
      <Base size="small" color={color} variant="body1">
        {number}
      </Base>
      <MuiTypography sx={{ ...theme.typography.h6, padding: "8px 4px" }}>
        {text}
      </MuiTypography>
    </MuiButton>
  );
};

export default StatusButtons;
