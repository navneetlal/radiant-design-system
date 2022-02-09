import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";


const Globe = ({ color, fontSize, className, style }: MuiSvgIconProps) => {
  return (
    <MuiSvgIcon
      style={style}
      color={color}
      fontSize={fontSize}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM14.9724 13.0008H9.02756C9.1385 15.0043 9.57914 16.8283 10.2533 18.1766C10.8812 19.4324 11.5522 20 12 20C12.4478 20 13.1188 19.4324 13.7467 18.1766C14.4209 16.8283 14.8615 15.0043 14.9724 13.0008ZM19.938 13.001L16.9753 13.0013C16.8543 15.4352 16.2969 17.6123 15.462 19.2152C17.8601 18.0616 19.5952 15.7475 19.938 13.001ZM7.02475 13.0013L4.06202 13.001C4.40485 15.7475 6.13992 18.0615 8.53864 19.2145C7.75535 17.7123 7.2165 15.705 7.05251 13.4545L7.02475 13.0013ZM8.53804 4.78476L8.51189 4.79845C6.12679 5.95583 4.40323 8.26319 4.06192 10.9998L7.0247 10.9997C7.14558 8.56543 7.70294 6.38794 8.53804 4.78476ZM12 4L11.9187 4.00592C11.4734 4.06916 10.8443 4.64145 10.2533 5.82336C9.57902 7.17195 9.13835 8.99633 9.0275 11.0002H14.9725C14.8617 8.99633 14.421 7.17195 13.7467 5.82336C13.1188 4.56758 12.4478 4 12 4ZM15.4614 4.78553L15.4839 4.82724C16.3069 6.42646 16.8556 8.58728 16.9753 11.0004L19.9381 11C19.5956 8.25307 17.8604 5.93862 15.4614 4.78553Z"
        fill="currentColor"
      />
    </MuiSvgIcon>
  );
};

export default Globe;
