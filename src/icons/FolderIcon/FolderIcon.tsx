import React from "react";

import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";
import MuiSvgIcon from "@mui/material/SvgIcon";


const FolderIcon = ({ color, fontSize, className, style,...props }: MuiSvgIconProps) => {
  return (
    <MuiSvgIcon
      style={style}
      color={color}
      fontSize={fontSize}
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4776 6H19C20.6569 6 22 7.34315 22 9V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7C2 5.34315 3.34315 4 5 4H10.3837C10.6857 4 10.9716 4.13652 11.1614 4.37144L12.4776 6ZM9.90609 6H5C4.44772 6 4 6.44772 4 7V17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17V9C20 8.44772 19.5523 8 19 8H12C11.698 8 11.4121 7.86348 11.2222 7.62856L9.90609 6Z"
        fill="currentColor"
      />
    </MuiSvgIcon>
  );
};

export default FolderIcon;
