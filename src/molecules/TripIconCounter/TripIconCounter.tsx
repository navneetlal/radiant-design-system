import React from "react";

import { useTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'



export interface ICounterProps {
  number: number;
  status: string;
  icon?: any;
  selected?: Boolean;
  onClick?: any;
}

const Counter = ({
  number,
  status,
  icon,
  selected = false,
  onClick,
}: ICounterProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "max-content",
        height: "74px",
        backgroundColor: selected
          ? theme.palette.primary.main
          : theme.palette.common.white,
        display: "flex",
        alignItems: "center",
        border: "1px solid black",
        borderColor: theme.palette.primary[200],
        padding: "0 12px",
        "&:hover": {
          background: selected
            ? theme.palette.primary.dark
            : theme.palette.primary[100],
        },
        borderRadius: "4px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Box sx={{ justifyContent: "column" }}>
        <Typography
          sx={{
            ...theme.typography.h4,
            marginBottom: 0,
            color: selected ? theme.palette.grey[150] : theme.palette.grey[650],
          }}
        >
          {number}
        </Typography>
        <Typography
          sx={{
            ...theme.typography.h5,
            color: selected ? theme.palette.grey[150] : theme.palette.grey[650],
            marginTop: 0,
          }}
        >
          {status}
        </Typography>
      </Box>
      {icon && (
        <Box
          sx={{
            paddingLeft: "30px",
            color: selected
              ? theme.palette.primary.contrastText
              : theme.palette.primary.main,
          }}
        >
          {icon}
        </Box>
      )}
    </Box>
  );
};

export default Counter;
