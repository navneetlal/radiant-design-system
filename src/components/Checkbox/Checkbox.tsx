import { Box, Checkbox as MuiCheckbox } from "@mui/material";
import { Typography as MuiTypography } from "@mui/material";
import { useTheme } from "@mui/material";
import React from "react";
import CheckIcon from "../../icons/CheckedIcon/CheckedIcon";
import UnCheckedIcon from "../../icons/UncheckedIcon/UncheckedIcon";

// import CheckIcon from '../icons/CheckIcon';
// import UnCheckedIcon from '../icons/UnCheckedIcon';

export interface ICheckboxProps {
  checked?: boolean;
  onChange?: any;
  required?: boolean;
  size?: "small" | "medium";
  label?: string;
  reverse?: boolean;
  alert?: boolean;
  disabled?: boolean;
  [key: string]: any;
}
const Checkbox = ({
  checked,
  onChange,
  required,
  size = "medium",
  label,
  reverse = false,
  disabled = false,
  alert,
  ...otherProps
}: ICheckboxProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={[
        {
          display: "flex",
          color: disabled
            ? theme.palette.grey[100]
            : theme.palette.common.black,

          alignItems: "center",

          flexDirection: reverse ? "row-reverse" : "row",
          width: "max-content",
          fontFamily: "'Source Sans Pro', sans-serif",
          "& svg": {
            width: size === "small" ? 16 : 20,
            height: size === "small" ? 16 : 20,
          },
          "&>span": {
            padding: 0,
            paddingRight: size === "small" ? 0 : 4,
          },
        },
      ]}
    >
      <MuiCheckbox
        checkedIcon={<CheckIcon disabled={disabled} />}
        icon={<UnCheckedIcon alert={alert} disabled={disabled} />}
        size={size}
        checked={checked}
        onChange={onChange}
        required={required}
        disabled={disabled}
        disableRipple
        color="primary"
        {...otherProps}
        sx={[]}
      />
      {label ? (
        <MuiTypography
          variant={size === "small" ? "body2" : "body1"}
          sx={[
            disabled && {
              cursor: "not-allowed",
            },

            size === "medium" && {
              marginLeft: "-30px",
            },
          ]}
        >
          {label}
        </MuiTypography>
      ) : (
        ""
      )}
    </Box>
  );
};

export default Checkbox;
