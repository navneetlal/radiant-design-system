import React from "react";
import { useMemo } from "react";
import MuiBox from "@mui/material/Box";
import MuiRadio from "@mui/material/Radio";
import {mergeDeep} from '../../utils/deepMerge'
import { useTheme } from "@mui/material/styles";
import type { RadioProps } from "@mui/material/Radio";

export interface IRadioProps extends RadioProps {
  checked?: boolean;
  label?: string;
  disabled?: boolean;

  /**
   * If true border color will become red
   */
  alert?: boolean;
  [key: string]: any;
}

const Radio = ({
  sx,
  checked = false,
  size = "medium",
  label,
  disabled = false,
  alert = false,
  ...otherProps
}: IRadioProps) => {
  const theme = useTheme();

  const originalSx = {
    padding: `9px 9px 9px 0`,
    ...(!checked && {
      color: `#C7C7C7 !important`,
      ...(alert &&
        !disabled && {
          color: `${theme.palette?.support?.error?.main} !important`,
        }),
    }),

    "&&:hover": {
      color: `${theme.palette.primary.main} !important`,
    },
    ...(disabled && {
      color: `${theme.palette.grey[100]} !important`,
    }),
  };
  const finalSx = useMemo(() => mergeDeep(originalSx, sx), [originalSx, sx]);
  
  return (
    <MuiBox
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        width: "max-content",
        height: "auto",
        "&>p": {
          color: disabled ? `${theme.palette.grey[100]} !important` : "#1A1A1A",
        },
        "&>span:hover": {
          backgroundColor: `transparent !important`,
        },
        ...(size === "small" && {
          "& svg": {
            fontSize: "12px",
          },
          "&>p": {
            ...theme.typography.body2,
          },
          "&>span": {
            width: "16px",
            boxSizing: "border-box",
            padding: 0,
          },
        }),
        ...(size === "medium" && {
          "& svg": {
            fontSize: "16px",
          },
          "&>p": {
            ...theme.typography.body1,
          },
          "&>span": {
            width: "24px",
            boxSizing: "border-box",
            padding: 0,
          },
        }),
      }}
    >
      <MuiRadio
        checked={checked}
        disabled={disabled}
        size={size}
        disableRipple
        disableTouchRipple
        disableFocusRipple
        color="primary"
        {...otherProps}
        sx={finalSx}
      />
      {label && (
        <p style={{ color: disabled ? theme.palette.grey[100] : "#1A1A1A" }}>
          {label}
        </p>
      )}
    </MuiBox>
  );
};

export default Radio;
