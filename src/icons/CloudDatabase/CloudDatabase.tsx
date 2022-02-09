import React from 'react';
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";
const icon = ({ color, fontSize, className, style }: MuiSvgIconProps) => {
  return (
    <MuiSvgIcon
      style={style}
      color={color}
      fontSize={fontSize}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M22.5 14.5C22.5 13.9696 22.2893 13.4608 21.9142 13.0858C21.5391 12.7107 21.0304 12.5 20.5 12.5H14.5C13.9696 12.5 13.4609 12.7107 13.0858 13.0858C12.7107 13.4608 12.5 13.9696 12.5 14.5H9.5V11.5H11.83C12.699 11.5014 13.5402 11.1936 14.203 10.6317C14.8658 10.0697 15.3071 9.29019 15.4478 8.43265C15.5885 7.57512 15.4195 6.69549 14.971 5.95115C14.5226 5.20682 13.8239 4.64633 13 4.36998C12.5427 3.41642 11.7949 2.63241 10.864 2.13064C9.93304 1.62887 8.867 1.43518 7.81908 1.57742C6.77115 1.71966 5.79531 2.19051 5.03183 2.92227C4.26835 3.65404 3.75655 4.60903 3.57 5.64998C2.89279 5.87257 2.31696 6.32903 1.9457 6.93758C1.57444 7.54612 1.43201 8.26699 1.54393 8.971C1.65585 9.67502 2.01481 10.3162 2.55648 10.7796C3.09816 11.243 3.78715 11.4984 4.5 11.5H7.5V19.5C7.5 19.7652 7.60536 20.0196 7.79289 20.2071C7.98043 20.3946 8.23479 20.5 8.5 20.5H12.5C12.5 21.0304 12.7107 21.5391 13.0858 21.9142C13.4609 22.2893 13.9696 22.5 14.5 22.5H20.5C21.0304 22.5 21.5391 22.2893 21.9142 21.9142C22.2893 21.5391 22.5 21.0304 22.5 20.5V18.5C22.4963 18.1478 22.3998 17.8029 22.22 17.5C22.3998 17.1971 22.4963 16.8522 22.5 16.5V14.5ZM4.5 9.49998C4.23478 9.49998 3.98043 9.39463 3.79289 9.20709C3.60536 9.01956 3.5 8.7652 3.5 8.49998C3.5 8.23477 3.60536 7.98041 3.79289 7.79288C3.98043 7.60534 4.23478 7.49998 4.5 7.49998C4.76522 7.49998 5.01957 7.39463 5.20711 7.20709C5.39464 7.01956 5.5 6.7652 5.5 6.49998C5.49193 5.78634 5.73854 5.0932 6.19555 4.54502C6.65256 3.99685 7.29003 3.62956 7.99348 3.5091C8.69693 3.38865 9.42028 3.52292 10.0336 3.88782C10.647 4.25271 11.1102 4.82431 11.34 5.49998C11.3987 5.66996 11.5021 5.82098 11.6393 5.93713C11.7766 6.05328 11.9427 6.13026 12.12 6.15998C12.5128 6.22501 12.8688 6.42987 13.1225 6.73678C13.3761 7.0437 13.5102 7.43197 13.5 7.82998C13.5 8.2729 13.3241 8.69767 13.0109 9.01085C12.6977 9.32404 12.2729 9.49998 11.83 9.49998H4.5ZM12.5 18.5H9.5V16.5H12.5C12.5037 16.8522 12.6002 17.1971 12.78 17.5C12.6002 17.8029 12.5037 18.1478 12.5 18.5ZM14.5 20.5V18.5H20.5V20.5H14.5ZM14.5 16.5V14.5H20.5V16.5H14.5Z"
        fill="currentColor"
      />
    </MuiSvgIcon>
  );
};

export default icon;