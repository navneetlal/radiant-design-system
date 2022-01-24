import { Box, Radio as MuiRadio } from "@mui/material";
import { useTheme } from "@mui/material";
import React from "react";

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
          alignItems : 'center',
          flexDirection: reverse ? "row-reverse" : "row",
          width: "max-content",
          height:  'auto',
          "&>p": {
            color: disabled ? theme.palette.grey[100] : "#1A1A1A",
          },
          "&>span:hover": {
            backgroundColor: `transparent !important`,
          },
        },
        size === "small" && {
          "& svg": {
            fontSize: '12px',
          },
          "&>p": {
            ...theme.typography.body2,
            
          },
          "&>span": {
            width: '16px',
            boxSizing: "border-box",
            padding: 0,
          },
        },
        size === "medium" && {
          "& svg": {
            fontSize: '16px',
          },
          "&>p": {
            ...theme.typography.body1,
            
          },
          "&>span": {
            width: '24px',
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
            //height : size === 'small' ? '12px' : '16px',
            
            
          },
          !checked && {
            color: `#C7C7C7 !important`,
          },
          alert && !checked && !disabled && {
            color: `${theme.palette?.support?.error?.main} !important`,
          },
          
          {
            "&&:hover": {
              //@ts-ignore
              color: `${
                theme.palette["primary"].main
              } !important`,
            },
          },
          disabled && {
            color: theme.palette.grey[100],
          },
          !disabled &&
            alert &&  {
              color: theme.palette?.support?.error?.main,
            },
          !disabled &&
            !alert && {
              color: theme.palette.primary.main,
            },
        ]}
      />
      {label ? <p>{label}</p> : ""}
    </Box>
  );
};

export default Radio;
