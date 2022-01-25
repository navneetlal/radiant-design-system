import {
  Switch as MuiSwitch,
  Typography as MuiTypography,
} from "@mui/material";

import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

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

export interface ISwitchProps {
  checked?: any;
  onChange?: any;
  label?: string;
  name?: string;
  size?: "small" | "medium";
  disabled?: any;
  colored?: boolean;
  required?: boolean;
  [key: string]: any;
}

const Switch = ({
  checked,
  onChange,
  label,
  name,
  size = "medium",
  disabled,
  colored,
  required,
  ...otherProps
}: ISwitchProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={[
        {
          display: "flex",
          "&>p": {
            marginRight: "4px",
          },
        },
      ]}
    >
      {label ? (
        <MuiTypography variant={size === "small" ? "body2" : "body1"}>
          {label}
        </MuiTypography>
      ) : (
        ""
      )}

      <MuiSwitch
        checked={checked}
        onClick={onChange}
        focusVisibleClassName=".Mui-focusVisible"
        disableRipple
        name={name}
        size={size}
        disabled={disabled}
        sx={[
          {
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
                opacity: 0.7,
                backgroundColor: colored
                  ? theme.palette?.support?.success?.light
                  : theme.palette?.support?.error?.light,
              },

              "&.Mui-checked": {
                transform: `translateX(${styles[size].switchBase.transform}px)`,
                color: "#fff",

                "& + .MuiSwitch-track": {
                  opacity: 1,
                  border: 0,
                  backgroundColor: `${
                    colored
                      ? theme.palette?.support?.success?.main
                      : theme.palette?.support?.error?.main
                  }`,
                },
              },
              "&.Mui-disabled .MuiSwitch-thumb": {
                color: "#ffffff",
              },
            },
            "& .MuiSwitch-thumb": {
              boxSizing: "border-box",
              width: `${styles[size].thumb.width}px`,
              height: `${styles[size].thumb.height}px`,

              boxShadow: "none",
            },

            "& .MuiSwitch-track": {
              opacity: 1,
            },
          },
        ]}
        {...otherProps}
      />
    </Box>
  );
};

export default Switch;
