import React, { useMemo } from "react";
import MuiBox from "@mui/material/Box";
import MuiInputBase from "@mui/material/InputBase";
import MuiInputLable from "@mui/material/InputLabel";

import { useTheme } from "@mui/material/styles";

import type { InputBaseProps } from "@mui/material/InputBase";
import { mergeDeep } from "../../utils/deepMerge";
export interface IInputProps extends InputBaseProps {
  /**
   * Input Label
   */
  //customSx: SystemStyleObject;
  label?: string;
  disabled?: boolean;
  size?: "small" | "medium";
  /**
   * Custom width for the component
   */
  width?: number;
  [key: string]: any;
}
const styles = {
  medium: {
    height: "38px",
  },
  small: {
    height: "30px",
  },
};
const Input = ({
  sx,
  label,
  size = "medium",
  width = 312,
  required = false,
  disabled = false,
  ...otherProps
}: IInputProps) => {
  
  const theme = useTheme();

  const finalSx = useMemo(() => {
    const originalSx = {
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
    };

    return mergeDeep(originalSx, sx);
  }, [sx, theme, size, width, disabled]);
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

      <MuiInputBase disabled={disabled} sx={finalSx} {...otherProps} />
    </MuiBox>
  );
};

export default Input;
