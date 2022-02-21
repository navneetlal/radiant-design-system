import React from "react";
import {
  SvgIconProps as MuiSvgIconProps,
  SvgIcon as MuiSvgIcon,
} from "@mui/material";

const SourceIcon = ({ ...props }: MuiSvgIconProps) => {
  return (
    <MuiSvgIcon style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24" {...props}>
      <rect
        x="1.89453"
        y="2.52637"
        width="20.2105"
        height="19.1741"
        fill="url(#pattern0)"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0" transform="scale(0.025641 0.027027)" />
        </pattern>
        <image
          id="image0"
          width="39"
          height="37"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAlCAYAAADBa/A+AAAC7UlEQVRYCe2YTUhUURTHz5kZZ14pYdIEaYaGtRFKxCyEYmgRxGwmSB1XFRFYGzOiltraUNu5nFYjDYFQBNEiK3ChfZgtgghSo8SQGrWpGWfmnXgz3Js+3/V9zJ1y4d2ce889539+3PfemfcGQcKgcLhGBehBgPMEEHEB3MLh4elCpbEQAQqFykFRugigV6+Dmi+ZvIMjI3H9ntW1IzgORXQVEMuFxYjiiDjoFNI2HHV0nCNVHdwQaj3tNCL2YjR6d/2W2GMZLgdFpF2+GrGc6Y4tSFM4CocDBNADAAHT0tYDRjH/0IxulCKEo9bWBnK7ByRD6VlGMZvtxlhsUr+hrdfBrW4LRgnF8InaD4fTnkBVUQa0XlUMACuaOchkspu1H2RtQQW8hkA7rIgUM4YAl1xA/bn2o7a3vwHEhmIWdKRNNOkyuu8ciclPQg+mUgFQlIZoaXXo5Ze5Lvk17Ckeq6rsb03MPoBUapI/EDf77gWzmfRDe1Lyo9HtC/bdOPtIU/Yw+bJd/oQLiS3/m1UJf7HiHI45mH3y+D6bFtXurPBD05EThjWEcMuLy4YJsp0+X5lQUghX4i0RJsnc8HjcQjkhnLJNESbJ3PD6vEI5rc9t2iE8OTPiA/55aKye4WGd18f5fOh2M5+/mq2Bjwu7+drOpCC4tsYJw1qr/fHf2x3DSbus2Z9vIT5WC5qVNRyfnB5gcTz/7rD0Wt4Ls7STY7CUcfwlyCS4lQ7HlSVMtuCcHqLpA3Go6jM07fv7t8fho5eBiKAs/Q1gxbxs28lKOH2qPhc4NT7EEyZmauHd1718bTQxhTvon4dg/RTPrWjuzM/pInx/GuP+oRcBGPtUB8frPsCllufcv78lAoD5n6jqxBXu/5EoNYVzdM9l4s94QVYtlfFAYsUHml0z0Au5+DVOawudknnS8tQZSC+MgG+PtS/IxPsLkJqLWI5fTWD75DQwbWgFrQwWx6yVHBZjG44l/gu7Bef0lDf1yf0BkzbmCmEGsIAAAAAASUVORK5CYII="
        />
      </defs>
    </MuiSvgIcon>
  );
};

export default SourceIcon;