//! Revisit to remove @mui/styles as a dependency

import React from "react";
import MuiBox from "@mui/material/Box";

import { useTheme } from "@mui/material/styles";

import type { BoxProps } from "@mui/material/Box";


export interface IHeaderProps extends BoxProps {
  children: React.ReactNode;
}

const Header = ({ children, ...otherProps }: IHeaderProps) => {
  const theme = useTheme();
  return (
    <MuiBox
      {...otherProps}
      sx={{
        width: "auto",
        height: "88px",
        display: "flex",
        alignItems: "center",
        borderBottom: `1px solid ${theme.palette.primary[200]}`,
        justifyContent: "space-between",
        backgroundColor: theme.palette.primary.contrastText,
      }}
    >
      {children}
    </MuiBox>
  );
};

export default Header;
