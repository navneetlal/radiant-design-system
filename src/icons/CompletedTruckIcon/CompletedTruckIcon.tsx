import React from 'react';
import MuiSvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon'

export interface ICompletedTruckIconProps extends SvgIconProps {
  fillColor?: string;
  [key: string]: any;
}

const CompletedTruckIcon = ({
  fillColor,
  ...otherProps
}: ICompletedTruckIconProps) => {
  return (
    <MuiSvgIcon
      viewBox="0 0 40 40"
      sx={{
        width: "40px",
        height: "40px",
      }}
      {...otherProps}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M13.9688 32.1684H15.7917C16.0736 32.1684 16.3021 31.94 16.3021 31.658C16.3021 31.3763 16.0736 31.1476 15.7917 31.1476H13.9688C13.4455 31.147 13.0214 30.7232 13.0208 30.1997V25.9753V21.7509V17.5265V13.3021C13.0214 12.7789 13.4455 12.3547 13.9688 12.3542H25.8892C26.4124 12.3547 26.8363 12.7789 26.8371 13.3021V31.1476H20.8958C20.6139 31.1476 20.3854 31.3763 20.3854 31.658C20.3854 31.94 20.6139 32.1684 20.8958 32.1684H31.1042C31.3861 32.1684 31.6146 31.94 31.6146 31.658C31.6146 31.3763 31.3861 31.1476 31.1042 31.1476H27.858V24.1792H38.9792V30.1997C38.9786 30.7232 38.5545 31.147 38.0312 31.1476H36.2083C35.9263 31.1476 35.6979 31.3763 35.6979 31.658C35.6979 31.94 35.9263 32.1684 36.2083 32.1684H38.0312C39.1182 32.1673 39.9989 31.2866 40 30.1997V23.6688C40 23.6645 39.9994 23.6602 39.9994 23.656C39.9994 23.6469 39.9986 23.6375 39.998 23.6283C39.9974 23.6207 39.9966 23.6127 39.9954 23.605C39.9946 23.597 39.9932 23.5879 39.9917 23.5794C39.9903 23.5708 39.9886 23.5631 39.9869 23.5551C39.9852 23.5472 39.9829 23.5389 39.9806 23.5309C39.9784 23.523 39.9761 23.515 39.9732 23.507C39.9707 23.499 39.9678 23.4913 39.9647 23.4837C39.9618 23.476 39.9587 23.4683 39.9553 23.4606C39.9519 23.4532 39.9479 23.4455 39.9445 23.4381C39.9408 23.4307 39.9371 23.4236 39.9325 23.4164C39.9282 23.409 39.9242 23.4022 39.92 23.3954C39.9154 23.3882 39.9103 23.3805 39.9052 23.3734C39.9003 23.366 39.896 23.3606 39.8912 23.3546C39.8855 23.3472 39.8795 23.3398 39.8735 23.3333C39.8707 23.3298 39.8681 23.3267 39.8653 23.3236L36.1092 19.2308C35.7358 18.8252 35.21 18.594 34.6586 18.5934H27.858V13.3021C27.8565 12.2152 26.9758 11.3348 25.8892 11.3333H13.9688C12.8818 11.3345 12.0011 12.2152 12 13.3021V17.5265V21.7509V25.9753V30.1997C12.0011 31.2866 12.8818 32.1673 13.9688 32.1684ZM27.858 19.6145H34.6586C34.924 19.6148 35.1772 19.7262 35.357 19.9216L38.3283 23.1589H27.8574L27.858 19.6145Z"
          fill={fillColor ? fillColor : "currentColor"}
        />
        <path
          d="M18.3438 34.7205C16.6524 34.7205 15.2812 33.3496 15.2812 31.658C15.2812 29.9667 16.6524 28.5955 18.3438 28.5955C20.0351 28.5955 21.4062 29.9667 21.4062 31.658C21.4043 33.3487 20.0342 34.7188 18.3438 34.7205ZM18.3438 29.6163C17.2161 29.6163 16.3021 30.5306 16.3021 31.658C16.3021 32.7856 17.2161 33.6997 18.3438 33.6997C19.4714 33.6997 20.3854 32.7856 20.3854 31.658C20.3843 30.5309 19.4708 29.6177 18.3438 29.6163Z"
          fill={fillColor ? fillColor : "currentColor"}
        />
        <path
          d="M33.6562 34.7205C31.9649 34.7205 30.5938 33.3496 30.5938 31.658C30.5938 29.9667 31.9649 28.5955 33.6562 28.5955C35.3476 28.5955 36.7188 29.9667 36.7188 31.658C36.7168 33.3487 35.3467 34.7188 33.6562 34.7205ZM33.6562 29.6163C32.5286 29.6163 31.6146 30.5306 31.6146 31.658C31.6146 32.7856 32.5286 33.6997 33.6562 33.6997C34.7839 33.6997 35.6979 32.7856 35.6979 31.658C35.6968 30.5309 34.7833 29.6177 33.6562 29.6163Z"
          fill={fillColor ? fillColor : "currentColor"}
        />
      </g>
      <circle cx="10" cy="12" r="8" fill={fillColor ? fillColor : "currentColor"} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99703 13.4363L6.51585 11.6271C6.35964 11.5132 6.10637 11.5132 5.95016 11.6271C5.79396 11.741 5.79396 11.9257 5.95016 12.0396L8.75016 14.0812C8.91973 14.2049 9.19937 14.1927 9.34753 14.0552L13.7475 9.97188C13.884 9.84521 13.8538 9.66186 13.6801 9.56234C13.5064 9.46282 13.255 9.48482 13.1185 9.61148L8.99703 13.4363Z"
        fill={fillColor ? "#fff" : "blue"}
      />
      <defs>
        <clipPath id="clip0">
          <rect
            width="28"
            height="28"
            fill="white"
            transform="translate(12 9)"
          />
        </clipPath>
      </defs>
    </MuiSvgIcon>
  );
};

export default CompletedTruckIcon;