import React from "react";

import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";
import MuiSvgIcon from "@mui/material/SvgIcon";

const ChevronDownIcon = ({ color, fontSize, className, style,...props }: MuiSvgIconProps) => {
  return (
    <MuiSvgIcon
      {...props}
      style={style}
      color={color}
      fontSize={fontSize}
      className={className}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289C14.0976 5.68342 14.0976 6.31658 13.7071 6.70711L8.70711 11.7071C8.31658 12.0976 7.68342 12.0976 7.29289 11.7071L2.29289 6.70711C1.90237 6.31658 1.90237 5.68342 2.29289 5.29289C2.68342 4.90237 3.31658 4.90237 3.70711 5.29289L8 9.58579L12.2929 5.29289Z"
        fill="currentColor"
      />
    </MuiSvgIcon>
  );
};

export default ChevronDownIcon;
