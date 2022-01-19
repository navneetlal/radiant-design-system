import { Box, Radio as MuiRadio } from "@mui/material";
import { useTheme } from "@mui/material";
import React from 'react'

export interface IRadioProps {
  checked?: boolean;
  onChange?: any;
  required?: boolean;
  size: "small" | "medium";
  label?: string;
  disabled?: boolean;
  reverse?: boolean;
  alert?: boolean;
  [key: string]: any;
}

const Radio = ({
  reverse,
  checked,
  onChange,
  required,
  size = "medium",
  label,
  disabled = false,
  alert = false,
  ...otherProps
}: IRadioProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={[
        {
          display: "flex",
          flexDirection: reverse ? "row-reverse" : "row",
          width: "max-content",
          "&>p": {
            color: disabled ? theme.palette.secondary.contrastText : "#1A1A1A",
          },
          "&>span:hover": {
            backgroundColor: `transparent !important`,
          },
        },
        size === "small" && {
          "& svg": {
            fontSize: 12,
          },
          "&>p": {
            ...theme.typography.body2,
          },
          "&>span": {
            width: 16,
            boxSizing: "border-box",
            padding: 0,
          },
        },
        size === "medium" && {
          "& svg": {
            fontSize: 16,
          },
          "&>p": {
            ...theme.typography.body1,
          },
          "&>span": {
            width: 24,
            boxSizing: "border-box",
            padding: 0,
          },
        },
      ]}
    >
      <MuiRadio
        checked={checked}
        onChange={onChange}
        required={required}
        disabled={disabled}
        size={size}
        disableRipple
        disableTouchRipple
        disableFocusRipple
        color="primary"
        {...otherProps}
        sx={[
          {
            padding: `9px 9px 9px 0`,
          },
          !checked && {
            color : `#C7C7C7 !important`
          },
          {
            "&&:hover" : {

              //@ts-ignore
              color : `${theme.palette[alert ? 'error' : 'primary'].main} !important`
            }
          },
          disabled && {
            color : theme.palette.secondary.main
          },
          !disabled && alert && {
            color : theme.palette.error.main
          },
          !disabled && !alert && {
            color : theme.palette.primary.main
          }
        ]}
      />
      {label ? <p>{label}</p> : ""}
    </Box>
  );
};

export default Radio;
