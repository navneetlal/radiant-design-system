import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";

export interface IAllFilterIconProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}

const AllFilterIcon = ({ fillColor, ...otherProps }: IAllFilterIconProps) => {
  return (
    <MuiSvgIcon
      {...otherProps}
      sx={{ width: "40px", height: "40px" }}
      viewBox="0 0 40 40"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M38.9798 27.5794H33.5305V18.615C33.5305 18.2914 33.2682 18.0291 32.9445 18.0291C32.6209 18.0291 32.3586 18.2914 32.3586 18.615V27.5794C31.1586 27.5794 23.4599 27.5794 22.1771 27.5794V25.0404C22.1771 24.7167 21.9148 24.4544 21.5912 24.4544H15.7075C15.7075 23.734 15.7075 11.6819 15.7075 10.4865H22.3621V12.897C22.3621 13.4129 22.7818 13.8326 23.2977 13.8326H24.7684C25.2843 13.8326 25.7041 13.4129 25.7041 12.897V10.4865H32.3587V16.2724C32.3587 16.5961 32.6209 16.8583 32.9446 16.8583C33.2683 16.8583 33.5305 16.5961 33.5305 16.2724V10.3349C33.5305 9.77239 33.0729 9.31466 32.5103 9.31466C29.6342 9.31466 22.8545 9.31466 20.1779 9.31466V1.03513C20.1779 0.472627 19.7202 0.0148926 19.1577 0.0148926H8.39594C7.83336 0.0148926 7.3757 0.472549 7.3757 1.03513V4.7395C7.3757 5.06317 7.63805 5.32544 7.96164 5.32544C8.28523 5.32544 8.54758 5.06317 8.54758 4.7395V1.18677H12.1058V3.59724C12.1058 4.11317 12.5255 4.53286 13.0414 4.53286H14.5121C15.028 4.53286 15.4477 4.11317 15.4477 3.59724V1.18677H19.0059V9.31466H15.1216C14.798 9.31466 14.5357 9.57692 14.5357 9.9006V14.7834H8.54766V7.08216C8.54766 6.75849 8.28531 6.49622 7.96172 6.49622C7.63813 6.49622 7.37578 6.75849 7.37578 7.08216V14.7835H3.92563C3.36305 14.7835 2.90539 15.2411 2.90539 15.8036V24.4544H1.02016C0.457656 24.4544 0 24.9121 0 25.4747V39.3989C0 39.7225 0.262344 39.9848 0.585938 39.9848H6.79031C7.11391 39.9848 7.37625 39.7225 7.37625 39.3989C7.37625 39.0752 7.11391 38.8129 6.79031 38.8129H1.17188V25.6263H9.41758V28.0367C9.41758 28.5526 9.83734 28.9724 10.3532 28.9724H11.8238C12.3398 28.9724 12.7595 28.5526 12.7595 28.0367V25.6263H21.0052V38.8129H9.13297C8.80937 38.8129 8.54703 39.0752 8.54703 39.3989C8.54703 39.7225 8.80937 39.9848 9.13297 39.9848H39.414C39.7377 39.9848 39.9999 39.7225 39.9999 39.3989V28.5997C40 28.0372 39.5423 27.5794 38.9798 27.5794ZM14.2758 3.36091H13.2777V1.18685H14.2758V3.36091ZM24.5321 10.4865V12.6607H23.534V10.4865H24.5321ZM8.80734 15.9554H9.80555V18.1294H8.80734V15.9554ZM4.07727 15.9554H7.63547V18.3658C7.63547 18.8817 8.05523 19.3014 8.57109 19.3014H10.0418C10.5577 19.3014 10.9774 18.8817 10.9774 18.3658V15.9554H14.5356V24.4544C12.2707 24.4544 5.97031 24.4544 4.07727 24.4544V15.9554ZM11.5876 27.8004H10.5895V25.6263H11.5876V27.8004ZM31.0017 28.7513V30.9254H30.0035V28.7513H31.0017ZM38.8281 38.8129H22.1771V28.7513H28.8316V31.1617C28.8316 31.6776 29.2514 32.0974 29.7673 32.0974H31.238C31.7539 32.0974 32.1737 31.6776 32.1737 31.1617V28.7513H38.8282V38.8129H38.8281Z"
          fill={fillColor || "currentColor"}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="40" height="40" fill="blue" />
        </clipPath>
      </defs>
    </MuiSvgIcon>
  );
};

export default AllFilterIcon;