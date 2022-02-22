import React from "react";

import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";
import MuiSvgIcon from "@mui/material/SvgIcon";


export interface IHeadPhoneIconProps extends MuiSvgIconProps{
  fillColor?: string;
  [key: string]: any;
}

const HeadPhoneIcon = ({ fillColor, ...otherProps }: IHeadPhoneIconProps) => {
  return (
    <MuiSvgIcon
      viewBox="0 0 16 16"
      {...otherProps}
    >
      <path
        d="M7.99997 0.00210084C6.33226 -0.0406916 4.71554 0.578532 3.50384 1.72417C2.29214 2.86981 1.58421 4.4485 1.53508 6.11453V11.7566C1.55331 12.1398 1.71848 12.5012 1.99633 12.7659C2.27417 13.0307 2.64337 13.1783 3.0273 13.1783C3.41123 13.1783 3.78042 13.0307 4.05827 12.7659C4.33612 12.5012 4.50129 12.1398 4.51952 11.7566V7.05432C4.50806 6.66987 4.3446 6.30563 4.06492 6.04134C3.78524 5.77705 3.41213 5.63425 3.0273 5.64421C2.86499 5.64715 2.70415 5.67554 2.55066 5.72835C2.72281 4.40592 3.37079 3.19128 4.37363 2.31121C5.37647 1.43114 6.66561 0.945798 8.00038 0.945798C9.33515 0.945798 10.6243 1.43114 11.6271 2.31121C12.63 3.19128 13.278 4.40592 13.4501 5.72835C13.2965 5.67804 13.1359 5.6522 12.9743 5.65178C12.5895 5.64182 12.2164 5.78462 11.9367 6.04891C11.657 6.3132 11.4935 6.67744 11.4821 7.06189V11.7634C11.4933 12.148 11.6567 12.5124 11.9364 12.7769C12.2161 13.0414 12.5893 13.1843 12.9743 13.1743C13.1437 13.1736 13.3118 13.1452 13.472 13.0902V13.6472C13.4683 13.7754 13.4138 13.8969 13.3205 13.9851C13.2272 14.0733 13.1027 14.1209 12.9743 14.1175H9.40039C9.28994 13.8373 9.09685 13.5973 8.84674 13.4293C8.59663 13.2614 8.30132 13.1733 7.99997 13.1768C7.80808 13.1664 7.61607 13.1951 7.43566 13.2612C7.25526 13.3274 7.09025 13.4296 6.95071 13.5616C6.81116 13.6936 6.70002 13.8527 6.62406 14.029C6.54811 14.2054 6.50893 14.3954 6.50893 14.5874C6.50893 14.7794 6.54811 14.9694 6.62406 15.1457C6.70002 15.3221 6.81116 15.4811 6.95071 15.6131C7.09025 15.7451 7.25526 15.8473 7.43566 15.9135C7.61607 15.9797 7.80808 16.0084 7.99997 15.9979C8.30132 16.0014 8.59663 15.9134 8.84674 15.7454C9.09685 15.5774 9.28994 15.3374 9.40039 15.0573H12.9735C13.3583 15.0672 13.7314 14.9244 14.0111 14.6601C14.2908 14.3959 14.4542 14.0316 14.4657 13.6472V6.11453C14.4166 4.44835 13.7085 2.86953 12.4966 1.72387C11.2847 0.578204 9.66781 -0.0409179 7.99997 0.00210084Z"
        fill={fillColor || "currentColor"}
      />
      <path
        d="M15.233 7.31311V11.7723C15.4565 11.6934 15.6502 11.5474 15.7874 11.3541C15.9246 11.1608 15.9987 10.9299 15.9994 10.6928V8.39256C15.9987 8.15553 15.9246 7.92454 15.7874 7.73127C15.6502 7.53801 15.4565 7.39195 15.233 7.31311Z"
        fill={fillColor || "currentColor"}
      />
      <path
        d="M0 8.39088V10.6911C0.000397811 10.9285 0.0743043 11.1598 0.211557 11.3534C0.348809 11.547 0.542667 11.6933 0.766472 11.7723V7.31311C0.543206 7.39185 0.34973 7.53766 0.212525 7.73059C0.0753196 7.92352 0.00109137 8.15413 0 8.39088Z"
        fill={fillColor || "currentColor"}
      />
    </MuiSvgIcon>
  );
};

export default HeadPhoneIcon;
