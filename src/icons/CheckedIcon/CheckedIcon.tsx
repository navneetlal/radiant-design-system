import React from 'react';
import MuiSvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon'

export interface ICheckIconProps extends SvgIconProps {
  disabled?: boolean
}

const CheckIcon = ({ disabled = false, ...props }: ICheckIconProps) => {
  return (
    <MuiSvgIcon {...props} viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6C0 3.79086 1.79086 2 4 2H12C14.2091 2 16 3.79086 16 6V14C16 16.2091 14.2091 18 12 18H4C1.79086 18 0 16.2091 0 14V6Z"
        fill={disabled === true ? "#A1A1A1" : "#2C63E5"}
        stroke={disabled === true ? "#A1A1A1" : "#2C63E5"}
        strokeWidth="1px"
        transform="translate(1 0)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.00025 14.0006C6.73625 14.0006 6.48125 13.8966 6.29325 13.7076L4.29325 11.7076C3.90225 11.3166 3.90225 10.6846 4.29325 10.2936C4.68425 9.90257 5.31625 9.90257 5.70725 10.2936L6.84525 11.4316L10.1683 6.44557C10.4742 5.98557 11.0943 5.86157 11.5553 6.16857C12.0142 6.47557 12.1383 7.09557 11.8323 7.55557L7.83225 13.5556C7.66625 13.8046 7.39625 13.9666 7.09925 13.9956C7.06525 13.9986 7.03325 14.0006 7.00025 14.0006Z"
        fill="white"
        transform="translate(1 0)"
      />
    </MuiSvgIcon>
  );
};

export default CheckIcon;
