import React from 'react';
import {
    SvgIconProps as MuiSvgIconProps,
    SvgIcon as MuiSvgIcon,
  } from "@mui/material";


export interface ICollapseIconProps extends MuiSvgIconProps {
  fillColor?: string;
  [key: string]: any;
}
const CollapseIcon = ({ fillColor, ...otherProps }: ICollapseIconProps) => {
  return (
    <MuiSvgIcon style = {{width : '16px' , height : '16px'}} viewBox="0 0 16 16" {...otherProps}>
      <path
        d="M9.08037 8.72002C9.16051 8.68586 9.24658 8.66774 9.3337 8.66669H12.0004C12.1772 8.66669 12.3467 8.73693 12.4718 8.86195C12.5968 8.98698 12.667 9.15654 12.667 9.33335C12.667 9.51017 12.5968 9.67974 12.4718 9.80476C12.3467 9.92978 12.1772 10 12.0004 10L10.9404 10L14.4737 13.5267C14.5362 13.5887 14.5858 13.6624 14.6196 13.7436C14.6535 13.8249 14.6709 13.912 14.6709 14C14.6709 14.088 14.6535 14.1752 14.6196 14.2564C14.5858 14.3376 14.5362 14.4114 14.4737 14.4734C14.4117 14.5358 14.338 14.5854 14.2568 14.6193C14.1755 14.6531 14.0884 14.6706 14.0004 14.6706C13.9124 14.6706 13.8252 14.6531 13.744 14.6193C13.6627 14.5854 13.589 14.5358 13.527 14.4734L10.0004 10.94V12C10.0004 12.1768 9.93013 12.3464 9.8051 12.4714C9.68008 12.5965 9.51051 12.6667 9.3337 12.6667C9.15689 12.6667 8.98732 12.5965 8.8623 12.4714C8.73727 12.3464 8.66703 12.1768 8.66703 12L8.66703 9.33335C8.66809 9.24624 8.68621 9.16017 8.72037 9.08002C8.78802 8.91712 8.91747 8.78767 9.08037 8.72002ZM9.3337 3.33336C9.51051 3.33336 9.68008 3.40359 9.8051 3.52862C9.93013 3.65364 10.0004 3.82321 10.0004 4.00002V5.06002L13.527 1.52669C13.5892 1.46453 13.663 1.41522 13.7442 1.38158C13.8254 1.34794 13.9125 1.33063 14.0004 1.33063C14.0883 1.33063 14.1753 1.34794 14.2565 1.38158C14.3377 1.41522 14.4115 1.46453 14.4737 1.52669C14.5992 1.65222 14.6698 1.82249 14.6698 2.00002C14.6698 2.17756 14.5992 2.34782 14.4737 2.47336L10.9404 6.00002H12.0004C12.1772 6.00002 12.3467 6.07026 12.4718 6.19528C12.5968 6.32031 12.667 6.48988 12.667 6.66669C12.667 6.8435 12.5968 7.01307 12.4718 7.13809C12.3467 7.26312 12.1772 7.33335 12.0004 7.33335H9.3337C9.24658 7.3323 9.16051 7.31418 9.08037 7.28002C8.91747 7.21237 8.78802 7.08292 8.72037 6.92002C8.68621 6.83987 8.66809 6.75381 8.66703 6.66669V4.00002C8.66703 3.82321 8.73727 3.65364 8.8623 3.52862C8.98732 3.40359 9.15689 3.33336 9.3337 3.33336ZM6.92037 7.28002C6.84022 7.31418 6.75415 7.3323 6.66703 7.33335L4.00037 7.33335C3.82355 7.33335 3.65399 7.26312 3.52896 7.13809C3.40394 7.01307 3.3337 6.8435 3.3337 6.66669C3.3337 6.48988 3.40394 6.32031 3.52896 6.19528C3.65399 6.07026 3.82355 6.00002 4.00037 6.00002H5.06037L1.52703 2.47336C1.4015 2.34782 1.33097 2.17756 1.33097 2.00002C1.33097 1.82249 1.4015 1.65222 1.52703 1.52669C1.65257 1.40115 1.82283 1.33063 2.00037 1.33063C2.1779 1.33063 2.34816 1.40115 2.4737 1.52669L6.00037 5.06002L6.00037 4.00002C6.00037 3.82321 6.0706 3.65364 6.19563 3.52862C6.32065 3.40359 6.49022 3.33336 6.66703 3.33336C6.84384 3.33336 7.01341 3.40359 7.13844 3.52862C7.26346 3.65364 7.3337 3.82321 7.3337 4.00002V6.66669C7.33265 6.75381 7.31453 6.83987 7.28037 6.92002C7.21272 7.08292 7.08327 7.21237 6.92037 7.28002ZM5.06037 10H4.00037C3.82355 10 3.65399 9.92978 3.52896 9.80476C3.40394 9.67974 3.3337 9.51017 3.3337 9.33335C3.3337 9.15654 3.40394 8.98698 3.52896 8.86195C3.65399 8.73693 3.82355 8.66669 4.00037 8.66669L6.66703 8.66669C6.75415 8.66774 6.84022 8.68586 6.92037 8.72002C7.08327 8.78767 7.21272 8.91712 7.28037 9.08002C7.31453 9.16017 7.33265 9.24624 7.3337 9.33335L7.3337 12C7.3337 12.1768 7.26346 12.3464 7.13844 12.4714C7.01341 12.5965 6.84384 12.6667 6.66703 12.6667C6.49022 12.6667 6.32065 12.5965 6.19563 12.4714C6.0706 12.3464 6.00037 12.1768 6.00037 12V10.94L2.4737 14.4734C2.41172 14.5358 2.33799 14.5854 2.25675 14.6193C2.17551 14.6531 2.08837 14.6706 2.00037 14.6706C1.91236 14.6706 1.82522 14.6531 1.74398 14.6193C1.66274 14.5854 1.58901 14.5358 1.52703 14.4734C1.46455 14.4114 1.41495 14.3376 1.3811 14.2564C1.34726 14.1752 1.32983 14.088 1.32983 14C1.32983 13.912 1.34726 13.8249 1.3811 13.7436C1.41495 13.6624 1.46455 13.5887 1.52703 13.5267L5.06037 10Z"
        fill={fillColor || '#fff'}
      />
    </MuiSvgIcon>
  );
};

export default CollapseIcon;
