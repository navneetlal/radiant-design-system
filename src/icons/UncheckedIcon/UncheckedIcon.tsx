import React from "react";
import { SvgIcon as MuiSvgIcon } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const UnCheckedIcon = ({ alert, disabled }: any) => {
  const theme = useTheme();
  const styles = {
    border: "1px solid gray",
  };
  return (
    <MuiSvgIcon
      sx={{
        width: "20px",
        height: "20px",
        "&>path": {
          stroke: alert
            ? theme.palette?.support?.error?.main
            : theme.palette.grey[100],
          fill: disabled ? theme.palette?.grey[150] : "",
          "&:hover": {
            stroke: theme.palette.primary.main,
            fill: theme.palette.primary[50],
          },
        },
      }}
      viewBox="0 0 20 20"
      style={{
        margin: "auto",
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6C0 3.79086 1.79086 2 4 2H12C14.2091 2 16 3.79086 16 6V14C16 16.2091 14.2091 18 12 18H4C1.79086 18 0 16.2091 0 14V6Z"
        fill="white"
        stroke="grey"
        strokeWidth="1px"
        transform="translate(1 0)"
        style={styles}
      />
    </MuiSvgIcon>
  );
};

export default UnCheckedIcon;
