import React, { useMemo } from "react";
import MuiBox from "@mui/material/Box";

import { useTheme, SxProps, Theme } from "@mui/material/styles";
import { mergeDeep } from "../../utils/deepMerge";
export interface IHeaderProps {
  /**
   * Content inside the Box
   */
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}


const Header = ({ children, sx, ...otherProps }: IHeaderProps) => {
  const theme = useTheme();

  const finalSx = useMemo(() => {
    const originalSx = {
      width: "auto",
      height: "88px",
      display: "flex",
      alignItems: "center",
      borderBottom: `1px solid ${theme.palette.primary[200]}`,
      justifyContent: "space-between",
      backgroundColor: theme.palette.primary.contrastText,
    };

    return mergeDeep(originalSx, sx);
  }, [sx, theme]);

  return (
    <MuiBox {...otherProps} sx={finalSx}>
      {children}
    </MuiBox>
  );
};

export default Header;
