import React, { useMemo } from "react";
import MuiChip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";
import type { ChipProps } from "@mui/material/Chip";
import { mergeDeep } from "../../utils/deepMerge";
import ChipIcon from "../../icons/ChipIcon/ChipIcon";

export interface IChipsProps extends ChipProps {
  /**
   * Selected Chip Styles would be applied if true
   */
  selected?: boolean;
  fromMultiSelect?: boolean;
  fromSelectChip?: boolean;
  [key: string]: any;
}

const Chip = ({
  selected,
  sx,
  fromMultiSelect = false,
  disabled = false,
  fromSelectChip = false,
  ...otherProps
}: IChipsProps) => {
  const theme = useTheme();

  const finalSx = useMemo(() => {
    const originalSx = {
      backgroundColor: selected
        ? theme.palette.primary.main
        : theme.palette.grey[300],
      color: selected ? "#ffffff" : theme.palette.common.black,
      ...(fromMultiSelect && {
        marginRight: "4px",
      }),
      "&:focus": {
        backgroundColor: selected
          ? theme.palette.primary.main
          : theme.palette.grey[300],
      },
      "&:hover": {
        backgroundColor: selected
          ? theme.palette.primary.main
          : theme.palette.primary[100],
        color: selected ? "#ffffff" : theme.palette.common.black,
        "& path": {
          fill: selected ? "#ffffff" : theme.palette.common.black,
        },
      },
      ...(disabled && {
        backgroundColor: `${theme.palette.grey[300]} !important`,
        opacity: `1 !important`,
        color: theme.palette.grey[100],
      }),
      ...(fromSelectChip && {
        marginRight: "4px",
        marginBottom: "4px",
        marginTop: "4px",
      }),
    };
    return mergeDeep(originalSx, sx);
  }, [sx, disabled, selected, fromSelectChip, fromMultiSelect, theme]);

  return (
    <MuiChip
      deleteIcon={
        <ChipIcon
          style={{ marginRight: "12px", fontSize: "8px", cursor: "pointer" }}
          fillColor={
            selected && !disabled
              ? "#ffffff"
              : disabled
              ? theme.palette.grey[100]
              : theme.palette.common.black
          }
        />
      }
      disabled={disabled}
      sx={finalSx}
      {...otherProps}
    />
  );
};

export default Chip;
