import React from "react";

import MuiBox from "@mui/material/Box";
import MuiInputBase from "@mui/material/InputBase";
import MuiInputLable from "@mui/material/InputLabel";

import { useTheme } from "@mui/material/styles";

import type { InputBaseProps } from "@mui/material/InputBase";

export interface IInputProps extends InputBaseProps {
  label?: string;
  disabled?: boolean;
  size?: "small" | "medium";
  width ?: number
  [key: string]: any;
}

const Input = ({
  label,
  size = "medium",
  width = 312,
  required = false,
  disabled = false,
  ...otherProps
}: IInputProps) => {
  const styles = {
    medium: {
      height: "38px",
    },
    small: {
      height: "30px",
    },
  };
  const theme = useTheme();
  return (
    <MuiBox>
      {(label || required) && (
        <MuiInputLable
          sx={{
            ...theme.typography.h6,
            color: disabled
              ? theme.palette.grey[100]
              : theme.palette.common.black,
          }}
        >
          {label}
          <span>{required && "*"}</span>
        </MuiInputLable>
      )}

      <MuiInputBase
        disabled={disabled}
        sx={{
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "unset",
          },
          "& .MuiInputBase-input": {
            ...(size ? styles[size] : styles["small"]),
            width: `${width - 14}px`,
            borderTop: "auto",
            outline: "none",
            border: `1px solid ${
              disabled ? theme.palette.grey[100] : theme.palette.grey[350]
            }`,
            borderRadius: "4px",
            padding: 0,
            paddingLeft: "12px",
            color: "black",
            ...theme.typography.body2,

            "&:focus": {
              outline: "none",
              border: `1px solid ${theme.palette.primary.main} !important`,
            },
          },
        }}
        {...otherProps}
      />
    </MuiBox>
  );
};

export default Input;
