import React from "react";
import {
  InputBase as MuiInputBase,
  InputLabel as MuiInputLabel,
} from "@mui/material";
import { useTheme } from "@mui/material";
import Button from "../Button/Button";
import { Box } from "@mui/system";

export interface IBootstrapInputProps {
  alert?: boolean;
  size: "small" | "medium";
  width?: number | string;
  disabled?: boolean;
  placeholder?: string;
  [key: string]: any;
}

const BootstrapInput = ({
  alert = false,
  width = 192,
  size = "small",
  classes,
  disabled = false,
  pattern,
  ...otherProps
}: IBootstrapInputProps) => {
  const theme = useTheme();
  return (
    <MuiInputBase
      size={size}
      sx={[
        size === "small"
          ? {
              "& .MuiInputBase-input": {
                ...theme.typography.body2,
              },
            }
          : {
              "& .MuiInputBase-input": {
                ...theme.typography.body1,
              },
            },
        {
          "& .MuiInputBase-root": {
            "label + &": {
              marginTop: theme.spacing(1),
            },
          },

          "& .MuiInputBase-input": {
            borderRadius: "4px",
            position: "relative",

            border: `1px solid ${theme.palette.secondary.main}`,
            backgroundColor: disabled
              ? theme.palette.secondary.light
              : `#ffffff`,
            width: width ? width : "192px",
            cursor: disabled ? "not-allowed" : "pointer",
            borderColor: alert
              ? theme.palette.error.main
              : theme.palette.secondary.main,
            alignSelf: "flex-end",
            height: size === "small" ? "32px" : "40px",
            padding: "8px 12px",
            color: `#1A1A1A !important`,
            "&:focus": {
              borderColor: theme.palette.primary.main,
            },
            "&:not(:placeholder-shown):invalid": {
              borderColor: theme.palette.error.main,
            },

            boxSizing: "border-box",
          },
        },
      ]}
      disabled={disabled}
      style={{
        width: "100%",
      }}
      //inputProps={{ className: size === 'medium' ? classe.medium : '', pattern }}
      {...otherProps}
    />
  );
};

export interface ITextboxProps {
  label?: string;
  placeholder?: string;
  width?: number | string;
  size: "small" | "medium";
  alert?: boolean;
  value?: string;
  id?: string;
  onClick?: any;
  required?: boolean;
  disabled?: boolean;
  children?: React.ReactElement;
  action?: any;
  [key: string]: any;
}

const Textbox = ({
  label,
  size = "small",
  placeholder,
  width,
  alert,
  value,
  id,
  onClick,
  required,
  disabled,
  action,
  pattern,
  ...otherProps
}: ITextboxProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={[
        {
          flexWrap: "wrap",
          position: "relative",
          // width: 'max-content',
          width: "100%",
        },
      ]}
    >
      <MuiInputLabel
        sx={[
          {
            "& .MuiInputLabel-root": {
              color: "1A1A1A",
              "&>span": {
                color: theme.palette.error.main,
              },
            },
          },
          size === "small" && {
            ...theme.typography.h6,
          },
          size === "medium" && {
            ...theme.typography.h5,
          },
        ]}
        htmlFor={id}
      >
        {label} <span>{required ? "*" : ""}</span>
      </MuiInputLabel>

      <BootstrapInput
        size={size}
        placeholder={placeholder}
        width={width}
        required={required}
        alert={alert}
        id={id}
        value={value}
        onClick={onClick}
        disabled={disabled}
        pattern={pattern}
        {...otherProps}
      />

      {action && (
        <Button
          variant="text"
          size="small"
          color="primary"
          disabled={disabled}
          {...action}

          inputSize = {size}

        />
      )}
    </Box>
  );
};
export default Textbox;
