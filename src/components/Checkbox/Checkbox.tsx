import React, { useMemo } from "react";
import MuiBox from "@mui/material/Box";
import MuiCheckbox from "@mui/material/Checkbox";
import MuiTypography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";

import type { CheckboxProps } from "@mui/material/Checkbox";
import { mergeDeep } from "../../utils/deepMerge";
import CheckedIcon from "../../icons/CheckedIcon/CheckedIcon";
import UnCheckedIcon from "../../icons/UncheckedIcon/UncheckedIcon";

export interface ICheckboxProps extends CheckboxProps {
  size?: "small" | "medium";
  label?: string;
  /**
   * Border Color of the component becomes Red
   */
  alert?: boolean;
  disabled?: boolean;
  [key: string]: any;
}
const Checkbox = ({
  size = "medium",
  sx,
  label,
  disabled = false,
  alert,
  ...otherProps
}: ICheckboxProps) => {
  const theme = useTheme();

  const finalSx = useMemo(() => {
    const originalSx = {
      "&:hover": {
        "#unchecked": {
          "&>path": {
            stroke: theme.palette.primary.main,
            fill: theme.palette.primary[50],
          },
        },
      },
    };

    return mergeDeep(originalSx, sx);
  }, [sx, theme]);

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
        checkedIcon={<CheckedIcon disabled={disabled} />}
        icon={
          <UnCheckedIcon alert={alert} disabled={disabled} id="unchecked" />
        }
        size={size}
        disabled={disabled}
        disableRipple
        color="primary"
        {...otherProps}
        sx={finalSx}
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
