import React from "react";

import MuiChip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";
import type { ChipProps } from "@mui/material/Chip";

import ChipIcon from "../../icons/Chip";

export interface IChipsProps extends ChipProps {
  selected?: boolean;
  fromMultiSelect?: boolean,
  [key: string]: any;
}

const Chip = ({
  selected,
  fromMultiSelect = false,
  disabled = false,
  ...otherProps
}: IChipsProps) => {
  const theme = useTheme();
  return (
    <MuiChip
      deleteIcon={<ChipIcon />}
      sx={[
        {
          backgroundColor: selected
            ? theme.palette.primary.main
            : theme.palette.grey[300],
          color: selected ? "#ffffff" : '#1A1A1A',
          ...(fromMultiSelect && {
            marginRight: '4px',
          }),
          "&:focus": {
            backgroundColor: selected
              ? theme.palette.primary.main
              : theme.palette.grey[300],
          },
          "&:hover": {
            backgroundColor: selected ? 'inherit' : theme.palette.primary[100],
            color: selected ? "#ffffff" : "#1A1A1A",
            "& path": {
              fill: selected ? "#ffffff" : "#1A1A1A",
            },
          },
        },
        disabled && {
          backgroundColor: `${theme.palette.grey[300]} !important`,
          opacity: `1 !important`,
          color: theme.palette.grey[100]
        },
      ]}
      {...otherProps}
    />
  );
};

export default Chip;
