import React, { useMemo } from "react";
import MuiInputLabel from "@mui/material/InputLabel";
import MuiInputBase from "@mui/material/InputBase";
import MuiBox from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import { mergeDeep } from "../../utils/deepMerge";

export interface ITextAreaProps {
  label?: string;
  placeholder?: string;
  width?: number | string;
  alert?: boolean;
  value?: string;
  id?: string;
  onClick?: any;
  required?: boolean;
  disabled?: boolean;
  [key: string]: any;
}

const TextArea = ({
  sx,
  label,
  placeholder,
  width = 312,
  alert,
  value,
  id,
  onClick,
  required,
  disabled,
  ...otherProps
}: ITextAreaProps) => {
  const theme = useTheme();

  const finalSx = useMemo(() => {
    const originalSx = {
      "& .MuiInputBase-input": {
        resize: "none",
        color: theme.palette.text.primary,
        borderRadius: "4px",
        position: "relative",
        ...theme.typography.body2,
        border: `1px solid ${theme.palette.grey[350]}`,
        backgroundColor: disabled ? "#F2F2F2" : theme.palette.common.white,
        width: width,
        boxSizing: "border-box",
        borderColor: disabled
          ? theme.palette.grey[100]
          : alert
          ? theme.palette.error.main
          : "",
        alignSelf: "flex-end",
        padding: "8px 12px",
        "&:focus": {
          borderColor: theme.palette.primary.main,
        },
      },
    };

    return mergeDeep(originalSx, sx);
  }, [sx, width, alert, disabled, theme]);

  return (
    <MuiBox sx={{ flexWrap: "flex" }}>
      {(label || required) && (
        <MuiInputLabel
          sx={{
            ...theme.typography.h6,
            marginBottom: "4px",
            color: disabled ? "#A1A1A1" : theme.palette.common.black,
            "&>span": {
              color: theme.palette?.support?.error?.main,
            },
          }}
          htmlFor={id}
        >
          {label} <span>{required ? "*" : ""}</span>
        </MuiInputLabel>
      )}
      <MuiInputBase
        multiline
        rows={3}
        sx={finalSx}
        placeholder={placeholder}
        value={value}
        id={id}
        required={required}
        disabled={disabled}
        onClick={onClick}
        {...otherProps}
      />
    </MuiBox>
  );
};

export default TextArea;
