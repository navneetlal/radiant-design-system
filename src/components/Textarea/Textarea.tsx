
import React from "react";
import MuiInputLabel from "@mui/material/InputLabel";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";



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
  return (
    <Box sx={{ flexWrap: "flex" }}>
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
      <InputBase
        multiline
        rows={3}
        sx={{
          resize: "none",
          color: theme.palette.text.primary,
          borderRadius: "4px",
          position: "relative",
          ...theme.typography.body2,
          border: `1px solid ${theme.palette.grey[350]}`,
          backgroundColor: disabled ? "#F2F2F2" : theme.palette.common.white,
          width: width || "408px",
          borderColor: alert
            ? theme.palette?.support?.error?.main
            : theme.palette.grey[350],
          alignSelf: "flex-end",
          padding: "8px 12px",
          "&:focus": {
            borderColor: theme.palette.primary.main,
            outline: "none",
          },
        }}
        placeholder={placeholder}
        value={value}
        id={id}
        required={required}
        disabled={disabled}
        onClick={onClick}
        {...otherProps}
      />
    </Box>
  );
};

export default TextArea;
