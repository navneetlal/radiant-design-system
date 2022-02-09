import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";

export interface IMaxFileUploadAlertProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}

const MaxFileUploadAlert = ({ fillColor, ...props }: IMaxFileUploadAlertProps) => {
  return (
    <MuiSvgIcon viewBox="0 0 16 16" sx={{ width: "16px", height: "16px" }} {...props}>
      <path
        d="M8.00017 1.33333C6.68162 1.33333 5.39269 1.72432 4.29636 2.45686C3.20004 3.18941 2.34555 4.2306 1.84097 5.44877C1.33638 6.66695 1.20436 8.00739 1.4616 9.3006C1.71883 10.5938 2.35377 11.7817 3.28612 12.714C4.21847 13.6464 5.40636 14.2813 6.69956 14.5386C7.99277 14.7958 9.33321 14.6638 10.5514 14.1592C11.7696 13.6546 12.8108 12.8001 13.5433 11.7038C14.2758 10.6075 14.6668 9.31854 14.6668 8C14.6649 6.23249 13.9619 4.53794 12.712 3.28812C11.4622 2.0383 9.76767 1.33529 8.00017 1.33333ZM8.00017 13.3333C6.94533 13.3333 5.91419 13.0205 5.03712 12.4345C4.16006 11.8485 3.47648 11.0155 3.07281 10.041C2.66914 9.06643 2.56352 7.99408 2.76931 6.95951C2.9751 5.92495 3.48305 4.97464 4.22893 4.22876C4.97481 3.48288 5.92512 2.97493 6.95968 2.76914C7.99425 2.56335 9.0666 2.66897 10.0411 3.07264C11.0157 3.47631 11.8486 4.15989 12.4347 5.03695C13.0207 5.91402 13.3335 6.94516 13.3335 8C13.3319 9.41399 12.7695 10.7696 11.7696 11.7694C10.7698 12.7693 9.41416 13.3317 8.00017 13.3333ZM8.00017 7.66666C7.82335 7.66666 7.65379 7.7369 7.52876 7.86192C7.40374 7.98695 7.3335 8.15652 7.3335 8.33333V10.3333C7.3335 10.5101 7.40374 10.6797 7.52876 10.8047C7.65379 10.9298 7.82335 11 8.00017 11C8.17698 11 8.34655 10.9298 8.47157 10.8047C8.59659 10.6797 8.66683 10.5101 8.66683 10.3333V8.33333C8.66683 8.15652 8.59659 7.98695 8.47157 7.86192C8.34655 7.7369 8.17698 7.66666 8.00017 7.66666ZM8.00017 4.99999C7.83535 4.99999 7.67423 5.04887 7.53719 5.14044C7.40015 5.232 7.29334 5.36215 7.23027 5.51443C7.16719 5.6667 7.15069 5.83425 7.18284 5.9959C7.215 6.15755 7.29437 6.30604 7.41091 6.42258C7.52745 6.53913 7.67594 6.61849 7.83759 6.65065C7.99924 6.6828 8.1668 6.6663 8.31907 6.60323C8.47134 6.54015 8.60149 6.43334 8.69306 6.2963C8.78462 6.15926 8.8335 5.99815 8.8335 5.83333C8.8335 5.61231 8.7457 5.40035 8.58942 5.24407C8.43314 5.08779 8.22118 4.99999 8.00017 4.99999Z"
        fill={fillColor || "currenColor"}
      />
    </MuiSvgIcon>
  );
};

export default MaxFileUploadAlert;
