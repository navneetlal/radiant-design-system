import React from "react";
import { useMemo } from "react";
import MuiSwitch from "@mui/material/Switch";
import MuiTypography from "@mui/material/Typography";
import MuiBox from "@mui/material/Box";
import { mergeDeep } from "../../utils/deepMerge";
import { useTheme } from "@mui/material/styles";
import type { SwitchProps } from "@mui/material/Switch";

const styles = {
  small: {
    root: {
      width: 28,
      height: 16,
    },
    switchBase: {
      transform: 12,
    },
    thumb: {
      width: 12,
      height: 12,
    },
  },
  medium: {
    root: {
      width: 36,
      height: 20,
    },
    switchBase: {
      transform: 16,
    },
    thumb: {
      width: 16,
      height: 16,
    },
  },
} as const;

export interface ISwitchProps extends SwitchProps {
  label?: string;
  disabled?: any;
  colored?: boolean;
  [key: string]: any;
}

const Switch = ({
  checked,
  label,
  sx,
  size = "medium",
  disabled,
  colored,
  ...otherProps
}: ISwitchProps) => {
  const theme = useTheme();

  const originalSx = {
    width: `${styles[size].root.width}px`,
    height: `${styles[size].root.height}px`,
    padding: 0,
    borderRadius: "5000px",
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: "1.5px",
      transitionDuration: "300ms",
      "& + .MuiSwitch-track": {
        backgroundColor: `${
          colored
            ? theme.palette?.support?.success?.main
            : theme.palette?.support?.error?.main
        }`,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette[colored ? "success" : "error"].light,
      },

      "&.Mui-checked": {
        transform: `translateX(${styles[size].switchBase.transform}px)`,
        color: "#fff",

        "& + .MuiSwitch-track": {
          opacity: 1,
          border: 0,
          backgroundColor: `${
            colored
              ? theme.palette?.support?.success?.[disabled ? "light" : "main"]
              : theme.palette?.support?.error?.[disabled ? "light" : "main"]
          }`,
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: `${styles[size].thumb.width}px`,
      height: `${styles[size].thumb.height}px`,
      color: "#ffffff",

      boxShadow: "none",
    },

    "& .MuiSwitch-track": {
      opacity: 1,
    },
  };
  const finalSx = useMemo(() => mergeDeep(originalSx, sx), [originalSx, sx]);

  return (
    <MuiBox
      sx={[
        {
          display: "flex",
          "&>p": {
            marginRight: "4px",
          },
        },
      ]}
    >
      {label && (
        <MuiTypography
          variant={size === "small" ? "body2" : "body1"}
          sx={[
            disabled && {
              color: theme.palette.grey[100],
            },
          ]}
        >
          {label}
        </MuiTypography>
      )}

      <MuiSwitch
        focusVisibleClassName=".Mui-focusVisible"
        disableRipple
        size={size}
        checked={checked}
        disabled={disabled}
        sx={finalSx}
        {...otherProps}
      />
    </MuiBox>
  );
};

export default Switch;
