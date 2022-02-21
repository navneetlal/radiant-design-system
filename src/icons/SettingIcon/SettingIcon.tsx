import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";

export interface ISettingProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}

const SettingIcon = ({ fillColor, ...otherProps }: ISettingProps) => (
  <MuiSvgIcon {...otherProps}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.89758 0.00193366L11.0201 0.00183105C11.0843 0.00480967 11.1406 0.0121496 11.2197 0.0293818C11.8002 0.155773 12.0209 0.364195 12.5611 1.64068L12.6491 1.85124L12.9886 2.69242L13.0165 2.7039L13.4539 2.50589C14.4066 2.0799 14.8976 1.90046 15.2278 1.8504L15.2962 1.84161L15.4209 1.83488C15.7182 1.83488 16.021 1.94019 16.2528 2.12354L16.3624 2.22159L17.7193 3.57289L17.8137 3.67259C18.2399 4.14212 18.2797 4.47499 17.8082 5.68817L17.6513 6.07955L17.2815 6.95451L17.2886 6.9716L18.1357 7.28794L18.5441 7.44934C19.599 7.88066 19.8158 8.11054 19.9568 8.63858C19.9852 8.74505 19.9953 8.81759 19.9986 8.90763L20 9.00541V10.9131C20 11.0488 19.9954 11.1253 19.962 11.2594C19.8216 11.8231 19.6132 12.0377 18.3455 12.5733L18.1363 12.6606L17.301 12.9977L17.2952 13.0118L17.5972 13.6716C18.3484 15.3411 18.3746 15.7071 17.8809 16.2569L17.8192 16.3239L16.4263 17.7158C16.1769 17.9678 15.8217 18.1066 15.4779 18.1066C15.186 18.1066 14.7275 17.9678 13.9459 17.6544L13.5275 17.483L13.0509 17.2815L13.0236 17.2927L12.7773 17.9532C12.1744 19.5418 11.9678 19.7997 11.3484 19.9596C11.2569 19.9832 11.1914 19.9933 11.1171 19.9973L10.9945 19.9999H9.08563C8.96649 19.9999 8.89925 19.9964 8.78092 19.9707C8.2007 19.8449 7.97914 19.636 7.43788 18.3588L7.34966 18.1481L7.0096 17.3065L6.98344 17.2957L6.34815 17.5813C5.332 18.0286 4.89179 18.1648 4.57806 18.1648C4.28426 18.1648 3.98508 18.0615 3.74708 17.8764L3.63349 17.7772L2.27843 16.4239L2.12369 16.2551C1.75208 15.8179 1.73381 15.4788 2.18994 14.3118L2.42762 13.7277L2.71777 13.0456L2.71172 13.0309L2.05484 12.7862C0.737085 12.2861 0.33098 12.0558 0.137998 11.6353L0.0857984 11.503L0.0421951 11.3565C0.0175227 11.2629 0.00699347 11.1958 0.00271534 11.1194L0 10.9935L0 9.08461C0 8.94793 0.00473793 8.87067 0.0387721 8.73549C0.165661 8.2315 0.345761 8.00767 1.29447 7.58255L1.68766 7.41276L2.69733 7.00445L2.70425 6.98764L2.32674 6.15471C1.70383 4.73985 1.65224 4.30905 2.04525 3.8279L2.09903 3.76477L2.22636 3.62981L3.57616 2.28307C3.82346 2.0344 4.1772 1.89421 4.5215 1.89421C4.76776 1.89421 5.12934 1.99165 5.70805 2.21084L6.29026 2.44164L6.95028 2.71826L6.97734 2.70701L7.22549 2.04219C7.83405 0.442198 8.05128 0.174628 8.69321 0.0309276C8.77419 0.012801 8.83195 0.00507214 8.89758 0.00193366ZM10.523 1.99994L9.40807 1.99994L9.25087 2.36847C9.19117 2.51498 9.12383 2.68611 9.04778 2.88475L8.69932 3.81688C8.61575 4.03756 8.45736 4.22034 8.25375 4.33467L8.14832 4.38598L7.3292 4.72684C7.1224 4.81289 6.89398 4.82655 6.6804 4.76794L6.55432 4.7241L5.58525 4.31562L5.06181 4.10689L4.70998 3.97704L3.91977 4.76545L4.01277 5.00036C4.04911 5.08884 4.09094 5.18776 4.13863 5.29797L4.2997 5.66324L4.70366 6.54633C4.80042 6.75663 4.82065 6.99258 4.76353 7.21404L4.71997 7.34487L4.38503 8.15879C4.29635 8.37428 4.13575 8.55086 3.93242 8.65976L3.82733 8.70844L2.73976 9.14561L2.19609 9.37865L2 9.46946L2 10.5996L2.23463 10.7013C2.32346 10.7385 2.42321 10.779 2.53477 10.8232L2.90579 10.9672L3.80732 11.302C4.03461 11.3839 4.22321 11.5448 4.34018 11.7532L4.39255 11.8612L4.72754 12.6727C4.81356 12.8811 4.82615 13.1111 4.76566 13.3256L4.7206 13.4522L4.33182 14.3645L4.088 14.9663L3.96921 15.2859L4.75948 16.0752L4.99479 15.9822C5.08146 15.9469 5.17645 15.9072 5.28 15.8631L6.00585 15.543L6.5293 15.302C6.74835 15.1973 6.99663 15.1765 7.22796 15.2408L7.342 15.28L8.16593 15.6201C8.38432 15.7103 8.56251 15.8743 8.67074 16.0815L8.71888 16.1886L8.92392 16.706L9.21572 17.4156L9.38458 17.8033L9.47615 17.9999H10.5944L10.7541 17.6235L10.9621 17.0924L11.3007 16.1843C11.3843 15.9617 11.5438 15.7773 11.7492 15.6626L11.8556 15.6111L12.676 15.2726C12.8804 15.1882 13.1058 15.1744 13.317 15.2312L13.4417 15.2737L14.2143 15.6014L14.7781 15.8311L15.0867 15.9501L15.2903 16.0238L16.0815 15.234L15.929 14.8577L15.7004 14.3362L15.2956 13.4538C15.1985 13.2432 15.1782 13.0067 15.2356 12.7848L15.2793 12.6538L15.6137 11.8434C15.7019 11.6296 15.861 11.4541 16.0624 11.3452L16.1665 11.2964L17.0876 10.9261L17.5578 10.729L17.6871 10.6728L18 10.5296V9.40056L17.6863 9.26667L17.2615 9.09854L16.1891 8.69933C15.9623 8.61682 15.7744 8.45565 15.658 8.24726L15.6059 8.13928L15.2715 7.32446C15.1862 7.11658 15.1738 6.88733 15.2341 6.67349L15.279 6.54733L15.5895 5.82144C15.6703 5.62948 15.7406 5.45925 15.8014 5.3088L15.9103 5.03366L16.029 4.71215L15.2384 3.92476L15.0029 4.01792C14.8727 4.07102 14.7235 4.13404 14.5542 4.20763L14.3782 4.28477L13.4554 4.70334C13.2454 4.79954 13.0101 4.81955 12.7891 4.76257L12.6586 4.71915L11.8352 4.38068C11.6196 4.29208 11.443 4.13153 11.334 3.92823L11.2853 3.82315L10.9942 3.09476L10.7832 2.58446L10.6663 2.31307L10.523 1.99994ZM10.0005 5.99994C12.2066 5.99994 14 7.79296 14 9.99908C14 12.2053 12.2065 13.9999 10.0005 13.9999C7.79382 13.9999 6 12.2056 6 9.99908C6 7.79264 7.79369 5.99994 10.0005 5.99994ZM10.0005 7.99994C8.89801 7.99994 8 8.89746 8 9.99908C8 11.1012 8.89851 11.9999 10.0005 11.9999C11.1016 11.9999 12 11.101 12 9.99908C12 8.89762 11.1021 7.99994 10.0005 7.99994Z"
      fill={fillColor || '#91B0FA'}
    />
  </MuiSvgIcon>
);

export default SettingIcon;