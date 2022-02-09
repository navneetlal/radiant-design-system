import React from "react";

import MuiBox from "@mui/material/Box";
import MuiCheckbox from "@mui/material/Checkbox";
import MuiTypography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";

import type { CheckboxProps } from "@mui/material/Checkbox";

import CheckIcon from "../../icons/CheckedIcon/CheckedIcon";
import UnCheckedIcon from "../../icons/UncheckedIcon/UncheckedIcon";

export interface ICheckboxProps extends CheckboxProps {
  size?: "small" | "medium";
  label?: string;
  alert?: boolean;
  disabled?: boolean;
  [key: string]: any;
}
const Checkbox = ({
  size = "medium",
  label,
  disabled = false,
  alert,
  ...otherProps
}: ICheckboxProps) => {
  const theme = useTheme();
  return (
    <MuiBox
      sx={[
        {
          display: "flex",
          color: disabled
            ? theme.palette.grey[100]
            : theme.palette.common.black,
          alignItems: "center",
          flexDirection: "row",
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
        checkedIcon={<CheckIcon disabled={disabled}/>}
        icon={<UnCheckedIcon alert={alert} disabled={disabled} />}
        size={size}
        disabled={disabled}
        disableRipple
        color="primary"
        {...otherProps}
        sx={{
          "&:hover": {
            "& svg": {
              "&>path": {
                stroke: !otherProps.checked ? theme.palette.primary.main : '',
                fill: !otherProps.checked ? theme.palette.primary[50] : '',
              },
            },
          },
        }}
      />
      {!!label && (
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
      )}
    </MuiBox>
  );
};

export default Checkbox;
